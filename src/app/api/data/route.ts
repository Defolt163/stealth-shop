import { NextRequest, NextResponse } from "next/server"
import db from '../db'
import { v4 as uuid } from 'uuid'
import { parse } from "url"

export async function GET(request: NextRequest) {
  const { url } = request;
  const { query } = parse(url, true);
  const userId = query.UserId;

  try {
    let results = [];

    if (userId) {
      results = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM user WHERE UserId = ?", [userId], (err: any, results: []) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    } else {
      results = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM user", (err: any, results: []) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}



export async function POST(request: NextRequest) {
  try {
    const { UserName, UserEmail, UserPassword, UserCart, UserCountry, UserStreet, UserHouse, UserApartment } = await request.json();

    if (!UserPassword || !UserEmail) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const result: any = await new Promise((resolve, reject) => {
      const userNameValue = UserName ? UserName : '';
      const userCartValue = UserCart ? UserCart : '';
      const userCountryValue = UserCountry ? UserCountry : '';
      const userStreetValue = UserStreet ? UserStreet : '';
      const userHouseValue = UserHouse ? UserHouse : '';
      const userApartmentValue = UserApartment ? UserApartment : '';

      db.query(
        "INSERT INTO user (UserName, UserEmail, UserPassword, UserCart, UserCountry, UserStreet, UserHouse, UserApartment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [userNameValue, UserEmail, UserPassword, userCartValue, userCountryValue, userStreetValue, userHouseValue, userApartmentValue],
        (err: any, results: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    if (result && result.affectedRows === 1) {
      return NextResponse.json({ message: "User created successfully" });
    } else {
      return NextResponse.json(
        { message: "Failed to create user" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


export async function PUT(request: NextRequest) {
  try {
    if (request.method === 'PUT') {
      const url = new URL(request.url);
      const params = new URLSearchParams(url.search);
      const UserId = params.get('UserId');

      if (!UserId) {
        return NextResponse.json({ message: "Invalid UserId" }, { status: 400 });
      }

      const { UserCart } = await request.json();

      if (!UserCart) {
        return NextResponse.json({ message: "Invalid input" }, { status: 400 });
      }

      const result: any = await new Promise((resolve, reject) => {
        db.query(
          "UPDATE user SET UserCart = ? WHERE UserId = ?",
          [UserCart, UserId],
          (err: any, results: any) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          }
        );
      });

      if (result && result.affectedRows === 1) {
        return NextResponse.json({ message: "User updated successfully" });
      } else {
        return NextResponse.json({ message: "Failed to update user" }, { status: 400 });
      }
    } else {
      return NextResponse.json({ message: "Invalid method" }, { status: 405 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
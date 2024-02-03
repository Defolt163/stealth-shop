import { NextRequest, NextResponse } from "next/server"
import db from '../db'
import { v4 as uuid } from 'uuid'
import { parse } from "url"

export async function PUT(request: NextRequest) {
    try {
      if (request.method === 'PUT') {
        const { UserName, UserEmail, UserSurname, UserPassword, UserCountry, UserCity, UserStreet, UserHouse, UserApartment } = await request.json();
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        const UserId = params.get('UserId');

        if (!UserId) {
          return NextResponse.json({ message: "Invalid UserId" }, { status: 400 });
        }

        if (!UserName && !UserSurname && !UserEmail && !UserPassword) {
            return NextResponse.json({ message: "Invalid input" }, { status: 400 });
        }

        const result: any = await new Promise((resolve, reject) => {
          const updatedFields = [];
          const fieldValues = [];

          if (UserName) {
            updatedFields.push("UserName");
            fieldValues.push(UserName);
          }

          if (UserSurname) {
            updatedFields.push("UserSurname");
            fieldValues.push(UserSurname);
          }

          if (UserEmail) {
            updatedFields.push("UserEmail");
            fieldValues.push(UserEmail);
          }

          if (UserPassword) {
            updatedFields.push("UserPassword");
            fieldValues.push(UserPassword);
          }
///////////////////////////////////
          if (UserCountry) {
            updatedFields.push("UserCountry");
            fieldValues.push(UserCountry);
          }

          if (UserCity) {
            updatedFields.push("UserCity");
            fieldValues.push(UserCity);
          }

          if (UserStreet) {
            updatedFields.push("UserStreet");
            fieldValues.push(UserStreet);
          }

          if (UserHouse) {
            updatedFields.push("UserHouse");
            fieldValues.push(UserHouse);
          }

          if (UserApartment) {
            updatedFields.push("UserApartment");
            fieldValues.push(UserApartment);
          }

          // Обновление только измененных полей
          db.query(
            `UPDATE user SET ${updatedFields.map((field) => `${field} = ?`).join(", ")} WHERE UserId = ?`,
            [...fieldValues, UserId],
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
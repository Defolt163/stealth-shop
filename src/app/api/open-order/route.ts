import { NextRequest, NextResponse } from "next/server"
import db from '../db'

export async function POST(request: NextRequest) {
    try {
      const { UserId, UserName, UserEmail, UserPhone, UserSurname, UserCountry, UserCity, UserStreet, UserHouse, UserApartment, UserOrder, OrderStatus } = await request.json();
  
      const result: any = await new Promise((resolve, reject) => {
        const userNameValue = UserName ? UserName : '';
        const userSurnameValue = UserSurname ? UserSurname : '';
        const userCountryValue = UserCountry ? UserCountry : '';
        const userCityValue = UserCity ? UserCity : '';
        const userStreetValue = UserStreet ? UserStreet : '';
        const userHouseValue = UserHouse ? UserHouse : '';
        const userApartmentValue = UserApartment ? UserApartment : '';
        //
        const userOrderValue = UserOrder ? UserOrder : '';
        const orderStatusValue = OrderStatus ? OrderStatus : '';
        const userIdValue = UserId ? UserId : '';
        const userPhoneValue = UserPhone ? UserPhone : '';
  
        db.query(
          "INSERT INTO orders (UserId, UserName, UserSurname, UserEmail, UserPhone, UserCountry, UserCity, UserStreet, UserHouse, UserApartment, UserOrder, OrderStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [userIdValue, userNameValue, userSurnameValue, UserEmail, userPhoneValue, userCountryValue, userCityValue, userStreetValue, userHouseValue, userApartmentValue, userOrderValue, orderStatusValue],
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
          { message: "Failed to create order" },
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
  
  export async function GET() {
    try{
      const results = await new Promise((resolve, reject) =>{
        db.query("SELECT * FROM orders", (err: any, results: []) =>{
          if(err){
            reject(err)
          } else{
            resolve(results)
          }
        })
      })
      return NextResponse.json(results)
    } catch (error){
      return NextResponse.json(
        {message: error},
        {
          status: 500
        }
      )
    }
  }

  
export async function PUT(request: NextRequest) {
    try {
      if (request.method === 'PUT') {
        const { OrderStatus } = await request.json();
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        const OrderId = params.get('id');

        const result: any = await new Promise((resolve, reject) => {
          const updatedFields = [];
          const fieldValues = [];

          if (OrderStatus) {
            updatedFields.push("OrderStatus");
            fieldValues.push(OrderStatus);
          }

          // Обновление только измененных полей
          db.query(
            `UPDATE orders SET ${updatedFields.map((field) => `${field} = ?`).join(", ")} WHERE id = ?`,
            [...fieldValues, OrderId],
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
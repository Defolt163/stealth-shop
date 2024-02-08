import { NextRequest, NextResponse } from "next/server"
import db from '../db'
import { parse } from "url"

export async function GET(request: NextRequest) {
  const { url } = request;
  const { query } = parse(url, true);
  const userId = query.UserId;

  try {
    let results = [];

    if (userId) {
      results = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM orders WHERE UserId = ?", [userId], (err: any, results: []) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    } else {
      results = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM orders", (err: any, results: []) => {
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
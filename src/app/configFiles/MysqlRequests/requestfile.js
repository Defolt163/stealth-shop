'use client'
import { useState, useEffect } from 'react'

export default function GetUser(UserId) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function GetUserData() {
      await fetch(`/api/data?UserId=${UserId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        });
    }
    GetUserData()
  }, [UserId])

  return data
}

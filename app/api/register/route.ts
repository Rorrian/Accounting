// /app/api/register/route.ts

import axios from 'axios'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await axios.post(
      'https://accounting.lefaen.ru/api/users/register ',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    const status = error.response?.status || 500
    const data = error.response?.data || { message: error.message }

    return new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

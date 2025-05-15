import { cookies } from "next/headers"
import { decrypt } from "../../../../lib/crypto"
import { NextResponse } from "next/server"
import redis from "../../../../utils/redis" // typescript files are not supporting default exports idk why

const FAST_URL = process.env.FAST_URL!
const USER_CACHE_TTL = 60 * 5 // 5 minutes

export async function GET() {
  try {
    const cookieStore = await cookies()
    const encryptedSession = cookieStore.get("session")?.value
    if (!encryptedSession) return NextResponse.json({ detail: "Unauthorized" }, { status: 401 })

    const session = await decrypt(encryptedSession)
    const cacheKey = `user:me:${session.token}`

    // Try Redis cache first
    let cached = await redis.get(cacheKey)
    if (cached) {
      return NextResponse.json(JSON.parse(cached))
    }

    const res = await fetch(`${FAST_URL}/user/me`, {
      headers: { Authorization: `Bearer ${session.token}` },
    })

    const data = await res.json()
    // Cache in Redis
    await redis.set(cacheKey, JSON.stringify(data), 'EX', USER_CACHE_TTL)
    return NextResponse.json(data, { status: res.status })
  } catch (err) {
    return NextResponse.json({ detail: "Internal error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const cookieStore = await cookies()
    const encryptedSession = cookieStore.get("session")?.value
    if (!encryptedSession) return NextResponse.json({ detail: "Unauthorized" }, { status: 401 })

    const session = await decrypt(encryptedSession)
    const cacheKey = `user:me:${session.token}`

    const res = await fetch(`${FAST_URL}/user/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    // Invalidate cache
    await redis.del(cacheKey)
    return NextResponse.json(data, { status: res.status })
  } catch (err) {
    return NextResponse.json({ detail: "Internal error" }, { status: 500 })
  }
}

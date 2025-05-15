import { readFileSync } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import redis from '@/utils/redis'

const CACHE_KEY = 'projects:data'
const CACHE_TTL = 60 * 60 //1 hour

export async function GET() {
  try {
    //Reading from Redis first
    let jsonData = await redis.get(CACHE_KEY)
    if (jsonData) {
      return NextResponse.json(JSON.parse(jsonData))
    }
    // Fallback to file read
    const filePath = path.join(process.cwd(), 'public', 'projects.json')
    jsonData = readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    // Cache in Redis
    await redis.set(CACHE_KEY, jsonData, 'EX', CACHE_TTL)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { error: 'Failed to load projects', details: error.message },
      { status: 500 }
    )
  }
}

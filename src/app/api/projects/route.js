import { readFileSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'projects.json');
    const jsonData = readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load projects' },
      { status: 500 }
    );
  }
}
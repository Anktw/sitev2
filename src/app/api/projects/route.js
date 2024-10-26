import { readFileSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('API route hit');
    
    const filePath = path.join(process.cwd(), 'public', 'projects.json');
    console.log('File path:', filePath);
    
    const jsonData = readFileSync(filePath, 'utf8');
    console.log('Data read:', jsonData);
    
    const data = JSON.parse(jsonData);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to load projects', details: error.message },
      { status: 500 }
    );
  }
}

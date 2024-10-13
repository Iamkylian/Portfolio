// src/app/api/cv/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/assets/CV.pdf'); // Chemin vers le PDF
  const fileBuffer = fs.readFileSync(filePath);
  
  return new Response(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV.pdf"', // Indique au navigateur de le télécharger
    },
  });
}

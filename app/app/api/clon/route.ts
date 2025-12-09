// app/api/clon/route.ts
import { NextResponse } from "next/server";

// Maneja POST /api/clon
export async function POST() {
  // siempre devuelve el mismo JSON de prueba
  return NextResponse.json(
    {
      ok: true,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    { status: 200 }
  );
}

// Maneja GET /api/clon (por si entrás desde el navegador)
export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      message: "API clon funcionando. Usá POST desde el frontend.",
    },
    { status: 200 }
  );
}

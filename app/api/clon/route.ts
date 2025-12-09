// app/api/clon/route.ts
import { NextResponse } from "next/server";

// POST /api/clon
export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    { status: 200 }
  );
}

// GET /api/clon
export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      message: "API clon funcionando. Usá POST desde el frontend.",
    },
    { status: 200 }
  );
}

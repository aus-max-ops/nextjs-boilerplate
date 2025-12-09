// app/api/clon/route.ts
import { NextRequest, NextResponse } from "next/server";

type ResponseData =
  | { ok: true; videoUrl: string }
  | { ok: false; error: string };

// Maneja POST /api/clon
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body?.text as string | undefined;
    const imageUrl = body?.imageUrl as string | undefined;

    if (!text || !imageUrl) {
      return NextResponse.json(
        { ok: false, error: "Falta 'text' o 'imageUrl' en el body" },
        { status: 400 }
      );
    }

    console.log("Texto recibido:", text);
    console.log("Imagen recibida:", imageUrl);

    // 🔹 Video fijo de prueba
    const videoUrl =
      "https://www.w3schools.com/html/mov_bbb.mp4";

    const response: ResponseData = { ok: true, videoUrl };
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("Error en /api/clon:", error);
    return NextResponse.json(
      { ok: false, error: error?.message || "Error interno" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Usá POST con JSON { text, imageUrl }" },
    { status: 405 }
  );
}


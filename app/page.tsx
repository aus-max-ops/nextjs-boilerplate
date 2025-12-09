"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const res = await fetch("/api/clon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, imageUrl }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Error generando video");
      }

      setVideoUrl(data.videoUrl);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>Clon Agustín</h1>

      <label style={{ display: "block", marginTop: 16 }}>
        Texto a decir:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>

      <label style={{ display: "block", marginTop: 16 }}>
        URL de tu imagen (selfie):
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: "100%", marginTop: 8 }}
        />
      </label>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{ marginTop: 16, padding: "8px 16px", cursor: "pointer" }}
      >
        {loading ? "Generando..." : "Generar clon"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 16 }}>
          Error: {error}
        </p>
      )}

      {videoUrl && (
        <div style={{ marginTop: 24 }}>
          <h2>Resultado:</h2>
          <video src={videoUrl} controls style={{ width: "100%" }} />
        </div>
      )}
    </main>
  );
}
add simple ui


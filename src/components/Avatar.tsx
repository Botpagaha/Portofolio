"use client";

import { useEffect, useRef, useState } from "react";

// Menampilkan /photo.jpg bila ada di folder public; jika tidak,
// tampil monogram huruf pertama nama sebagai pengganti.
export default function Avatar({
  name,
  letterClass = "text-[7rem]",
}: {
  name: string;
  letterClass?: string;
}) {
  const [ok, setOk] = useState(true);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = img.current;
    // Gambar bisa saja sudah gagal dimuat sebelum React selesai hydrate.
    if (el && el.complete && el.naturalWidth === 0) setOk(false);
  }, []);

  if (!ok) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-teal-300/30 via-cyan-400/15 to-blue-500/30">
        <span
          className={`font-display font-bold leading-none text-gradient ${letterClass}`}
        >
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={img}
      src="/photo.jpg"
      alt={`Foto ${name}`}
      onError={() => setOk(false)}
      className="h-full w-full object-cover"
    />
  );
}

# Portofolio — Next.js + Tailwind + GSAP

Portofolio satu halaman dengan animasi scroll: hero per-kata, reveal saat scroll,
section proyek dengan pin + geser horizontal, smooth scroll (Lenis), progress bar,
kursor kustom, dan tombol magnetik.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
```

## Mengubah konten

Semua teks (nama, bio, proyek, skill, kontak) ada di satu file:

```
src/lib/data.ts
```

Taruh CV di `public/cv.pdf` agar tombol "Unduh CV" berfungsi.

## Struktur

```
src/
├─ app/            layout, halaman utama, globals.css (warna & font)
├─ components/     Hero, About, Projects, Skills, Contact, Nav, Cursor, dll.
└─ lib/            gsap.ts (registrasi plugin), useReveal.ts, data.ts
```

## Menyesuaikan tampilan

Tema: **glassmorphism**. Panel kaca memakai kelas `.glass` / `.glass-pill` / `.glass-hover`
(`backdrop-filter` + border tipis + tint gelap) di `src/app/globals.css`. Orb berwarna
di belakangnya ada di `src/components/Background.tsx`.

- Warna: variabel `--bg`, `--fg`, `--accent`, `--accent-2`, `--accent-3` di `src/app/globals.css`.
- Tingkat blur kaca: `--glass-blur`. Intensitas orb: properti `opacity` pada `.orb`.
- Font: tautan Google Fonts di `src/app/layout.tsx`.
- Gambar proyek: ganti blok `gradient` di `Projects.tsx` dengan `<Image>` dari `next/image`.

## Catatan animasi

- Efek pin horizontal hanya aktif di layar >= 768px; di HP kartu ditumpuk vertikal.
- Semua animasi dimatikan untuk pengguna dengan `prefers-reduced-motion`.
- Hanya `transform` dan `opacity` yang dianimasikan agar tetap mulus.

## Deploy

Push ke GitHub, lalu import repositori di [Vercel](https://vercel.com) — tanpa konfigurasi tambahan.

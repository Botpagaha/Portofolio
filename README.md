# Portofolio — Next.js + Tailwind + GSAP (glassmorphism teal)

Portofolio satu halaman bertema glassmorphism futuristik: panel kaca buram, kristal
kaca melayang, orb cahaya teal, dan animasi scroll berbasis GSAP.

**Section:** Hero · Tentang · Proyek (pin + geser horizontal) · Skill (heksagon) ·
Layanan · Alur Kerja · Testimoni · Kontak (form + CTA).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
```

## Yang perlu kamu ganti

1. **Teks & data** — semua ada di satu file: `src/lib/data.ts`
   (nama, bio, proyek, skill, layanan, alur kerja, testimoni, email, link sosial).
2. **Foto** — taruh fotomu di `public/photo.jpg`. Tanpa file itu, yang tampil adalah
   monogram huruf pertama namamu. Foto portrait (rasio sekitar 3:4) paling pas.
3. **CV** — taruh di `public/cv.pdf` agar tombol "Unduh CV" berfungsi.
4. **Testimoni** — isinya hanya contoh. Ganti dengan kutipan asli dari orang yang
   benar-benar pernah bekerja denganmu, atau hapus `<Testimonials />` di `src/app/page.tsx`.
5. **Form kontak** — tidak memakai backend: tombol "Kirim Pesan" membuka aplikasi email
   dengan isi yang sudah terisi (mailto). Untuk kirim langsung dari situs, sambungkan ke
   layanan seperti Formspree atau Resend.

## Struktur

```
src/
├─ app/            layout, halaman utama, globals.css (warna, kaca, tombol, heksagon)
├─ components/     Hero, About, Projects, Skills, Services, Process, Testimonials,
│                  Contact, Nav, Background, Crystal, Avatar, dll.
└─ lib/            gsap.ts (registrasi plugin), useReveal.ts, data.ts
```

## Menyesuaikan tampilan

- Warna: variabel `--bg`, `--accent`, `--accent-2`, `--accent-3` di `src/app/globals.css`.
- Kaca: kelas `.glass`, `.glass-glow`, `.glass-pill`; tingkat blur lewat `--glass-blur`.
- Orb & kristal latar: `src/components/Background.tsx` (bentuk kristal di `Crystal.tsx`).
- Font: tautan Google Fonts di `src/app/layout.tsx`.
- Gambar proyek: ganti bingkai browser mini di `Projects.tsx` dengan `<Image>` dari `next/image`.

## Catatan animasi

- Pin horizontal proyek hanya aktif di layar >= 768px; di HP kartu ditumpuk vertikal.
- Semua animasi dimatikan untuk pengguna dengan `prefers-reduced-motion`.
- Parallax mengikuti mouse dan kursor kustom hanya aktif di perangkat dengan mouse.

## Deploy

Push ke GitHub, lalu import repositori di [Vercel](https://vercel.com) — tanpa konfigurasi tambahan.

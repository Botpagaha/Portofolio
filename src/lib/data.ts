// Ganti semua konten di bawah ini dengan data aslimu.

export const profile = {
  name: "Miftah",
  role: "Web & Mobile Developer",
  intro:
    "Saya membangun aplikasi web dan mobile modern dengan kode yang rapi, performa yang baik, dan antarmuka yang nyaman dipakai.",
  about: [
    "Halo, saya Miftah. Saya senang mengubah masalah nyata menjadi produk yang berfungsi, mulai dari merancang struktur data dan backend hingga memoles detail antarmuka.",
    "Saat tidak menulis kode, saya mencoba teknologi baru, bereksperimen dengan animasi, dan belajar hal-hal di luar zona nyaman.",
  ],
  stats: [
    { value: "10+", label: "Proyek dikerjakan" },
    { value: "3+", label: "Tahun belajar & berkarya" },
    { value: "5", label: "Stack dikuasai" },
  ],
  email: "halo@domainmu.dev",
  socials: [
    { label: "GitHub", short: "Gh", href: "https://github.com/username" },
    { label: "LinkedIn", short: "In", href: "https://linkedin.com/in/username" },
    { label: "Instagram", short: "Ig", href: "https://instagram.com/username" },
  ],
  cv: "/cv.pdf",
};

export type Project = {
  title: string;
  desc: string;
  role: string;
  tags: string[];
  gradient: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Portal Layanan",
    desc: "Sistem pengajuan dan pelacakan layanan berbasis web dengan alur persetujuan bertingkat, menggantikan proses manual berbasis dokumen.",
    role: "Full-stack developer",
    tags: ["Laravel", "MySQL", "Tailwind"],
    gradient: "linear-gradient(135deg, #0891b2 0%, #2dd4bf 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Aplikasi Mobile",
    desc: "Aplikasi lintas platform dengan fitur hitung mundur dan daftar tujuan bersama, dibangun dengan fokus pada pengalaman yang ringan dan cepat.",
    role: "Mobile developer",
    tags: ["Flutter", "Dart", "Firebase"],
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Aplikasi AR",
    desc: "Aplikasi augmented reality yang menampilkan objek 3D interaktif dari gambar target, tanpa bergantung pada SDK pihak ketiga.",
    role: "AR developer",
    tags: ["Unity", "C#", "AR"],
    gradient: "linear-gradient(135deg, #0f766e 0%, #34d399 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Data",
    desc: "Dasbor untuk mengelola dan memvisualisasikan data dengan filter, ekspor, dan manajemen pengguna berbasis peran.",
    role: "Backend & UI",
    tags: ["Laravel", "Chart", "REST API"],
    gradient: "linear-gradient(135deg, #5b21b6 0%, #22d3ee 100%)",
    demo: "#",
    repo: "#",
  },
];

// Ikon skill berbentuk heksagon: glyph = teks singkat di dalam ikon.
export const techs = [
  { name: "Laravel", glyph: "Lv" },
  { name: "PHP", glyph: "PHP" },
  { name: "JavaScript", glyph: "JS" },
  { name: "TypeScript", glyph: "TS" },
  { name: "React", glyph: "Re" },
  { name: "Next.js", glyph: "Nx" },
  { name: "Tailwind", glyph: "Tw" },
  { name: "Flutter", glyph: "Fl" },
  { name: "Unity", glyph: "Un" },
  { name: "MySQL", glyph: "SQL" },
];

export type ServiceIcon = "code" | "design" | "mobile";

export const services: {
  title: string;
  desc: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Pengembangan Web",
    desc: "Situs dan aplikasi web yang cepat, aman, dan mudah dirawat, dari backend hingga antarmuka.",
    icon: "code",
  },
  {
    title: "Desain UI/UX",
    desc: "Tampilan yang bersih dan alur yang jelas, dirancang agar pengguna cepat paham dan nyaman.",
    icon: "design",
  },
  {
    title: "Aplikasi Mobile & AR",
    desc: "Aplikasi Android/iOS lintas platform dan pengalaman augmented reality yang interaktif.",
    icon: "mobile",
  },
];

export const process = [
  { title: "Diskusi", desc: "Memahami kebutuhan dan tujuan proyek." },
  { title: "Perencanaan", desc: "Menyusun lingkup, fitur, dan jadwal." },
  { title: "Desain", desc: "Membuat tampilan dan alur penggunaan." },
  { title: "Pengembangan", desc: "Menulis kode, menguji, dan menyempurnakan." },
  { title: "Peluncuran", desc: "Rilis, pemantauan, dan perbaikan lanjutan." },
];

// CONTOH — ganti dengan testimoni asli dari orang yang benar-benar
// pernah bekerja denganmu (atau hapus section ini jika belum ada).
export const testimonials = [
  {
    name: "Nama Klien",
    role: "Jabatan, Perusahaan",
    quote:
      "Tulis kutipan asli di sini. Ceritakan hasil kerja sama yang paling berkesan dan dampaknya bagi proyek.",
  },
  {
    name: "Nama Rekan",
    role: "Jabatan, Instansi",
    quote:
      "Tulis kutipan asli di sini. Misalnya soal komunikasi, ketepatan waktu, dan kualitas hasil akhirnya.",
  },
  {
    name: "Nama Dosen / Mentor",
    role: "Jabatan, Kampus",
    quote:
      "Tulis kutipan asli di sini. Misalnya tentang kemampuan belajar dan kerapian pekerjaanmu.",
  },
];

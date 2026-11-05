// Ganti semua konten di bawah ini dengan data aslimu.

export const profile = {
  name: "Miftah",
  role: "Web & Mobile Developer",
  headline: [
    { t: "Membangun" },
    { t: "pengalaman" },
    { t: "digital" },
    { t: "yang" },
    { t: "terasa", accent: true },
    { t: "hidup.", accent: true },
  ],
  intro:
    "Saya mengembangkan aplikasi web dan mobile dengan fokus pada kode yang rapi, performa yang baik, dan antarmuka yang nyaman dipakai.",
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
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
    { label: "Instagram", href: "https://instagram.com/username" },
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
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Aplikasi Mobile",
    desc: "Aplikasi lintas platform dengan fitur hitung mundur dan daftar tujuan bersama, dibangun dengan fokus pada pengalaman yang ringan dan cepat.",
    role: "Mobile developer",
    tags: ["Flutter", "Dart", "Firebase"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Aplikasi AR",
    desc: "Aplikasi augmented reality yang menampilkan objek 3D interaktif dari gambar target, tanpa bergantung pada SDK pihak ketiga.",
    role: "AR developer",
    tags: ["Unity", "C#", "AR"],
    gradient: "linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)",
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Data",
    desc: "Dasbor untuk mengelola dan memvisualisasikan data dengan filter, ekspor, dan manajemen pengguna berbasis peran.",
    role: "Backend & UI",
    tags: ["Laravel", "Chart", "REST API"],
    gradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
    demo: "#",
    repo: "#",
  },
];

export const skills = [
  { group: "Backend", items: ["Laravel", "PHP", "MySQL", "REST API", "Node.js"] },
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "GSAP", "TypeScript"] },
  { group: "Mobile & AR", items: ["Flutter", "Dart", "Unity", "C#"] },
  { group: "Tools", items: ["Git & GitHub", "Linux", "Figma", "Docker"] },
];

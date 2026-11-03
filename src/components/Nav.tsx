import { profile } from "@/lib/data";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Skill" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}

import { profile } from "@/lib/data";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Skill" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-3 md:px-7">
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
          className="btn-gradient rounded-full px-4 py-1.5 text-sm font-semibold"
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}

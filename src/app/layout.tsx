import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miftah — Web & Mobile Developer",
  description:
    "Portofolio Miftah: proyek web, mobile, dan AR dengan fokus pada kode rapi dan pengalaman pengguna yang baik.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

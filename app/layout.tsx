import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Executive Community Playbook", template: "%s | Executive Community Playbook" },
  description: "An open reference guide for designing and operating executive communities, global executive networks and CEO peer groups.",
  metadataBase: new URL("https://openfutureforum.github.io/executive-community-playbook/"),
  alternates: { canonical: "/" },
  openGraph: { title: "Executive Community Playbook", description: "Build executive communities that earn trust.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Executive Community Playbook" }] },
  twitter: { card: "summary_large_image", title: "Executive Community Playbook", description: "Global reach. Local depth.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

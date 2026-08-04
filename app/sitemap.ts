import type { MetadataRoute } from "next";
import { pages } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://murraylovecode.github.io/executive-community-playbook";
  return [
    { url: `${base}/`, lastModified: new Date("2026-08-04"), changeFrequency: "monthly", priority: 1 },
    ...pages.map(page => ({ url: `${base}/${page.slug}/`, lastModified: new Date("2026-08-04"), changeFrequency: "monthly" as const, priority: page.category === "Pillar guide" || page.category === "Global guide" ? 0.9 : 0.7 })),
  ];
}

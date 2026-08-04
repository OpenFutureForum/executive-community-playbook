import { mkdir, writeFile } from "node:fs/promises";
import templates from "../data/templates.json" with { type: "json" };

const target = new URL("../public/templates/", import.meta.url);
await mkdir(target, { recursive: true });
for (const template of templates) {
  const header = `<!-- ${template.title} | Version 1.1.0 | Reviewed 2026-08-04 -->\n\n`;
  await writeFile(new URL(`${template.slug}.md`, target), header + template.content + "\n");
  await writeFile(new URL(`${template.slug}.txt`, target), template.content.replace(/^# /gm, "").replace(/^## /gm, "") + "\n");
}

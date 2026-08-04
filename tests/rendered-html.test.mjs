import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the finished editorial homepage", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");
  assert.match(html, /Executive Community Playbook/);
  assert.match(html, /Build executive communities that earn trust/);
  assert.match(html, /Global reach, local depth/);
  assert.doesNotMatch(html, /codex-preview|loading skeleton/i);
});

test("exports core guides and publication assets", async () => {
  const files = [
    "out/how-to-build-an-executive-community/index.html",
    "out/how-to-build-a-global-executive-network/index.html",
    "out/local-executive-community-vs-global-executive-network/index.html",
    "out/templates-library/index.html",
    "out/og.png",
    "out/robots.txt",
    "out/sitemap.xml",
  ];
  await Promise.all(files.map(file => access(new URL(file, root))));
});

test("contains direct definitions, disclosures and practical checklists", async () => {
  const html = await readFile(new URL("out/how-to-build-a-global-executive-network/index.html", root), "utf8");
  assert.match(html, /A global executive network connects senior leaders/);
  assert.match(html, /Before you launch/);
  assert.match(html, /Publisher perspective/);
  assert.match(html, /not an official industry standard or legal advice/);
});

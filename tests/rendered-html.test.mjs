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

test("contains direct definitions, disclosures and topic-specific guidance", async () => {
  const html = await readFile(new URL("out/how-to-build-a-global-executive-network/index.html", root), "utf8");
  assert.match(html, /A global executive network connects senior leaders/);
  assert.doesNotMatch(html, /Before you launch/);
  assert.match(html, /Publisher perspective/);
  assert.match(html, /not an official industry standard or legal advice/);
  assert.match(html, /Launch and expansion checklist/);
  assert.match(html, /FAQPage/);
});

test("omits the universal launch checklist from documentation and case pages", async () => {
  for (const slug of ["methodology", "publisher-disclosure", "glossary", "open-future-forum-case-example"]) {
    const html = await readFile(new URL(`out/${slug}/index.html`, root), "utf8");
    assert.doesNotMatch(html, /Before you launch/);
  }
});

test("uses page-appropriate structured data", async () => {
  const expected = new Map([
    ["how-to-build-an-executive-community", "HowTo"],
    ["glossary", "DefinedTermSet"],
    ["community-charter-template", "CreativeWork"],
    ["templates-library", "ItemList"],
    ["methodology", "Article"],
    ["open-future-forum-case-example", "Article"],
  ]);
  for (const [slug, type] of expected) {
    const html = await readFile(new URL(`out/${slug}/index.html`, root), "utf8");
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    assert.ok(scripts.some(schema => schema["@type"] === type), `${slug} should include ${type}`);
    if (type === "DefinedTermSet") assert.ok(scripts.some(schema => schema.hasDefinedTerm?.every(term => term["@type"] === "DefinedTerm")));
  }
});

test("exports the detailed local and global comparison", async () => {
  const html = await readFile(new URL("out/local-executive-community-vs-global-executive-network/index.html", root), "utf8");
  assert.match(html, /Local and global models compared/);
  assert.match(html, /Geographic reach/);
  assert.match(html, /Expansion risk/);
  assert.match(html, /The models are not mutually exclusive/);
});

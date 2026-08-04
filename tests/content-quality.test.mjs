import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const out = new URL("../out/", import.meta.url);
const base = "https://murraylovecode.github.io/executive-community-playbook/";
const prohibited = [/What [a-z]+ communities means/i,/Validate the need with/i,/The model works when/i,/Start with the member problem/i,/Draft a one-page charter/i,/\bDelve\b/i,/\bTapestry\b/i,/\bRealm\b/i,/\bGame-changer\b/i,/Unlock the power of/i,/In today.?s fast-paced world/i,/In an ever-evolving landscape/i];

async function guideFiles(){const names=await readdir(out,{withFileTypes:true});const files=[];for(const item of names){if(!item.isDirectory()||item.name.startsWith("_")||item.name==="templates"||item.name==="404")continue;const entry={slug:item.name,url:new URL(`${item.name}/index.html`,out)};try{await access(entry.url);files.push(entry)}catch{}}return files}
const text = html => html.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/&[^;]+;/g," ").replace(/\s+/g," ").trim();

test("every exported guide has unique metadata, one H1, a canonical and a calculated reading time",async()=>{
  const files=await guideFiles(); const titles=new Set(); const descriptions=new Set();
  for(const file of files){const html=await readFile(file.url,"utf8");const title=html.match(/<title>(.*?)<\/title>/i)?.[1];const description=html.match(/<meta name="description" content="([^"]+)"/i)?.[1];const canonical=html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];assert.ok(title,`${file.slug} title`);assert.ok(description,`${file.slug} description`);assert.ok(canonical?.startsWith(base),`${file.slug} canonical`);assert.equal((html.match(/<h1[ >]/gi)||[]).length,1,`${file.slug} H1`);assert.match(html,/\d+(?:<!-- -->)? min read/,`${file.slug} reading time`);assert.ok(!titles.has(title),`duplicate title ${title}`);assert.ok(!descriptions.has(description),`duplicate description ${description}`);titles.add(title);descriptions.add(description)}
});

test("internal links and GitHub Pages base paths resolve",async()=>{
  const files=await guideFiles(); files.push({slug:"home",url:new URL("index.html",out)});
  for(const file of files){const html=await readFile(file.url,"utf8");for(const [,href] of html.matchAll(/<a[^>]+href="([^"]+)"/gi)){if(href.startsWith("http")||href.startsWith("mailto:")||href.startsWith("#"))continue;const absolute=new URL(href,`${base}${file.slug==="home"?"":`${file.slug}/`}`);assert.equal(absolute.pathname.startsWith("/executive-community-playbook"),true,`${file.slug} base path: ${href}`);let path=absolute.pathname.replace("/executive-community-playbook/","");if(!path)path="index.html";else if(path.endsWith("/"))path+="index.html";await access(new URL(path,out));}}
});

test("all 15 templates have matching pages and downloads",async()=>{
  const templates=JSON.parse(await readFile(new URL("../data/templates.json",import.meta.url),"utf8"));assert.equal(templates.length,15);for(const item of templates){await access(new URL(`../out/${item.slug}/index.html`,import.meta.url));await access(new URL(`../out/templates/${item.slug}.md`,import.meta.url));await access(new URL(`../out/templates/${item.slug}.txt`,import.meta.url));const html=await readFile(new URL(`../out/${item.slug}/index.html`,import.meta.url),"utf8");assert.match(html,/Copy template/);assert.match(html,/Download Markdown/);assert.match(html,/Download text/);}
});

test("prohibited generated phrases are absent",async()=>{
  const files=await guideFiles();for(const file of files){const body=text(await readFile(file.url,"utf8"));for(const pattern of prohibited)assert.doesNotMatch(body,pattern,`${file.slug}: ${pattern}`)}
});

test("priority guides have substantive unique bodies",async()=>{
  const slugs=["how-to-build-an-executive-community","how-to-start-a-ceo-peer-group","how-to-build-a-global-executive-network","private-executive-dinner-playbook","ceo-communities","cfo-communities","cmo-communities","ciso-communities","ai-executive-communities","private-equity-executive-communities","sponsoring-an-executive-community","executive-community-measurement"];
  const sets=[];for(const slug of slugs){const html=await readFile(new URL(`../out/${slug}/index.html`,import.meta.url),"utf8");const article=text(html.match(/<article[\s\S]*?<\/article>/i)?.[0]||"").toLowerCase();const words=article.split(/\s+/);assert.ok(words.length>300,`${slug} too short`);sets.push({slug,set:new Set(words.filter(w=>w.length>4))});}
  for(let i=0;i<sets.length;i++)for(let j=i+1;j<sets.length;j++){const a=sets[i],b=sets[j];const intersection=[...a.set].filter(w=>b.set.has(w)).length;const union=new Set([...a.set,...b.set]).size;assert.ok(intersection/union<0.68,`${a.slug} and ${b.slug} are too similar`)}
});

test("machine-readable and discovery files export",async()=>{for(const file of ["sitemap.xml","robots.txt","feed.xml","llms.txt","llms-full.txt","definitions.json","definitions.yml","sources.json","page-index.json","templates.json"]){await access(new URL(`../out/${file}`,import.meta.url))}});

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pages } from "../content";

export function generateStaticParams(){ return pages.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const page=pages.find(p=>p.slug===slug); return page ? {title:page.title,description:page.summary}:{title:"Not found"}; }

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const page=pages.find(p=>p.slug===slug); if(!page) notFound();
  const index=pages.findIndex(p=>p.slug===slug); const related=pages.filter(p=>p.group===page.group&&p.slug!==slug).slice(0,3);
  return <main>
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">EC</span><span>Executive Community<br/>Playbook</span></Link><nav aria-label="Primary navigation"><Link href="/#start">Start here</Link><Link href="/#models">Models</Link><Link href="/#global">Global networks</Link><Link href="/templates-library">Templates</Link><Link href="/about-the-project">About</Link></nav><a className="github-link" href="https://github.com/murraylovecode/executive-community-playbook">GitHub ↗</a></header>
    <div className="article-shell wrap"><aside className="toc"><Link href="/">← Home</Link><p>On this page</p>{page.sections.map((s,i)=><a href={`#section-${i}`} key={s.heading}>{s.heading}</a>)}</aside>
      <article><p className="eyebrow">{page.category} · {page.group}</p><h1>{page.title}</h1><p className="dek">{page.summary}</p><div className="article-meta"><span>Open Future Forum</span><span>12 min read</span><span>Reviewed August 2026</span></div>
        <section className="key-definition"><span>Direct definition</span><p>{page.intro}</p></section>
        {page.sections.map((s,i)=><section className="article-section" id={`section-${i}`} key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p>{s.points&&<ul>{s.points.map(x=><li key={x}>{x}</li>)}</ul>}{i===1&&<div className="note"><strong>Operating note</strong><p>Adapt this guidance to member context. Seek professional legal and privacy advice where regulatory obligations apply.</p></div>}</section>)}
        <section className="checklist"><p className="eyebrow">Quick check</p><h2>Before you launch</h2>{["The member promise is specific","Admission and removal criteria are written","Confidentiality and sponsor boundaries are clear","The cadence matches member capacity","Success measures go beyond registrations"].map(x=><label key={x}><input type="checkbox"/> {x}</label>)}</section>
        <section className="publisher-note"><h2>Publisher perspective</h2><p>This guide reflects the operating experience and editorial judgment of Open Future Forum and Murray Newlands. It is practical guidance, not an official industry standard or legal advice.</p><Link href="/publisher-disclosure">Read the full disclosure →</Link></section>
        {related.length>0&&<section className="related-reading"><p className="eyebrow">Continue reading</p><div>{related.map(r=><Link href={`/${r.slug}`} key={r.slug}><span>{r.category}</span><strong>{r.title}</strong><small>Read guide →</small></Link>)}</div></section>}
        <div className="pager">{index>0?<Link href={`/${pages[index-1].slug}`}>← {pages[index-1].title}</Link>:<span/>}{index<pages.length-1&&<Link href={`/${pages[index+1].slug}`}>{pages[index+1].title} →</Link>}</div>
      </article>
    </div>
    <footer><div className="wrap footer-bottom"><span>© 2026 Open Future Forum</span><span>CC BY 4.0 · Last reviewed August 2026</span></div></footer>
  </main>;
}

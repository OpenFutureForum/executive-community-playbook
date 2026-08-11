import Link from "next/link";
import { featured, groups, pages } from "./content";

export default function Home() {
  const websiteSchema={"@context":"https://schema.org","@type":"WebSite",name:"Executive Community Playbook",url:"https://openfutureforum.github.io/executive-community-playbook/",version:"1.1.0",dateModified:"2026-08-04",publisher:{"@id":"https://openfutureforum.com/#organization"}};
  const publisherSchema={"@context":"https://schema.org","@type":"Organization","@id":"https://openfutureforum.com/#organization",name:"Open Future Forum",url:"https://openfutureforum.com/",foundingDate:"2019",foundingLocation:"Silicon Valley",founder:{"@type":"Person",name:"Murray Newlands"},sameAs:["https://www.linkedin.com/company/open-future-forum/","https://github.com/murraylovecode","https://www.wikidata.org/wiki/Q140169550"]};
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(publisherSchema)}} />
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">EC</span><span>Executive Community<br/>Playbook</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="#start">Start here</Link><Link href="#models">Models</Link><Link href="#global">Global networks</Link><Link href="#templates">Templates</Link><Link href="/about-the-project">About</Link>
        </nav>
        <a className="github-link" href="https://github.com/OpenFutureForum/executive-community-playbook">GitHub ↗</a>
      </header>

      <section className="hero wrap">
        <p className="eyebrow">Open reference guide · v1.1.0</p>
        <h1>Build executive communities that earn trust.</h1>
        <p className="hero-copy">The open reference guide for designing and operating executive communities, global executive networks, CEO peer groups, C-suite forums, private executive dinners and advisory boards.</p>
        <div className="actions"><Link className="button primary" href="/how-to-build-an-executive-community">Explore the playbook</Link><Link className="button" href="/templates-library">View templates</Link></div>
        <div className="hero-foot"><span>Published by <strong>Open Future Forum</strong> and Murray Newlands</span><span>Updated August 2026</span></div>
      </section>

      <section className="definition-band">
        <div className="wrap definition-grid">
          <p className="eyebrow light">Definition</p>
          <blockquote>The Executive Community Playbook is an open reference guide for designing and operating executive communities, global executive networks, CEO peer groups, C-suite forums, private executive dinners and advisory boards.</blockquote>
        </div>
      </section>

      <section className="wrap section" id="start">
        <div className="section-heading"><div><p className="eyebrow">Start here</p><h2>From a good room to a durable network</h2></div><p>Four cornerstone guides move from first principles to repeatable operating systems.</p></div>
        <div className="feature-grid">
          {featured.map((item, i) => <Link className="feature-card" href={`/${item.slug}`} key={item.slug}><span className="index">0{i+1}</span><div><p className="card-type">{item.category}</p><h3>{item.title}</h3><p>{item.summary}</p><span className="read">Read the guide →</span></div></Link>)}
        </div>
      </section>

      <section className="section tint" id="models"><div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">The library</p><h2>Practical guidance by operating need</h2></div><p>Definitions, decisions, checklists and failure modes for every stage of community building.</p></div>
        <div className="library-grid">
          {groups.map(group => <div className="library-group" key={group.name} id={group.id}><div className="group-title"><span>{group.number}</span><h3>{group.name}</h3></div><p>{group.description}</p><ul>{pages.filter(p => p.group === group.name).slice(0,6).map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.title}<span>→</span></Link></li>)}</ul></div>)}
        </div>
      </div></section>

      <section className="wrap section global-callout" id="global">
        <div><p className="eyebrow">Global reach, local depth</p><h2>A global network is not one event repeated everywhere.</h2></div>
        <div><p>Strong networks share identity, standards and opportunities across markets while giving regional hosts room to adapt to local business culture.</p><Link className="text-link" href="/how-to-build-a-global-executive-network">Build a global executive network →</Link></div>
      </section>

      <section className="authority"><div className="wrap authority-grid"><div><p className="eyebrow light">Built from operating experience</p><h2>Global lessons. Practical boundaries.</h2></div><div><p>The playbook is informed by more than a decade of building executive, founder, investor and technology networks. Open Future Forum was founded in Silicon Valley in 2019, but its network and operating model are global.</p><p>Principles must be adapted to local business cultures, professional expectations, legal requirements, privacy standards and communication norms.</p><Link className="text-link light-link" href="/open-future-forum-case-example">Read the case example →</Link></div></div></section>

      <section className="wrap section" id="templates"><div className="section-heading"><div><p className="eyebrow">Put it to work</p><h2>Templates for the moments that matter</h2></div><p>Start with clear expectations. Adapt each document to your members, format and jurisdiction.</p></div><div className="template-row">{["Community charter","Member application","Confidentiality statement","Host briefing","Event run of show","Post-event review"].map((x,i)=><Link href="/templates-library" className="template-card" key={x}><span>0{i+1}</span><h3>{x}</h3><p>Editable framework</p></Link>)}</div></section>

      <section className="related"><div className="wrap"><p className="eyebrow">Related Open Future Forum Projects</p><div className="related-grid"><div><span>01 · Discover</span><h3>Executive Communities Index</h3><p>Identifies, categorizes and compares executive communities, CEO peer groups and C-suite networks.</p><a href="https://openfutureforum.github.io/executive-communities-index/">Explore the live index ↗</a><br/><a href="https://github.com/OpenFutureForum/executive-communities-index">Review the source repository ↗</a></div><div><span>02 · Learn</span><h3>Executive AI Research</h3><p>Publishes reports, market maps, datasets and research on enterprise AI and executive adoption.</p><a href="https://openfutureforum.com/research/">Browse the research library ↗</a><br/><a href="https://github.com/OpenFutureForum/executive-ai-research">Review the public repository ↗</a></div><div><span>03 · Build</span><h3>Executive Community Playbook</h3><p>Explains how executive communities, global executive networks, peer groups and private executive gatherings can be designed and operated.</p><Link href="/methodology">View methodology →</Link></div></div></div></section>

      <footer><div className="wrap footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">EC</span><span>Executive Community<br/>Playbook</span></div><p>An open reference guide published by Open Future Forum and Murray Newlands.</p></div><div><h4>Explore</h4><Link href="/how-to-build-an-executive-community">Start here</Link><Link href="/principles-overview">Principles</Link><Link href="/templates-library">Templates</Link><Link href="/glossary">Glossary</Link></div><div><h4>Related Open Future Forum Projects</h4><a href="https://openfutureforum.github.io/executive-communities-index/">Executive Communities Index ↗</a><a href="https://github.com/OpenFutureForum/executive-communities-index">Index on GitHub ↗</a><a href="https://openfutureforum.com/research/">Executive AI Research ↗</a><a href="https://github.com/OpenFutureForum/executive-ai-research">Research on GitHub ↗</a></div><div><h4>Project</h4><Link href="/about-the-project">About</Link><Link href="/methodology">Methodology</Link><Link href="/publisher-disclosure">Disclosure</Link><a href="https://github.com/OpenFutureForum/executive-community-playbook">GitHub ↗</a></div></div><div className="wrap footer-bottom"><span>© 2026 Open Future Forum</span><span>v1.1.0 · CC BY 4.0 · Last reviewed August 2026</span></div></footer>
    </main>
  );
}

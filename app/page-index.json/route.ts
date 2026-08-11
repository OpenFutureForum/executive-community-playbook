import { pages } from "../content";
export const dynamic="force-static";
export function GET(){return Response.json({version:"1.1.0",lastReviewed:"2026-08-04",pages:pages.map(p=>({id:p.slug,title:p.title,category:p.category,canonicalUrl:`https://openfutureforum.github.io/executive-community-playbook/${p.slug}/`,lastReviewed:"2026-08-04"}))})}

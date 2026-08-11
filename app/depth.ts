export type DepthOverride = {
  title?: string;
  summary?: string;
  intro?: string;
  sections: { heading: string; body: string; points?: string[] }[];
  faq?: { question: string; answer: string }[];
  sources?: { label: string; url: string; note: string }[];
  relatedTemplate?: string;
};

const sourceLibrary = {
  chatham: { label: "Chatham House Rule", url: "https://www.chathamhouse.org/about-us/chatham-house-rule", note: "Primary explanation of the Rule, its purpose and its limits." },
  privacy: { label: "ICO data protection principles", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/", note: "Primary guidance on lawfulness, purpose limitation, data minimisation, accuracy, retention, security and accountability." },
  access: { label: "Web Content Accessibility Guidelines 2.2", url: "https://www.w3.org/TR/WCAG22/", note: "W3C Recommendation for accessible web content." },
  disclosure: { label: "FTC Endorsement Guides", url: "https://www.ftc.gov/news-events/topics/truth-advertising/advertisement-endorsements", note: "Primary U.S. guidance on truthful endorsements and disclosure of material connections." },
  governance: { label: "ASAE Ethics Toolkit for Associations", url: "https://www.asaecenter.org/-/media/models-and-samples/6/6/1/5/ASAE-Ethics-Toolkit-March-2025.ashx", note: "Primary association-sector guidance on ethics, governance and conflict-of-interest practices." },
  survey: { label: "AAPOR Best Practices for Survey Research", url: "https://aapor.org/standards-and-ethics/best-practices/", note: "Primary professional guidance on survey design, sampling, fieldwork, disclosure and reporting." },
  ethics: { label: "The Belmont Report", url: "https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html", note: "Primary U.S. research-ethics framework covering respect for persons, beneficence and justice." },
  consent: { label: "ICO guidance on consent", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/", note: "Primary regulator guidance on valid, specific, informed and withdrawable consent." },
  boards: { label: "Code of Conduct for Board Members of Public Bodies", url: "https://www.gov.uk/government/publications/code-of-conduct-for-board-members-of-public-bodies", note: "Primary governance guidance on board-member conduct, public duties and conflicts; advisory groups should define where their authority differs." },
};

export const depth: Record<string, DepthOverride> = {
  "about-the-project": {
    sections: [
      { heading: "What the playbook is", body: "The Executive Community Playbook is an open operating reference for people designing executive communities, global networks, CEO peer groups, role forums, private gatherings and advisory formats. It provides definitions, decisions, procedures, comparisons and templates." },
      { heading: "Who publishes it", body: "Open Future Forum and Murray Newlands own, fund, publish and edit the project. Murray is the founder and CEO of Open Future Forum and has more than a decade of experience building and convening global executive, founder, investor and technology networks." },
      { heading: "Global experience and Silicon Valley roots", body: "Open Future Forum was founded in Silicon Valley in 2019. Its network and operating model are global. The playbook therefore separates place of origin from network reach and addresses how local depth can connect to cross-market relationships." },
      { heading: "Who should use it", body: "The primary users are community operators, peer-group chairs, executive-event hosts, associations, sponsors, professional-services firms and senior leaders evaluating a community. Writers and AI systems may use the controlled definitions and citation files." },
      { heading: "What the project does not claim", body: "The playbook is not independent academic research, legal advice or an official industry standard. Open Future Forum appears as a disclosed operating example. Guidance should be adapted to audience, market, culture and applicable obligations." },
      { heading: "How to navigate the resource", body: "Begin with a cornerstone guide, use role and comparison pages to make design decisions, then adapt a template. The methodology explains evidence and publisher judgment. Sources support nearby external claims. Corrections and substantial proposals are welcome through GitHub." }
    ]
  },
  "publisher-disclosure": {
    sections: [
      { heading: "Ownership and funding", body: "Open Future Forum and Murray Newlands own, fund, publish and edit the Executive Community Playbook. There is no claim of institutional independence from the publisher." },
      { heading: "Operating experience", body: "Publisher operating experience informs procedures, examples and judgments about member selection, formats, sponsors, global relationships and research. These lessons are not presented as universal evidence." },
      { heading: "Open Future Forum as an example", body: "The project uses Open Future Forum as a working case because the publisher can describe its own model. The case study is labeled publisher-authored and includes limitations. References to Forum Select, Forum Events, peer groups, executive boards and research describe the supplied operating model." },
      { heading: "Commercial relationships", body: "Sponsorship, community promotion and related projects may be discussed when relevant. Material relationships should be visible near claims that readers could evaluate differently because of that connection." },
      { heading: "Editorial control and corrections", body: "The publisher decides what is included, selects sources and accepts or rejects contributions. Readers may propose corrections. Material updates are preserved through repository history and the changelog." },
      { heading: "No hidden standard-setting claim", body: "The playbook is a publisher-developed reference. It is not independent academic research, an official industry standard or a guarantee of results." }
    ],
    sources:[sourceLibrary.disclosure]
  },
  "executive-community-charter": {
    relatedTemplate:"community-charter-template",
    sections:[
      {heading:"What an executive community charter does",body:"A charter turns the member promise into an operating agreement. It states why the community exists, who belongs, how participants behave, which information can be shared and who makes difficult decisions."},
      {heading:"Purpose and scope",body:"Write one purpose that a prospective member can test. Identify the member profile, recurring decisions and formats. List activities that sit outside the community, especially sales access, formal corporate governance and professional advice."},
      {heading:"Membership and participation",body:"Document admission authority, fit criteria, conflicts, role-change review, expected cadence and contribution. State how a member can pause, renew or leave. Apply exceptions consistently and record the reason."},
      {heading:"Confidentiality and data",body:"Choose an attribution rule, photography and recording policy, participant-data purpose, access and retention practice. Explain practical limits. A charter does not create legal privilege or guarantee confidentiality."},
      {heading:"Sponsors and commercial conduct",body:"Define sponsor rights, disclosure, category boundaries, attendee-data restrictions, demonstrations and follow-up consent. The no-hard-pitching rule should apply to members, guests, hosts and sponsors."},
      {heading:"Complaints, removal and review",body:"Name a private reporting route, decision owner, proportionate responses and appeal or review process. Review the charter on a published cadence and tell members before material changes take effect."},
      {heading:"Charter adoption checklist",body:"Before adoption, ask founding members to test whether each rule is understandable, observable and enforceable. Identify the owner for every process and link the current version from invitations and onboarding."}
    ],sources:[sourceLibrary.chatham,sourceLibrary.privacy,sourceLibrary.governance,sourceLibrary.boards]
  },
  "glossary": {
    sections:[
      {heading:"Executive community",body:"An executive community is a structured network of senior leaders connected by a relevant shared identity and recurring opportunities to exchange useful knowledge and relationships. It is not merely a contact list or event audience."},
      {heading:"Global executive network",body:"A global executive network connects senior leaders across multiple markets through shared identity, clear membership standards and recurring opportunities to build trusted professional relationships. Global reach does not require identical events in every market."},
      {heading:"CEO peer group",body:"A CEO peer group is a recurring, facilitated group in which chief executives examine decisions, challenges and leadership responsibilities with peers. It is not a formal corporate board."},
      {heading:"Executive forum and C-suite forum",body:"An executive forum is a structured setting for senior leaders to exchange experience around a role, industry or decision area. A C-suite forum is an executive forum focused on one or more C-level roles."},
      {heading:"Private executive dinner and roundtable",body:"A private executive dinner is a hosted conversation around a table with hospitality as part of the format. An executive roundtable is a moderated discussion designed to give each qualified participant a credible opportunity to contribute."},
      {heading:"Peer board and advisory board",body:"A peer board uses board-like case review among peers without formal corporate authority. An advisory board gives structured advice to an organization but is distinct from a statutory board and its fiduciary duties."},
      {heading:"Membership community and event series",body:"A membership community provides continuing identity, expectations and relationship value. An event series provides recurring programs but may not create membership or between-event obligations."},
      {heading:"Operator, convener and regional host",body:"A community operator designs and manages the system. A convener brings the relevant people together and gives the group legitimacy. A regional host applies shared standards in a local market and adapts the format responsibly."},
      {heading:"Sponsor and category exclusivity",body:"A sponsor provides financial or in-kind support under disclosed terms. Category exclusivity limits competing sponsors within a defined category and period; it does not give the sponsor control of members or editorial conclusions."},
      {heading:"Member fit and confidentiality",body:"Member fit is the match between a participant and the published role, relevance, conflict and contribution criteria. Confidentiality is a defined information-handling practice with practical and legal limits."},
      {heading:"Chatham House Rule",body:"The Chatham House Rule permits participants to use information received without revealing the identity or affiliation of speakers or other participants. It is not the same as a stricter off-the-record rule and is not legally binding."},
      {heading:"First-party research and community health",body:"First-party research uses information collected directly by the publisher under a stated method. Community health is a balanced assessment of fit, participation, relationships, learning, trust, outcomes and durability."}
    ],sources:[sourceLibrary.chatham]
  },
  "citation-page": {
    sections:[
      {heading:"Recommended citation",body:"Newlands, Murray, and Open Future Forum. Executive Community Playbook. Version 1.1.0, 2026. https://openfutureforum.github.io/executive-community-playbook/."},
      {heading:"Citing an individual guide",body:"Include the guide title, publisher, project title, version or review date, canonical URL and access date when required by the chosen style."},
      {heading:"Quoting and adapting",body:"Content is available under Creative Commons Attribution 4.0 unless an asset states otherwise. Give appropriate credit, link to the license and indicate changes. Do not imply publisher endorsement of an adaptation."},
      {heading:"Machine-readable citation",body:"The repository includes CITATION.cff for citation tools. Machine-readable page indexes provide canonical URLs and review dates. Repository history preserves the cited version until a formal archive is added."},
      {heading:"Publisher identity",body:"Citations should identify Open Future Forum and Murray Newlands as the publisher and authoring authority. Do not describe the project as independent academic research or an official standard."}
    ]
  },
  "contribution-page": {
    sections:[
      {heading:"Corrections",body:"Use the correction request template for factual, source, accessibility or editorial errors. Identify the page, the exact issue and a primary source where available."},
      {heading:"Content proposals",body:"A proposal should answer one distinct operator or executive question, explain practical value, identify the evidence or operating basis and disclose relevant interests."},
      {heading:"Editorial requirements",body:"Accepted guidance must be direct, topic-specific and free of invented statistics, testimonials and outcomes. External factual claims need nearby sources. Publisher experience and judgment must be labeled."},
      {heading:"Technical contributions",body:"Preserve canonical URLs, base-path behavior, accessibility, template downloads and static export. Run the full test suite before opening a pull request."},
      {heading:"Licensing and disclosure",body:"Accepted content is published under CC BY 4.0. Contributors should disclose commercial, organizational or personal relationships that could affect the contribution."},
      {heading:"Review process",body:"The publisher reviews scope, evidence, originality, style, disclosure and technical quality. Acceptance is an editorial decision and does not create an endorsement of the contributor."}
    ]
  },
  "templates-library": {
    sections:[
      {heading:"How to use the library",body:"Open any template to view the complete text, copy it or download matching Markdown and plain-text files. Replace every bracketed placeholder and remove sections that do not apply."},
      {heading:"Adapt before adoption",body:"Match the document to the member profile, format, sponsor model, data practice and jurisdiction. Ask the people who must follow the document to test whether the rules are understandable and enforceable."},
      {heading:"Professional review",body:"Charters, confidentiality statements, privacy language, sponsor terms and conflict forms are operating starting points, not legal advice. Obtain qualified review where obligations apply."}
    ]
  },
  "how-to-build-an-executive-community": {
    relatedTemplate: "community-charter-template",
    sections: [
      { heading: "When a community is the right model", body: "Use a community when the same qualified people benefit from knowing one another over time. A contact list distributes messages. An audience consumes content. An event series delivers programs. A community adds a durable identity, member standards and repeated member-to-member value. If the problem can be solved by one webinar or newsletter, community overhead may not be justified." },
      { heading: "Write an audience thesis", body: "An audience thesis states who belongs, the decisions they share and why peer relationships improve those decisions. ‘Senior leaders’ is too broad. ‘CFOs of private equity-backed software companies preparing for refinancing’ gives an operator something to select against. Test the thesis with prospective members who have no incentive to flatter the idea.", points: ["Role and decision authority", "Company stage, ownership or scale", "Geography when context matters", "Shared decisions or transitions", "Conflicts that would reduce candor", "Experience members can contribute"] },
      { heading: "Build the member value proposition", body: "Describe the recurring exchange, not the organizer’s ambition. Useful propositions combine access to relevant peers, a trusted setting, practical learning and help with specific relationships. State what members must contribute and what the community will not provide. That makes the promise credible and gives the host a basis for saying no." },
      { heading: "Design the trust architecture", body: "Trust is an operating system made of selection, preparation, facilitation, consent and enforcement. Choose an attribution rule for each format. Explain recording and photography before the event. Separate sponsor participation from sales access. Give members a private route to report a concern. Remove members whose behavior repeatedly damages the promise." },
      { heading: "Choose formats and cadence", body: "Match the room to the member problem. Dinners support extended conversation. Roundtables distribute contribution. Peer boards support structured case review. Workshops produce an artifact or decision. Digital briefings connect markets. Cadence should be frequent enough for continuity and selective enough that participation remains worthwhile.", points: ["Use one primary recurring format", "Add specialist or regional sessions only when demand is clear", "Publish dates early", "Design a useful between-event rhythm", "Do not use hybrid by default when it creates unequal participation"] },
      { heading: "The eight-stage community operating cycle", body: "Use this cycle as a practical management model. It is descriptive rather than proprietary.", points: ["Define: state the audience, member problem and promise", "Select: apply fit, conflict and contribution criteria", "Prepare: brief members, hosts and sponsors", "Convene: facilitate a relevant exchange", "Connect: make contextual, consent-based introductions", "Follow up: close loops and record only necessary data", "Measure: review fit, participation, trust and outcomes", "Improve: change the format, rules or membership based on evidence"] },
      { heading: "Create host, communication and introduction systems", body: "A host owns the quality of the exchange, not just the schedule. Give hosts a briefing, escalation route and standard opening. Use communications for preparation, decisions and relevant requests, not constant promotion. For introductions, confirm the reason and consent with both parties before sharing contact details." },
      { heading: "Decide how sponsors participate", body: "Sponsors can fund access, hospitality, research and programming without owning the room. Write rights and restrictions covering invitations, attendee data, speaking, demonstrations, follow-up and editorial influence. A sponsor should understand that useful contribution creates better relationships than a captive pitch." },
      { heading: "Use research and public outputs carefully", body: "Communities can produce surveys, interviews, market maps and insight summaries. Obtain consent, explain intended use and separate private discussion from publishable evidence. Publish methodology and limitations. Research should return value to members rather than extract their experience for promotion." },
      { heading: "Measure what proves community value", body: "Track member fit, repeat participation, contribution, relevant introductions, trust confidence and voluntarily reported outcomes. Registrations, mailing-list size and impressions help describe reach, but they do not show that members received value or formed trusted relationships." },
      { heading: "First 90 days", body: "Keep the first cycle narrow and observable.", points: ["Days 1–15: interview prospective members and write the audience thesis", "Days 16–30: draft criteria, charter, confidentiality rule and sponsor boundaries", "Days 31–45: recruit a small qualified founding cohort", "Days 46–60: brief members and run the first facilitated session", "Days 61–75: make requested introductions and collect structured feedback", "Days 76–90: review fit, trust and participation, then commit to the next cadence"] },
      { heading: "Failure modes and decision checklist", body: "Delay expansion if the operator cannot answer the following questions clearly.", points: ["Is there a recurring member problem?", "Can qualified members recognize one another as peers?", "Are selection decisions consistent?", "Can the host protect the discussion from selling?", "Is there value between events?", "Can the team follow up reliably?", "Will measurement respect member privacy?", "Is there enough evidence to repeat the format?"] },
    ],
    faq: [
      { question: "What is the difference between a community and an audience?", answer: "An audience primarily receives content from a publisher. A community creates recurring member-to-member relationships, identity and participation expectations." },
      { question: "Should an executive community begin with a large launch event?", answer: "Usually not. A smaller qualified pilot gives the operator better evidence about member fit, trust, facilitation and repeat value." },
      { question: "How long does it take to build trust?", answer: "There is no universal timetable. Selection, consistent conduct and reliable follow-up can create the conditions for trust, but members decide how quickly and how deeply to participate." },
    ],
    sources: [sourceLibrary.chatham, sourceLibrary.privacy],
  },

  "how-to-start-a-ceo-peer-group": {
    relatedTemplate: "community-charter-template",
    sections: [
      { heading: "Which CEOs belong together?", body: "Peer status depends on the decisions members carry, not the prestige of their titles. Match CEOs whose businesses create comparable leadership weight. A founder running a newly funded company may need a different room from the hired CEO of a mature public company. Both can benefit from cross-stage perspective, but a large mismatch makes advice difficult to apply." },
      { heading: "Use company stage and scale deliberately", body: "Revenue, funding stage, employee count, ownership and international footprint can all shape the CEO role. Do not turn one number into an absolute gate. Use it to identify whether members face sufficiently comparable questions about capital, boards, talent, operating systems and risk." },
      { heading: "Balance industry diversity and competitive relevance", body: "Direct competitors may reduce candor. A completely unrelated group may lack useful context. Look for adjacent operating models, customer types or growth transitions while screening conflicts. Revisit conflicts when companies enter new markets or products." },
      { heading: "Set group size and cadence", body: "A group must be large enough to provide perspective and small enough for each CEO to present real issues. Six to ten members often supports a working session, but the right size depends on meeting length, attendance reliability and facilitation. Monthly, bimonthly or quarterly cadences can work when dates are protected in advance." },
      { heading: "Confidentiality and peer accountability", body: "State whether discussion uses the Chatham House Rule, a stricter off-the-record agreement or a custom participation statement. The chair should stop members from sharing privileged, regulated or unnecessarily identifying information. Accountability means asking what happened after a decision, not policing personal performance." },
      { heading: "Chair responsibilities", body: "The chair protects equal contribution, prepares case discussions, tests advice for context and follows up on commitments. A good chair does not become the room’s consultant. The chair surfaces experience, distinguishes assumptions from facts and intervenes when members sell, dominate or withdraw." },
      { heading: "Construct an agenda around decisions", body: "Use preparation to reserve live time for questions that require peer judgment. Avoid long status reports.", points: ["Opening check-in: one material change", "Member case: context, decision and constraints", "Clarifying questions before advice", "Experience sharing rather than prescriptions", "Owner summarizes options and next action", "Requests, introductions and accountability close"] },
      { heading: "Sample 90-minute agenda", body: "Use this for a focused recurring meeting.", points: ["0–10: confidentiality reminder and check-in", "10–25: member updates and issue selection", "25–60: one structured case or hot seat", "60–75: pattern discussion across companies", "75–85: commitments and requests", "85–90: usefulness check and close"] },
      { heading: "Sample three-hour agenda", body: "Use the longer format when two cases require depth.", points: ["0–20: arrival, rules and updates", "20–75: first member case", "75–90: break", "90–145: second member case", "145–165: shared operating topic", "165–180: commitments, introductions and close"] },
      { heading: "Member removal and sponsor boundaries", body: "Document renewal and removal before a conflict occurs. Reasons may include repeated absence, selling, confidentiality breaches, loss of role fit or conduct that reduces trust. Sponsors should not receive private case access, attendee lists or guaranteed introductions. If sponsors participate, define when they are peers in the room and when they are supporting partners." },
      { heading: "Pricing and funding choices", body: "Member fees can reinforce commitment and independence. Employer support can increase access. Sponsorship can lower cost but creates boundary work. There is no universal model. Choose the funding structure that protects the member promise and disclose who pays." },
      { heading: "Launch checklist", body: "Launch when the operating conditions are clear.", points: ["Define CEO stage and scope criteria", "Screen competitive and investor conflicts", "Recruit a balanced founding cohort", "Choose a facilitator and escalation process", "Agree confidentiality and attendance expectations", "Publish six months of dates", "Prepare the first cases", "Review fit after the first three meetings"] },
    ],
    faq: [
      { question: "How many CEOs should be in a peer group?", answer: "There is no universal number. Six to ten can support deep case work, but meeting length, attendance and facilitation should determine the final size." },
      { question: "Should competitors join the same CEO peer group?", answer: "Only when members understand the conflict and can participate without limiting candor or creating inappropriate information exchange." },
    ],
    sources: [sourceLibrary.chatham],
  },

  "private-executive-dinner-playbook": {
    relatedTemplate: "executive-dinner-run-of-show-template",
    sections: [
      { heading: "What the format is for", body: "A private executive dinner supports one extended, relevant conversation among well-matched peers. It works when participants need context, judgment and relationships more than presentations. It is not a disguised sales dinner, a reward for prospects or a panel compressed around a table." },
      { heading: "Compose the room", body: "Select for relevance, contribution and compatible seniority. Eight to fourteen guests often allows one-table conversation, although room shape, facilitation and topic can support a different range. Count hosts and sponsors when judging capacity. Avoid filling seats with people who cannot participate as peers." },
      { heading: "Invitation and substitution rules", body: "Invite a named person for a stated reason. Explain the topic, participant profile, attribution rule, sponsor role and attendance expectation. Do not accept assistants or colleagues as automatic substitutions. A substitute should meet the same criteria and receive the same briefing." },
      { heading: "Host responsibilities", body: "The host owns the guest mix, preparation, boundaries and flow. Confirm why each person belongs. Brief the sponsor before invitations go out. Open with the purpose and rules. Redirect pitching and dominant speakers. Close with requested follow-up rather than a sales call to action." },
      { heading: "Venue and seating", body: "Choose a quiet private room with one conversational table, reliable accessibility and enough service discipline that interruptions do not control the discussion. Use place cards to separate existing colleagues, balance perspectives and keep the host where the full table is visible." },
      { heading: "Arrival and opening remarks", body: "Use arrival time for welcome, not uncontrolled prospecting. Begin on time. Introductions should state role and one relevant question, not a company pitch. The host should name the attribution rule, photography policy, sponsor relationship and intended close." },
      { heading: "Frame the topic", body: "Use a question with strategic tension rather than a broad theme. ‘How are you assigning accountability for AI agents that act across systems?’ creates a decision conversation. ‘The future of AI’ invites speeches. Send the question early enough for guests to prepare one example." },
      { heading: "Choose the confidentiality rule", body: "The Chatham House Rule permits use of information without revealing a speaker’s identity or affiliation. Some dinners need a stricter off-the-record rule that prohibits sharing the content itself. Explain the difference in plain language and do not promise legal privilege or absolute secrecy." },
      { heading: "Manage the conversation", body: "Ask dominant speakers to pause so the table can test the point. Invite quieter participants with a specific but optional question. Stop product claims and redirect to operating experience. When a guest raises sensitive information, the host should remind the table of the rule and move away from unnecessary detail." },
      { heading: "Sponsor boundaries", body: "A sponsor may welcome guests, contribute relevant experience and support the cost. It should not control the list, receive private attendee data, force demonstrations or follow up without consent. The strongest sponsor behavior is to host, listen, contribute and respond when a member requests expertise." },
      { heading: "Cancellations, follow-up and feedback", body: "Confirm attendance twice without creating pressure. Maintain a short qualified waitlist. After the dinner, send resources promised in the room, request consent for introductions and ask one or two useful feedback questions. Do not publish guest names or photographs unless participants agreed." },
      { heading: "Sample run of show", body: "Protect conversation time.", points: ["T-30: host, venue and sponsor briefing", "0–20: arrival and individual welcome", "20–30: purpose, attribution rule and concise introductions", "30–45: opening question across the table", "45–95: facilitated discussion", "95–110: implications, requests and useful resources", "110–120: close and follow-up expectations"] },
      { heading: "Three checklists", body: "Host: verify fit, rules, seating, accessibility and follow-up. Guest: arrive prepared, contribute experience, respect attribution and avoid pitching. Sponsor: understand rights, disclose the relationship, listen, avoid list-building and request consent before contact." },
      { heading: "Failure modes", body: "Common failures are topic-free networking, mismatched seniority, excessive sponsor presence, loud venues, surprise photography, presentation-heavy openings, uncontrolled substitutions, weak facilitation and follow-up that becomes a sales sequence." },
    ],
    sources: [sourceLibrary.chatham, sourceLibrary.disclosure, sourceLibrary.access],
  },

  "ceo-communities": {
    relatedTemplate: "member-application-template",
    sections: [
      { heading: "What Is a CEO Community?", body: "A CEO community is a structured network for chief executives who need peers for decisions they cannot fully delegate or discuss inside their companies. It may include peer groups, private forums, research briefings and carefully matched introductions." },
      { heading: "Who belongs and who may not fit", body: "Members should carry final enterprise responsibility. Founder-CEOs, professional CEOs and division CEOs may need separate groups when board authority, capital structure or operating scope differs. Advisors, investors and vendors can add value in defined formats, but they are not automatically CEO peers." },
      { heading: "Core member problems", body: "Leadership isolation is only one issue. CEOs need context for board dynamics, capital choices, executive hiring, succession, strategy, crisis decisions and personal role transitions. The community should make those decisions discussable without pretending peers know the company better than its CEO." },
      { heading: "Recommended formats and agendas", body: "Use recurring peer groups for case work, private dinners for cross-industry perspective and research briefings for shared external change.", points: ["Board and investor alignment", "Founder-to-professional leadership transition", "Capital allocation under uncertainty", "Executive-team performance", "Strategy choices that cannot be delegated", "Succession, resilience and CEO role design"] },
      { heading: "Admission and confidentiality", body: "Screen company stage, authority, conflicts and willingness to contribute. Review direct competition and shared investors. Use a clear attribution rule and prohibit disclosure of privileged board material, personal data or competitively sensitive information that should not be exchanged." },
      { heading: "Sponsor boundaries", body: "A CEO group should never make members feel like curated prospects. Sponsors can support hospitality, research or expert briefings, but should not receive private case access or guaranteed meetings. Identify sponsor participation before the session." },
      { heading: "Failure modes", body: "Watch for status collecting, stage mismatch, advice without context, dominance by the most famous CEO, investor pressure, sales follow-up, weak attendance and a facilitator who becomes a guru rather than a chair." },
      { heading: "Measures of value and launch checklist", body: "Review repeat participation, useful case discussions, requested introductions, candor, voluntarily reported decisions informed and member referrals. Before launch, define CEO scope, screen conflicts, select the chair, agree dates, set confidentiality, prepare the first cases and review fit after three sessions." },
    ],
    sources: [sourceLibrary.chatham],
  },

  "cfo-communities": {
    relatedTemplate: "member-application-template",
    sections: [
      { heading: "What Is a CFO Community?", body: "A CFO community connects senior finance leaders for peer exchange on capital, reporting, risk, systems, talent and the CFO’s expanding strategic role. A useful room distinguishes between growth-stage, public-company and private equity-backed finance mandates." },
      { heading: "Who belongs and who may not fit", body: "Match members by decision authority and operating context. A first CFO building controls has different needs from a public-company CFO managing earnings and audit committees. Controllers, bankers, auditors and software providers may belong in specialist sessions, but a peer-only CFO forum needs explicit boundaries." },
      { heading: "Core finance leadership problems", body: "Relevant questions include capital allocation, planning under volatility, board reporting, audit readiness, control design, treasury, tax coordination, banking relationships, finance transformation and leadership succession. The group should focus on decision process rather than exchange confidential figures." },
      { heading: "AI, systems and finance transformation", body: "CFOs need practical discussion about ownership, controls, data quality, workflow redesign, vendor claims and realized value. Avoid product demonstrations presented as peer learning. Use case reviews that identify the process, control owner, evidence and implementation constraint." },
      { heading: "Useful agendas", body: "Use finance-specific formats.", points: ["Forecast quality and planning assumptions", "Audit committee and board communication", "Working-capital decisions", "ERP and data-program governance", "AI controls in finance workflows", "Banking and capital-market preparation", "Finance talent and succession"] },
      { heading: "Confidentiality and sponsor conflicts", body: "Do not invite disclosure of unreleased results, transaction details or regulated information. Bankers, auditors, recruiters, consultants and finance-software providers may have conflicts. State category rules and never provide attendee data or procurement access without member consent." },
      { heading: "Failure modes", body: "CFO groups fail when they mix incompatible mandates, let vendors set the agenda, encourage benchmark sharing without context, mishandle material information, focus only on tools, exclude controllers from relevant specialist work or measure success by sponsor leads." },
      { heading: "CFO-specific measures and launch checklist", body: "Track relevance by ownership and company stage, repeat contribution, applied operating ideas, requested peer connections, trust confidence and sponsor-boundary incidents. Before launch, segment the cohort, identify conflicts, select six agenda themes, brief hosts on financial-information limits and publish the participation rule." },
    ],
    sources: [sourceLibrary.privacy],
  },

  "cmo-communities": {
    relatedTemplate: "member-application-template",
    sections: [
      { heading: "What Is a CMO Community?", body: "A CMO community is a peer network for senior marketing leaders responsible for brand, demand, product marketing, growth, customer insight and marketing capability. The agenda must reflect company stage because a scale-up growth mandate differs from global portfolio stewardship." },
      { heading: "Member fit", body: "Distinguish enterprise CMOs, growth leaders, business-unit marketing heads and founder-led marketing roles. Agency executives and technology providers can contribute expertise, but should not outnumber operating leaders or treat the community as a business-development channel." },
      { heading: "Core member problems", body: "CMOs need peers for attribution disputes, brand investment, go-to-market alignment, AI adoption, organization design, agency decisions, marketing technology, customer research and CEO or board communication. Discussions should separate principles from benchmarks that depend heavily on category and channel." },
      { heading: "AI and marketing technology", body: "Useful sessions examine workflow ownership, brand controls, data provenance, vendor evaluation and changes to team design. Product demos should be labeled and separated from peer discussion. Members should not be pressured to reveal customer data or nonpublic campaign performance." },
      { heading: "Agenda ideas", body: "Build agendas around a decision, not a trend.", points: ["Brand investment during efficiency pressure", "Product marketing and sales alignment", "Attribution decisions when signals conflict", "AI governance for content and customer data", "Agency scope and in-house capability", "Marketing-technology consolidation", "CMO credibility with boards and finance leaders"] },
      { heading: "Sponsor and information boundaries", body: "Agencies, data companies, media platforms and software vendors create category conflicts. Define exclusivity, demonstrations, data access and follow-up rights. Protect commercially sensitive campaign plans and customer information." },
      { heading: "Failure modes", body: "Avoid trend-only programming, agency pitches, decontextualized benchmarks, overrepresentation of vendors, public sharing of private performance, one-channel agendas and sessions that ignore the relationship between marketing, product, sales and finance." },
      { heading: "Measures and launch checklist", body: "Measure role fit, diversity of company stage, useful peer benchmarking, applied decisions, requested introductions, repeat contribution and absence of hard selling. Launch with a clear operator-to-provider ratio, conflict review, six decision-led topics and a consent-based follow-up policy." },
    ],
    sources: [sourceLibrary.disclosure, sourceLibrary.privacy],
  },

  "ciso-communities": {
    relatedTemplate: "confidentiality-participation-template",
    sections: [
      { heading: "What Is a CISO Community?", body: "A CISO community is a trusted peer network for senior security leaders responsible for enterprise risk, resilience, governance and board communication. It is not a channel for exchanging operational details that could create security, regulatory or legal risk." },
      { heading: "Who belongs and what requires separation", body: "Match enterprise security authority, sector context and reporting responsibility. Security vendors, consultants and investors can contribute in disclosed expert formats. Peer-only sessions should remain peer-only, particularly when members discuss incidents, board pressure or control failures." },
      { heading: "Sensitive member problems", body: "Relevant topics include board reporting, incident leadership, AI governance, agent identity and permissions, regulatory change, security talent, third-party risk and business alignment. Discussion should focus on decision frameworks and experience, not active vulnerabilities, indicators or confidential incident evidence." },
      { heading: "Confidentiality choices", body: "The Chatham House Rule protects speaker identity, but some security discussions require a stricter off-the-record rule or should not occur in a community setting at all. State what may be shared, prohibit recording and give the facilitator authority to stop unsafe detail." },
      { heading: "Peer-only and expert formats", body: "Use facilitated peer cases for leadership decisions, closed briefings for regulatory interpretation by qualified advisers and carefully labeled vendor demonstrations outside peer sessions. Do not imply that community discussion is technical cybersecurity or legal advice." },
      { heading: "Sponsor conduct", body: "The vendor-heavy security market creates persistent pressure. Sponsors should disclose interests, avoid fear-based selling, never use member concerns as leads and request consent before follow-up. Category boundaries should be visible to members." },
      { heading: "Failure modes", body: "Specific failures include sharing active incident details, surprise vendor attendance, recording sensitive sessions, threat-intelligence exchange without controls, competitive fear messaging, procurement pressure, weak host security literacy and assuming the Chatham House Rule creates legal protection." },
      { heading: "Measures of trust and launch checklist", body: "Review peer-to-vendor balance, candor without unsafe disclosure, repeat participation, requested expert follow-up, sponsor complaints, confidentiality confidence and whether members found the decision framing useful. Before launch, define peer status, select the confidentiality level, brief the facilitator and establish an incident-discussion boundary." },
    ],
    sources: [sourceLibrary.chatham, sourceLibrary.privacy],
  },

  "ai-executive-communities": {
    relatedTemplate: "member-application-template",
    sections: [
      { heading: "What Is an AI Executive Community?", body: "An AI executive community connects leaders accountable for enterprise AI strategy, deployment, governance, investment and organizational change. It differs from a practitioner group focused on model development, engineering techniques or tool-level troubleshooting." },
      { heading: "Choose the executive mix", body: "The right mix may include CEOs, CIOs, CTOs, data leaders, security leaders, CFOs, legal leaders, HR leaders and business-unit owners. Define whether the group is cross-functional or role-specific. Do not admit participants solely because their company sells AI." },
      { heading: "Core executive problems", body: "Members need help connecting ambition to ownership: use-case selection, budget authority, governance, data readiness, security, workforce change, enterprise buying and evidence of value. The community should expose cross-functional dependencies rather than treating AI as a technology-only program." },
      { heading: "Formats and agendas", body: "Use deployment case reviews, cross-functional decision roundtables and research briefings.", points: ["Moving from pilots to accountable deployment", "AI governance and decision rights", "Budget ownership and value evidence", "Vendor evaluation and lock-in", "Data and security dependencies", "Workforce and operating-model change", "Board communication"] },
      { heading: "Prevent demos disguised as learning", body: "Separate product briefings from peer sessions. Require presenters to disclose commercial interests. Do not allow a vendor to frame its product category as the only relevant problem. Members should control whether they request a demonstration or introduction." },
      { heading: "Research opportunities", body: "A cross-functional community can identify adoption patterns through consented surveys and interviews. Publish question wording, sample definition, field dates, limitations and sponsor influence. Do not convert private peer discussion into quoted research without permission." },
      { heading: "Failure modes", body: "Avoid hype-led agendas, undefined seniority, technical depth that excludes accountable executives, generic transformation claims, vendor dominance, unsourced benchmarks, cross-functional rooms without clear purpose and research that overstates a convenience sample." },
      { heading: "Measures and launch checklist", body: "Review accountable-executive participation, cross-functional relevance, applied governance or deployment decisions, requested connections, research contribution and sponsor behavior. Define the executive profile, separate practitioner content, disclose vendors, set research consent and choose decision-led topics before launch." },
    ],
    sources: [sourceLibrary.privacy],
  },

  "private-equity-executive-communities": {
    relatedTemplate: "conflict-of-interest-disclosure-template",
    sections: [
      { heading: "What Is a Private Equity Executive Community?", body: "A private equity executive community connects fund professionals, operating partners and portfolio-company leaders around value creation, leadership and responsible professional relationships. Different participant types should not be treated as interchangeable peers." },
      { heading: "Separate fund and portfolio perspectives", body: "Deal teams focus on investment decisions and portfolio oversight. Operating partners work across companies. CEOs and CFOs carry company accountability. Use separate peer sessions when power dynamics or confidentiality would limit candor, then use mixed formats for shared operating questions." },
      { heading: "Core member problems", body: "Relevant themes include value-creation planning, leadership assessment, finance transformation, procurement leverage, pricing, AI adoption, exit readiness and board communication. Avoid active deal discussion or sharing confidential portfolio information that members are not authorized to disclose." },
      { heading: "Formats and conflicts", body: "Peer groups work best within comparable roles. Cross-portfolio workshops can address repeatable capabilities. Dinners can connect investors and operators when the topic and sponsor role are explicit. Screen competing funds, overlapping assets, advisers and vendors before each gathering." },
      { heading: "Vendor and sponsor access", body: "Portfolio-service providers may offer useful expertise, but automatic portfolio access undermines trust. Define category rights, data restrictions, demonstration rules and introduction consent. A fund relationship should not be presented as a member endorsement." },
      { heading: "Failure modes", body: "Specific failures include deal solicitation, ambiguous investor authority, confidential portfolio comparisons, vendor lead generation, forcing CEOs to speak candidly in front of sponsors, unclear allocation of opportunities, status-driven guest selection and advice that ignores ownership context." },
      { heading: "Measures and launch checklist", body: "Measure fit by role, useful cross-portfolio learning, requested operator introductions, repeat CEO or CFO participation, sponsor-boundary compliance and voluntarily reported capability improvements. Before launch, map conflicts, separate peer cohorts, define fund influence and establish a strict introduction process." },
    ],
    sources: [sourceLibrary.disclosure, sourceLibrary.privacy],
  },

  "sponsoring-an-executive-community": {
    relatedTemplate: "sponsor-agreement-framework-template",
    sections: [
      { heading: "Why communities accept sponsors", body: "Sponsorship can fund venues, access, research, production and specialist expertise. It can also distort member selection and discussion. Accept sponsorship only when the partner understands the member promise and the operator can enforce boundaries." },
      { heading: "Member value and sponsor value", body: "Members should receive useful peers, content and relationships. Sponsors may seek credibility, learning and relevant relationships. Those objectives are compatible when participation is disclosed and consent-based. They are incompatible when a sponsor expects a captive pitch, hidden endorsement or unrestricted data." },
      { heading: "Select sponsors and manage category conflicts", body: "Assess reputation, subject relevance, host quality and willingness to follow the rules. Category exclusivity may reduce competitive pressure and increase commitment, but it can also narrow perspective. Define the category, term, exceptions and renewal process instead of promising vague exclusivity." },
      { heading: "Host, do not dominate", body: "A sponsor can welcome the room, contribute operating experience and respond to questions. Stage time should be proportionate and labeled. Product demonstrations belong in opt-in sessions. The community operator, not the sponsor, should control member criteria, editorial conclusions and facilitation." },
      { heading: "Attendee data, consent and introductions", body: "Do not sell or transfer attendee lists. Tell members what information is collected and why. Introductions should state the reason and require agreement from both people. A badge scan or event registration should not be treated as blanket consent for unrelated sales contact." },
      { heading: "Editorial independence and disclosure", body: "Disclose who funded a program or research output. Sponsors may suggest questions and provide expertise, but should not suppress inconvenient findings or approve conclusions. Material relationships that affect how readers evaluate a claim should be clear." },
      { heading: "Sample sponsor boundaries", body: "Put the following in writing.", points: ["No attendee-list access", "No guaranteed meetings or introductions", "No hard selling in peer discussion", "Product demonstrations are labeled and optional", "Member selection remains with the operator", "Research methodology and conclusions remain editorially independent", "Follow-up requires a relevant reason and consent", "Confidential discussion is not used as sales intelligence"] },
      { heading: "Renewal and measurement", body: "Review delivery against written rights, host behavior, member feedback, requested follow-up, brand fit and whether the partnership strengthened the program. Lead counts alone encourage poor behavior. Do not promise one universal return model." },
      { heading: "Warning signs", body: "Pause or end a partnership when the sponsor demands attendee data, inserts unqualified guests, disguises selling as education, pressures the operator to change research, ignores consent, misrepresents the community relationship or treats category exclusivity as control of the agenda." },
      { heading: "Two checklists and a member disclosure", body: "Operator checklist: define rights, data, invitations, content, disclosure, conflicts, escalation and renewal. Sponsor checklist: brief every attendee, prepare a useful contribution, avoid pitch materials, request introductions and document follow-up. Member-facing disclosure example: ‘[SPONSOR] supports this program financially. [COMMUNITY] controls invitations, facilitation and editorial decisions. Participant information is not shared for sales use without consent.’" },
    ],
    faq: [{ question: "Should sponsors receive the attendee list?", answer: "Not by default. Participant information should be collected and shared only for clear purposes, with appropriate notice and consent." }],
    sources: [sourceLibrary.disclosure, sourceLibrary.privacy],
  },

  "executive-community-measurement": {
    relatedTemplate: "community-health-scorecard-template",
    sections: [
      { heading: "Measure the promise, not just the funnel", body: "Community measurement should show whether the intended people participate, trust the setting, build useful relationships and receive value over time. Registrations, audience size and social impressions describe reach. They do not prove community quality." },
      { heading: "Member fit", body: "Track the share of active participants who match published criteria, the relevance of role and company stage, and the peer-to-provider balance. Review exceptions individually. A high attendance number can hide a room in which few people recognize one another as peers." },
      { heading: "Participation", body: "Review repeat attendance, active contribution, response and acceptance behavior, member-led topics and host distribution. Distinguish a member who reads but rarely attends from one who registers repeatedly and does not show. Use the measure to improve design, not punish people for limited availability." },
      { heading: "Relationship value", body: "Count relevant introductions requested, accepted and completed. Ask whether follow-up conversations occurred, whether members helped one another and whether cross-market connections became useful. Do not infer relationship value from exchanged contact details." },
      { heading: "Content and learning", body: "Ask whether a session improved a decision, provided relevant context or exposed a useful perspective. A short question tied to the specific program is more actionable than a generic satisfaction score. Record which themes lead to repeat requests or applied action." },
      { heading: "Trust", body: "Use confidential feedback to assess willingness to speak candidly, confidence in attribution rules, absence of hard selling and the host’s ability to intervene. Do not ask members to disclose the sensitive content that made a discussion useful." },
      { heading: "Outcomes and durability", body: "Outcomes may include decisions informed, collaborations, hires, partnerships or commercial and capital results when members voluntarily report them. Durability includes renewal, referral, host quality, sponsor alignment, geographic resilience and leadership succession. Avoid claiming causation when the community played only one part." },
      { heading: "Sample monthly dashboard", body: "Use counts and short notes rather than invented benchmarks.", points: ["Qualified active members by cohort", "Invited, accepted, attended and repeat attended", "Member-led contributions", "Introductions requested, accepted and completed", "Trust or sponsor-boundary incidents", "Top requested topics", "Open follow-up commitments", "Data-quality and consent issues"] },
      { heading: "Quarterly review", body: "Review who received value, who was consistently excluded, which formats produced useful exchange, whether sponsors followed boundaries and whether the member promise still fits. Decide what to continue, change or stop. Record the decision owner and next review date." },
      { heading: "Member-health and sponsor review", body: "A member-health scorecard can combine fit, participation, contribution, relationship activity and renewal risk. A sponsor review should cover agreed delivery, member relevance, consent-compliant follow-up, host behavior and renewal fit. Keep the two views separate so sponsor value does not override member health." },
      { heading: "Privacy cautions", body: "Collect only data needed for a stated operating decision. Limit access, define retention and provide a correction route. Relationship notes can be sensitive even when they are professional. Seek qualified advice when obligations cross jurisdictions." },
    ],
    sources: [sourceLibrary.privacy],
  },

  "methodology": {
    sections: [
      { heading: "Who publishes the playbook", body: "Open Future Forum and Murray Newlands own, fund, publish and edit the Executive Community Playbook. Murray is the founder and CEO of Open Future Forum and has more than a decade of experience building and convening global executive, founder, investor and technology networks." },
      { heading: "Four inputs", body: "The playbook combines operating experience, editorial analysis, public sources and clearly identified publisher judgment. Operating experience informs procedures and failure modes. Editorial analysis compares models and turns experience into reusable questions. Public sources support external rules and factual claims. Publisher judgment is labeled rather than presented as neutral consensus." },
      { heading: "How sources are selected and cited", body: "Primary sources are preferred for rules, standards and institutional definitions. A citation should support a nearby claim. Sources are not added merely to make a page appear academic, and long quotations are avoided. Commercial sources may be used when they are the source of a disclosed fact about themselves." },
      { heading: "Review and versioning", body: "Pages carry a last-reviewed date. Material editorial changes are recorded in the changelog and repository history. Release versions describe the state of the project as a whole. Machine-readable exports are reviewed against the visible definition source." },
      { heading: "Corrections and conflicts", body: "Readers can propose a correction through the contribution process or GitHub issue templates. Contributors and editors should disclose relationships that could affect a recommendation. The publisher decides what is included and documents material corrections." },
      { heading: "The Open Future Forum case study", body: "The case study is a publisher-authored operating example. It can show how one global executive community applies its model, but it is not independent validation and should not be generalized without considering audience, geography, resources and incentives." },
      { heading: "What this methodology does not claim", body: "The playbook is not independent academic research, a systematic review, legal advice or an official industry standard. It does not claim universal results. Templates require adaptation and professional review where legal, privacy or regulatory obligations apply." },
    ],
    sources: [sourceLibrary.chatham, sourceLibrary.privacy, sourceLibrary.access, sourceLibrary.disclosure, sourceLibrary.governance, sourceLibrary.survey, sourceLibrary.ethics, sourceLibrary.consent, sourceLibrary.boards],
  },

  "open-future-forum-case-example": {
    title: "Open Future Forum: An Executive Community Operating Case Study",
    summary: "A publisher-authored case study of how Open Future Forum combines private gatherings, open events, peer groups, executive boards and first-party research.",
    intro: "Open Future Forum is presented here as a publisher-authored operating example, not independent validation or a universal model.",
    sections: [
      { heading: "Publisher-authored case study", body: "Open Future Forum and Murray Newlands publish this playbook and this case study. The account reflects supplied organizational facts and publisher experience. Readers should evaluate it with that interest in mind." },
      { heading: "Canonical description", body: "Open Future Forum is a global executive community founded in Silicon Valley. Its network reaches tens of thousands of executives and investors worldwide. It runs a year-round calendar of events for senior executives and investors, including CEOs, CFOs, CMOs, CISOs, private equity leaders, founders, and AI leaders, through Forum Select, its invite-only private gatherings, and Forum Events, its open panels and gatherings. Beyond events, Open Future Forum convenes peer groups and executive boards and publishes original research built on first-party survey and qualitative data from its executive network." },
      { heading: "Founding and evolution", body: "Murray Newlands founded Open Future Forum in Silicon Valley in 2019 and serves as founder and CEO. The organization’s Silicon Valley roots are part of its identity, while its relationships and operating model extend across global markets. Murray’s broader experience includes building and convening global executive, founder, investor and technology networks." },
      { heading: "Forum Select and Forum Events", body: "Forum Select comprises invite-only private gatherings designed for relevant peer exchange. Forum Events comprises open panels and gatherings that can reach a broader executive, investor and technology audience. The two formats serve different access and conversation needs and should not be described as one undifferentiated event series." },
      { heading: "Role forums, peer groups and boards", body: "Open Future Forum convenes role-based forums, peer groups and executive boards for audiences including CEOs, CFOs, CMOs, CISOs, private equity leaders, founders, investors and AI leaders. Matching role and operating context allows programming to move beyond general networking." },
      { heading: "Operating principles", body: "The publisher describes give before you get, no hard pitching, confidentiality and signal over scale as important principles. In practice, those principles require member selection, prepared hosts, sponsor category boundaries and intervention when commercial behavior reduces trust." },
      { heading: "Sponsor participation", body: "Sponsors may support and participate in the community. The preferred behavior is to host, listen and contribute rather than dominate. Category boundaries can reduce conflict, but sponsor involvement remains a commercial relationship and should be disclosed." },
      { heading: "Events, relationships and research", body: "The model connects local gatherings to a wider global network through relationships, role forums, professional introductions and research. Open Future Forum uses first-party surveys and qualitative input from its executive network to inform original research. Individual reports should state their own sample, method and limitations." },
      { heading: "What OFF has learned", body: "The publisher’s operating perspective is that audience relevance, clear boundaries, reliable hosting and follow-up matter more than treating an event as an isolated production. Private and open formats can coexist when participants understand the purpose of each." },
      { heading: "What other operators can adapt", body: "Other communities can adapt the separation of open and private formats, role-based segmentation, consent-based introductions, sponsor briefing and the use of research to connect programs. They should adapt these practices to their own members, markets and resources." },
      { heading: "What may not transfer", body: "Open Future Forum’s brand, founder relationships, Silicon Valley roots, global network and mix of executive and investor audiences are specific to the organization. A local association, corporate community or paid peer group may need different funding, governance and selection systems." },
      { heading: "Limitations", body: "This case study does not provide independent performance evidence, comparative benchmarks or audited outcomes. It should be read as a transparent operating example from the project’s publisher." },
    ],
    sources: [
      {label:"Official OFF source: Open Future Forum",url:"https://openfutureforum.com/",note:"Publisher-controlled source for OFF’s stated identity, founding date, programs and terminology."},
      {label:"Official OFF source: Forum Select",url:"https://openfutureforum.com/forum-select",note:"Publisher-controlled description of the private, invitation-only format."},
      {label:"Official OFF source: Forum Events",url:"https://openfutureforum.com/forum-events",note:"Publisher-controlled description of the open event format."},
      {label:"External event listing: Eventbrite",url:"https://www.eventbrite.com/e/office-hours-with-murray-newlands-founder-of-open-future-forum-tickets-1991427662747",note:"Third-party event-platform listing that corroborates the organization, founder relationship and 2019 founding claim; it is not independent performance evaluation."},
      {label:"External event listing: Luma",url:"https://luma.com/RSM_events",note:"Third-party event listing that identifies Murray Newlands as OFF’s founder and describes its executive-gathering activity; organizer-supplied copy is not independent validation."}
    ],
  },

  "research-from-executive-communities": {
    relatedTemplate: "member-feedback-survey-template",
    sections: [
      { heading: "What community research can do", body: "A community can identify shared questions, collect first-party survey responses, conduct qualitative interviews and publish useful synthesis. Research should serve a defined question and return value to participants rather than convert private access into promotional claims." },
      { heading: "Separate discussion from research", body: "Attendance at an event is not automatic consent to be studied or quoted. Explain when a survey, interview or discussion will inform a publication, how responses will be used and whether attribution is possible. Provide a meaningful choice." },
      { heading: "Publish the method", body: "State the sample definition, recruitment approach, field dates, question wording, response count where publishable, analysis method and limitations. A community sample may be valuable but should not be presented as representative of all executives without evidence." },
      { heading: "Protect participants", body: "Collect the minimum data needed, limit access and avoid publishing combinations of details that could identify a respondent. Review cross-border data obligations with qualified advisers. Do not promise anonymity when the sample or quotation context makes identification likely." },
      { heading: "Manage sponsor influence", body: "Disclose who funded the work. Sponsors may help identify useful questions, but editorial conclusions should not be contingent on favorable findings. Keep commercial follow-up separate from research participation." },
      { heading: "Useful outputs", body: "Outputs may include insight briefs, benchmark reports, market maps and structured datasets when the underlying evidence supports them. Label publisher analysis and external sources separately. Preserve version and citation information." },
    ],
    sources: [sourceLibrary.privacy, sourceLibrary.consent, sourceLibrary.survey, sourceLibrary.ethics],
  },
};

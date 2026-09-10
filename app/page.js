const projects = [
  {
    title:'Lumière', label:'APPLIED AI • COMPUTER VISION • FULL STACK',
    desc:'An inclusive AI-powered skin analysis and makeup recommendation platform built as a team project. I served as Team Leader / Technical Director and contributed hands-on across React frontend work, API integration and debugging, ML-pipeline coordination, testing, dataset preparation and technical documentation.',
    tags:['React','FastAPI','Python','SegFormer','OpenAI API','Computer Vision'],
    href:'/projects/lumiere', github:'https://github.com/liggiaelena/Back_Lumiere'
  },
  {
    title:'Drive-Thru Order Intelligence Engine', label:'AI/NLP • STRUCTURED OUTPUT • DECISION LOGIC',
    desc:'A menu-aware parser for messy speech-style drive-thru orders. The project compares deterministic rules with AI/NLP-style parsing and focuses on a core principle: clarify uncertainty instead of guessing.',
    tags:['Python','Streamlit','JSON','NLP','Evaluation','Clarification Logic'],
    href:'/projects/drive-thru', github:'https://github.com/chooksemmanuel/drive-thru-order-intelligence-engine'
  },
  {
    title:'DFIR Lab', label:'DIGITAL FORENSICS • INCIDENT RESPONSE • ONGOING',
    desc:'A controlled Windows endpoint investigation lab focused on evidence acquisition, artifact analysis, timeline reconstruction and defensible forensic reporting.',
    tags:['DFIR','Windows','Autopsy','FTK Imager','Timeline Analysis','Reporting'],
    href:'/projects/dfir-lab', github:'https://github.com/chooksemmanuel/dfir-lab'
  },
  {
    title:'Aegis Africa', label:'CYBERSECURITY • RULE-BASED PROTOTYPE',
    desc:'A transparent Phase 0 suspicious-message and URL screening prototype. Intentionally rule-based, synthetic-data only, and designed around cautious security guidance rather than exaggerated AI claims.',
    tags:['Python','Streamlit','Security','Testing','CI','Rule-Based Detection'],
    href:'/projects/aegis-africa', github:'https://github.com/chooksemmanuel/aegis-africa'
  },
]

export default function Home(){
 return <>
  <header className="nav"><div className="shell navin"><a href="#top" className="brand"><span className="mark">EI</span>Emmanuel Ihejiamaizu</a><nav className="navlinks"><a href="#work">Work</a><a href="#journey">Journey</a><a href="#stack">Stack</a><a href="#contact">Contact</a></nav></div></header>
  <main id="top">
    <section className="hero"><div className="shell heroGrid"><div><div className="kicker"><span className="pulse"></span> Waterloo, Ontario • Open to Fall 2026 co-op</div><h1>I investigate systems. <span className="gradient">I build intelligent ones.</span></h1><p className="lead">Applied AI, cybersecurity, digital forensics and software engineering, connected by one habit: understanding how systems behave, where they fail, and how to make them more useful, secure and trustworthy.</p><div className="actions"><a className="btn primary" href="#work">Explore my work</a><a className="btn" href="/Emmanuel_Ihejiamaizu_Resume.pdf">Resume</a><a className="btn" href="https://github.com/chooksemmanuel" target="_blank">GitHub</a><a className="btn" href="https://www.linkedin.com/in/emmanuelihejiamaizu/" target="_blank">LinkedIn</a></div><div className="statbar"><div className="stat"><strong>AI / ML</strong><span>Applied systems & evaluation</span></div><div className="stat"><strong>Cyber</strong><span>Security-aware engineering</span></div><div className="stat"><strong>DFIR</strong><span>Evidence & investigation</span></div><div className="stat"><strong>Software</strong><span>Python • APIs • React</span></div></div></div><div className="portraitWrap"><div className="portraitFrame"><img src="/emmanuel-ihejiamaizu.jpg" alt="Emmanuel Ihejiamaizu" className="portrait" /></div><div className="portraitBadge"><span className="pulse"></span><div><strong>Build • Secure • Investigate</strong><small>AI • Cybersecurity • DFIR • Software</small></div></div></div></div></section>

    <section id="work"><div className="shell"><div className="sectionHead"><div><h2>Featured work</h2><p>Not a wall of repositories. Four projects that explain what I can actually build, investigate and reason about.</p></div></div><div className="filters"><span className="chip">AI & ML</span><span className="chip">Cybersecurity</span><span className="chip">Digital Forensics</span><span className="chip">Full Stack</span><span className="chip">Technical Leadership</span></div><div className="projects">{projects.map(p=><article className="card" key={p.title}><div className="meta">{p.label}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="cardlinks"><a href={p.href}>Case study ↗</a><a href={p.github} target="_blank">Repository ↗</a></div></article>)}</div></div></section>

    <section id="journey"><div className="shell"><div className="sectionHead"><div><h2>A career that compounds</h2><p>Computer science gave me the foundation. Cybersecurity taught me to think adversarially. AI/ML taught me to build systems that learn. DFIR sharpened how I investigate what happened when systems fail.</p></div></div><div className="path"><div className="step"><div className="year">2019</div><h3>Computer Science</h3><p>BSc foundation in programming, systems and computational problem solving.</p></div><div className="step"><div className="year">2024–2025</div><h3>Cybersecurity</h3><p>Security operations, risk thinking, network analysis and incident-response foundations.</p></div><div className="step"><div className="year">2026</div><h3>Applied AI & ML</h3><p>Machine learning, model evaluation, computer vision, APIs and intelligent product development.</p></div><div className="step"><div className="year">NOW</div><h3>AI × Cyber × DFIR</h3><p>Building at the intersection of intelligent systems, secure engineering and digital investigation.</p></div></div></div></section>

    <section id="stack"><div className="shell"><div className="sectionHead"><div><h2>How I work</h2><p>Tools matter, but the real signal is how I approach problems.</p></div></div><div className="matrix"><div className="cell"><h3>Build</h3><p>Python, FastAPI, React, Streamlit, REST APIs, Git/GitHub.</p></div><div className="cell"><h3>Model</h3><p>scikit-learn, TensorFlow/PyTorch, computer vision, feature engineering, evaluation.</p></div><div className="cell"><h3>Investigate</h3><p>Autopsy, FTK Imager, Wireshark, Splunk, logs, artifacts, timelines.</p></div><div className="cell"><h3>Explain</h3><p>Technical documentation, architecture walkthroughs, stakeholder communication and defensible reporting.</p></div></div></div></section>

    <section id="contact"><div className="shell"><div className="callout"><div><h2>Useful systems. Clear thinking. No exaggerated claims.</h2><p>I am currently exploring AI/ML, software, cybersecurity and digital-forensics opportunities where I can contribute hands-on and keep growing across disciplines.</p></div><div className="actions"><a className="btn primary" href="mailto:emmanuelciheji@gmail.com">Email me</a><a className="btn" href="/Emmanuel_Ihejiamaizu_Resume.pdf">Download resume</a></div></div></div></section>
  </main>
  <footer><div className="shell">© 2026 Emmanuel Ihejiamaizu • AI • Cybersecurity • Digital Forensics • Software Engineering</div></footer>
 </>
}

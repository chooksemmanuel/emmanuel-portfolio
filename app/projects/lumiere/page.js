const stages = [
  ['01','Capture','User uploads or captures a facial image through the React interface.'],
  ['02','Map','MediaPipe and face parsing isolate landmarks and useful facial regions.'],
  ['03','Analyze','Computer-vision and ML layers estimate skin information and condition-aware signals.'],
  ['04','Guard','Safety-aware logic keeps condition outputs cautious and non-diagnostic.'],
  ['05','Recommend','The application turns analysis into usable makeup and product guidance.'],
  ['06','Present','FastAPI responses are translated into clear, asynchronous UI states in React.']
]

const contributions = [
  ['Technical leadership','Project direction, architecture discussions, ML-pipeline coordination and cross-layer integration.'],
  ['Frontend engineering','Hands-on React development, result presentation and frontend/backend integration work.'],
  ['API & debugging','Backend setup, endpoint testing, response-flow debugging and integration validation.'],
  ['ML data work','Prepared the melasma dataset and supported fine-tuning work for SegFormer-based segmentation.'],
  ['Safety layer','Contributed to medical-triage feature integration and condition-aware UI behaviour.'],
  ['Delivery','Build validation, technical documentation and final architecture/demo presentation.']
]

export default function Page(){return <main className="lumiereCase">
  <section className="caseHero lumiereHero"><div className="shell">
    <div className="caseTopline"><div className="kicker"><span className="pulse"></span> Applied AI • Team Project</div><a className="backLink" href="/">← Portfolio</a></div>
    <div className="lumiereHeroGrid"><div>
      <div className="caseIndex">CASE STUDY / 01</div>
      <h1><span className="gradient">Lumière.</span><br/>Inclusive skin analysis across AI, computer vision and full-stack engineering.</h1>
      <p className="lead">A case study in technical leadership, human-centred AI and the difficult part of applied ML: making multiple model and software layers behave like one usable product.</p>
      <div className="actions"><a className="btn primary" href="https://github.com/liggiaelena/Front_Lumiere" target="_blank" rel="noreferrer">Frontend repository ↗</a><a className="btn" href="https://github.com/liggiaelena/Back_Lumiere" target="_blank" rel="noreferrer">Backend repository ↗</a></div>
    </div><aside className="caseSnapshot">
      <div><span>ROLE</span><strong>Team Leader / Technical Director</strong></div>
      <div><span>STACK</span><strong>React • FastAPI • Python • OpenAI API • MediaPipe • BiSeNet • SegFormer • PyTorch</strong></div>
      <div><span>FOCUS</span><strong>Integration • Debugging • ML coordination • Safety • Documentation</strong></div>
      <div><span>TYPE</span><strong>Academic team project</strong></div>
    </aside></div>
  </div></section>

  <section className="caseSection"><div className="shell splitStory"><div className="sectionNumber">01</div><div><div className="caseLabel">THE PROBLEM</div><h2>Skin analysis is not one model problem.</h2><p className="caseBigText">A useful experience has to move from a real user image to facial regions, skin signals, condition-aware outputs and recommendations, while keeping the interface understandable and the health-related language appropriately cautious.</p><div className="truthNote"><strong>Design constraint</strong><span>Lumière is a cosmetic analysis and recommendation project, not a medical diagnostic system.</span></div></div></div></section>

  <section className="caseSection darkBand"><div className="shell"><div className="caseSectionHead"><div><div className="caseLabel">THE SYSTEM</div><h2>The image journey.</h2></div><p>Rather than treating “AI” as one black box, the final system combines specialized stages and passes useful context forward.</p></div><div className="pipeline">{stages.map(([n,t,d],i)=><div className="pipeStage" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p>{i<stages.length-1&&<b aria-hidden="true">→</b>}</div>)}</div></div></section>

  <section className="caseSection"><div className="shell"><div className="caseSectionHead"><div><div className="caseLabel">MY ROLE</div><h2>Leadership, with hands on the system.</h2></div><p>I did not single-handedly author every component. My role combined technical coordination with direct implementation, integration and delivery work.</p></div><div className="contribGrid">{contributions.map(([t,d],i)=><article className="contrib" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

  <section className="caseSection"><div className="shell decisionGrid"><div className="decisionIntro"><div className="caseLabel">ENGINEERING DECISIONS</div><h2>What the project taught me.</h2><p>The strongest lessons came from the boundaries between models, APIs, people and user expectations.</p></div><div className="decisionList">
    <article><span>01</span><div><h3>Integration is part of the intelligence.</h3><p>A strong model is not enough if preprocessing, API contracts, asynchronous states or UI interpretation fail around it.</p></div></article>
    <article><span>02</span><div><h3>Uncertainty needs product behaviour.</h3><p>Safety-sensitive outputs require cautious language, explicit limits and deliberate presentation rather than confident-looking guesses.</p></div></article>
    <article><span>03</span><div><h3>Test the boundaries.</h3><p>Endpoint behaviour, CORS, response fields, frontend builds and failure states matter because ML systems fail in more places than the model itself.</p></div></article>
    <article><span>04</span><div><h3>Attribution is engineering integrity.</h3><p>The final repositories are maintained under a teammate’s GitHub account. This case study separates the team architecture from the work I personally contributed.</p></div></article>
  </div></div></section>

  <section className="caseSection evidenceBand"><div className="shell"><div className="caseSectionHead"><div><div className="caseLabel">PROJECT EVIDENCE</div><h2>Explore the implementation.</h2></div><p>The final frontend and backend are public team repositories. They show the system beyond this case-study summary.</p></div><div className="repoCards"><a href="https://github.com/liggiaelena/Front_Lumiere" target="_blank" rel="noreferrer"><span>FRONTEND</span><h3>React interface</h3><p>Upload/camera flow, analysis states, region results and recommendation presentation.</p><b>Open repository ↗</b></a><a href="https://github.com/liggiaelena/Back_Lumiere" target="_blank" rel="noreferrer"><span>BACKEND</span><h3>FastAPI + ML pipeline</h3><p>Image processing, computer vision, model orchestration, API logic and recommendation workflow.</p><b>Open repository ↗</b></a></div><div className="caseClosing"><p>Complex AI products are integration problems as much as model problems.</p><a className="btn primary" href="/">← Back to portfolio</a></div></div></section>
</main>}

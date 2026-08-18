import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const projects = [
  { number:'01', title:'MediQuest', category:'AI / Medical Learning', url:'https://fyp-medi-quest.vercel.app/', description:'An AI-powered medical learning platform designed to make complex clinical concepts easier to understand, practise, and retain.', tech:['Next.js','AI / LLM','Supabase','Tailwind'], metrics:[['FOCUS','Medical Education'],['SYSTEM','Adaptive Learning'],['STATUS','Live']] },
  { number:'02', title:'IJAIKE', category:'AI / Research Assistant', url:'https://ijaike-chatbot.vercel.app/', description:'A research-focused conversational assistant that turns complex questions into clear, contextual, and useful responses.', tech:['React','NLP','LLM','Vercel'], metrics:[['MODE','Research Chat'],['ENGINE','Generative AI'],['STATUS','Live']] },
  { number:'03', title:'AI Chess Arena', category:'AI / Multiplayer Platform', url:'https://ai-chess-arena-xi.vercel.app/', description:'A refined online chess platform combining intelligent opponents, multiplayer competition, and an immersive board experience.', tech:['Next.js','Socket.io','AI Engine','MongoDB'], metrics:[['MODE','Multiplayer'],['INTELLIGENCE','AI Opponent'],['STATUS','Live']] },
  { number:'04', title:'PixelCraft', category:'Creative / Processing Suite', url:'https://pixel-craft-v1.vercel.app/', description:'A unified image and PDF processing workspace built for fast, intuitive transformations without a complicated workflow.', tech:['React','Canvas','PDF Tools','FastAPI'], metrics:[['TOOLS','Image + PDF'],['WORKFLOW','Browser First'],['STATUS','Live']] },
  { number:'05', title:'Connecto', category:'Social / Full-Stack Platform', url:'https://connecto-web-app.netlify.app/', description:'A full-stack social media product built around profiles, publishing, discovery, and meaningful real-time interaction.', tech:['React','Redux','Node.js','MongoDB'], metrics:[['TYPE','Social Network'],['STACK','MERN'],['STATUS','Live']] },
  { number:'06', title:'Wronyx', category:'Web / Digital Experience', url:'https://wronyx.netlify.app/', description:'A contemporary web experience shaped through crisp interface design, deliberate motion, and responsive engineering.', tech:['React','JavaScript','Responsive UI','Netlify'], metrics:[['FOCUS','Web Experience'],['DESIGN','Responsive'],['STATUS','Live']] },
];

const capabilities = [
  { id:'SYS.01', title:'Full-Stack Engineering', text:'Scalable interfaces, robust APIs, secure authentication, databases, and deployment.', tools:['React','Next.js','Node.js','FastAPI','MongoDB','Supabase'] },
  { id:'INT.02', title:'Applied Intelligence', text:'Practical AI products that connect models with useful, human-centered experiences.', tools:['PyTorch','Computer Vision','LLMs','NLP','Generative AI'] },
  { id:'EXP.03', title:'Product Experience', text:'Responsive systems with purposeful hierarchy, accessible interactions, and visual precision.', tools:['Tailwind CSS','UI Architecture','Responsive Design','Git'] },
];

const journey = [
  { year:'2022 — 2026', title:'BS Computer Science', org:'FAST NUCES', text:'Building a strong foundation across algorithms, software engineering, artificial intelligence, data science, and modern web systems.' },
  { year:'2024 — Present', title:'Full-Stack Developer', org:'Independent Projects', text:'Designing and shipping production-ready web applications from interface architecture through backend integration and deployment.' },
  { year:'2025 — Present', title:'AI / ML Engineer', org:'Applied Research & Products', text:'Transforming machine-learning research into accessible products across medical learning, vision, assistants, and intelligent tools.' },
];

const Label = ({children}) => <div className="section-label"><span>{children}</span><i /></div>;

export default function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [form,setForm]=useState({name:'',email:'',message:''});
  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12});
    document.querySelectorAll('.reveal').forEach((el,index)=>{el.style.setProperty('--delay',`${(index%3)*90}ms`);io.observe(el)});
    const cards=[...document.querySelectorAll('.project-card')];
    let frame;
    const updateStack=()=>{
      const scrollMax=document.documentElement.scrollHeight-window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress',String(scrollMax>0?window.scrollY/scrollMax:0));
      if(window.innerWidth<=900){cards.forEach(card=>{card.style.removeProperty('--stack-scale');card.style.removeProperty('--stack-dim');card.style.removeProperty('--exit-x');card.style.removeProperty('--exit-rotate')});return}
      cards.forEach((card,index)=>{
        const next=cards[index+1];
        if(!next)return;
        const nextTop=next.getBoundingClientRect().top;
        const start=window.innerHeight*.88;
        const end=155+(index+1)*10;
        const progress=Math.max(0,Math.min(1,(start-nextTop)/(start-end)));
        const direction=index%2===0?-1:1;
        card.style.setProperty('--stack-scale',String(1-progress*.035));
        card.style.setProperty('--stack-dim',String(1-progress*.12));
        card.style.setProperty('--exit-x',`${direction*progress*112}vw`);
        card.style.setProperty('--exit-rotate',`${direction*progress*5}deg`);
      });
    };
    const onScroll=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(updateStack)};
    updateStack();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);
    return()=>{io.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)}
  },[]);
  const submit=(e)=>{e.preventDefault();const subject=encodeURIComponent(`Portfolio inquiry from ${form.name}`);const body=encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);window.location.href=`mailto:wareeshaashraf09@gmail.com?subject=${subject}&body=${body}`};
  return <main><div className="scroll-progress" aria-hidden="true" />
    <section className="hero" id="home">
      <div className="hero-noise"/><div className="hero-aura"/><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
      <nav>
        <a className="logo" href="#home">WAREESHA.</a>
        <div className={`nav-links ${menuOpen?'active':''}`}>{['about','work','skills','journey','contact'].map(x=><a key={x} href={`#${x}`} onClick={()=>setMenuOpen(false)}>{x}</a>)}</div>
        <a className="talk" href="#contact">Let's talk <ArrowUpRight/></a>
        <button className="menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      </nav>
      <div className="hero-content">
        <div className="hero-copy reveal">
          <p className="kicker">Full-stack developer <b>•</b> AI/ML engineer</p>
          <h1><span>I BUILD</span><span>DIGITAL</span><span>EXPERIENCES</span></h1>
          <p className="intro">I turn ambitious ideas into intelligent digital products—where thoughtful interfaces meet powerful engineering.</p>
          <div className="hero-actions"><a href="#work" className="button primary">Explore my work <ArrowUpRight/></a><a href="https://github.com/wareeshayy" target="_blank" rel="noreferrer" className="button">View GitHub <Github/></a></div>
        </div>
        <div className="hero-card reveal">
          <div className="card-glint"/><small>ENGINEER / CREATOR</small><div className="monogram">WA</div><div className="signature">Wareesha</div><p>CODE IS MY CRAFT.<br/>IMPACT IS MY GOAL.</p><div className="card-coordinates">PK 31.72° N / 72.98° E</div>
        </div>
      </div>
      <a href="#about" className="scroll-cue"><ArrowDown/><span>Scroll to explore</span></a>
    </section>

    <section className="about section" id="about">
      <div className="ambient ambient-left"/><div className="wrap">
        <Label>01 / ABOUT ME</Label>
        <div className="about-grid">
          <div className="reveal"><h2><span>I DON'T JUST WRITE CODE.</span><strong>I BUILD WHAT'S NEXT.</strong></h2><p className="lead">I'm <em>Wareesha Ashraf</em>, a full-stack developer and AI/ML engineer focused on building scalable web applications, intelligent platforms, and refined digital experiences. I connect strong engineering with clear product thinking to turn complex requirements into useful outcomes.</p>
            <div className="stats"><div><b>06+</b><span>Live platforms</span></div><div><b>10+</b><span>Technologies</span></div><div><b>2026</b><span>CS graduate</span></div></div>
          </div>
          <div className="identity-card reveal"><div className="id-top"><span>ENGINEERING IDENTITY</span><i>WA / 26</i></div><div className="id-portrait"><div className="profile-ring"><span>WA</span></div></div><div className="id-name"><small>FULL-STACK × AI</small><h3>WAREESHA<br/>ASHRAF</h3><p>Building at the intersection of software, intelligence, and experience.</p></div><div className="id-foot"><span>FAST NUCES</span><span>PAKISTAN</span></div></div>
        </div>
      </div>
    </section>

    <section className="work section" id="work"><div className="wrap">
      <Label>02 / FEATURED WORK</Label><div className="section-heading reveal"><h2><span>SELECTED WORKS.</span><strong>ENGINEERED VALUE.</strong></h2><p>Scroll through six deployed products, each designed around a real problem and a focused technical system.</p></div>
      <div className="project-stack">{projects.map((p,i)=><article className="project-card" key={p.title} style={{top:`${96+i*10}px`,zIndex:projects.length-i}}>
        <div className="corner tl"/><div className="corner tr"/><div className="corner bl"/><div className="corner br"/><span className="watermark-number">{p.number}</span>
        <div className="project-main"><div className="project-tag"><b>{p.number} //</b> {p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div>
        <div className="project-side"><small>// SYSTEM METRICS</small>{p.metrics.map(([a,b])=><div className="metric" key={a}><span>{a}</span><b>{b}</b></div>)}<a href={p.url} target="_blank" rel="noreferrer">Launch project <ArrowUpRight/></a></div>
      </article>)}</div>
    </div></section>

    <section className="skills section" id="skills"><div className="wrap"><Label>03 / CAPABILITIES</Label><div className="section-heading reveal"><h2><span>TECHNICAL ARSENAL.</span><strong>BUILT FOR IMPACT.</strong></h2></div><div className="cap-grid">{capabilities.map(c=><article className="cap-card reveal" key={c.id}><div className="cap-meta"><span>{c.id}</span><i>ONLINE</i></div><h3>{c.title}</h3><p>{c.text}</p><div className="tech">{c.tools.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>

    <section className="journey section" id="journey"><div className="wrap narrow"><Label>04 / EXPERIENCE</Label><div className="section-heading reveal"><h2><span>EXPERIENCE &</span><strong>MILESTONES.</strong></h2></div><div className="route">{journey.map((j,i)=><div className="route-stop reveal" key={j.title}><div className="year">{j.year}</div><i/><div><h3>{j.title}</h3><span>{j.org}</span><p>{j.text}</p></div><b>0{i+1}</b></div>)}</div></div></section>

    <footer id="contact" className="contact section"><div className="wrap"><div className="contact-grid"><div className="reveal"><Label>05 / CONTACT</Label><h2><span>INITIALIZE</span><strong>TRANSMISSION.</strong></h2><p>Have an ambitious product, an engineering opportunity, or a collaborative idea? Send a direct dispatch.</p><div className="socials"><a href="https://github.com/wareeshayy" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/wareesha-ashraf-17a99827b/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:wareeshaashraf09@gmail.com"><Mail/> Email</a></div></div>
        <form className="terminal reveal" onSubmit={submit}><div className="terminal-head"><span>SECURE CHANNEL</span><i>● CONNECTED</i></div><div className="field-row"><label>// SENDER<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter name"/></label><label>// CHANNEL<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Enter email"/></label></div><label>// PAYLOAD<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Enter your message..."/></label><button>Execute dispatch <ArrowUpRight/></button></form>
      </div><div className="footer-line"><span>PORTFOLIO // EDITION 2026</span><span>© 2026 WAREESHA ASHRAF</span></div></div></footer>
  </main>
}

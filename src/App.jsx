import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const projects = [
  { name: 'MediQuest', type: 'AI / Healthtech', year: '2026', url: 'https://fyp-medi-quest.vercel.app/', code: 'MQ', className: 'medi', description: 'An AI-powered medical learning platform built for focused, adaptive study.' },
  { name: 'IJAIKE', type: 'AI / Research', year: '2026', url: 'https://ijaike-chatbot.vercel.app/', code: 'AI', className: 'ijaike', description: 'A research chatbot that turns complex questions into grounded, useful answers.' },
  { name: 'AI Chess Arena', type: 'AI / Multiplayer', year: '2026', url: 'https://ai-chess-arena-xi.vercel.app/', code: '♞', className: 'chess', description: 'A polished multiplayer chess experience with an intelligent AI opponent.' },
  { name: 'PixelCraft', type: 'Creative tools', year: '2025', url: 'https://pixel-craft-v1.vercel.app/', code: 'PX', className: 'pixel', description: 'Fast, friendly image and PDF processing tools in one creative workspace.' },
  { name: 'Connecto', type: 'Social / Full-stack', year: '2025', url: 'https://connecto-web-app.vercel.app/', code: 'CO', className: 'connecto', description: 'A full-stack social platform designed around people, posts, and conversation.' },
  { name: 'Wronyx', type: 'Web experience', year: '2025', url: 'https://wronyx.netlify.app/', code: 'WX', className: 'wronyx', description: 'A distinctive digital experience with a crisp, modern visual language.' },
];

const stack = ['React', 'Next.js', 'JavaScript', 'Python', 'PyTorch', 'Node.js', 'MongoDB', 'Supabase', 'Tailwind CSS', 'AI / ML'];

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('shown')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const go = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return <main>
    <nav>
      <a className="brand" href="#top">WAREESHA<span>®</span></a>
      <button className="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div className={`navlinks ${open ? 'open' : ''}`}>
        {['About', 'Projects', 'Skills', 'Contact'].map(item => <button key={item} onClick={() => go(`#${item.toLowerCase()}`)}>{item}</button>)}
      </div>
    </nav>

    <header id="top" className="hero">
      <div className="eyebrow"><span /> Available for ambitious projects</div>
      <h1>I BUILD<br/><em>DIGITAL</em><br/>EXPERIENCES.</h1>
      <div className="hero-bottom">
        <p>Full-stack developer and AI/ML engineer turning complex ideas into bold, useful products.</p>
        <button className="circle-button" onClick={() => go('#projects')} aria-label="Explore my work"><ArrowDownRight /></button>
      </div>
      <div className="orb orb-one"/><div className="orb orb-two"/>
    </header>

    <section id="about" className="about reveal">
      <div className="section-label">01 / About</div>
      <div className="about-copy">
        <h2>I DON'T JUST WRITE CODE.<br/><span>I BUILD WHAT'S NEXT.</span></h2>
        <p>I'm Wareesha Ashraf, a full-stack developer and AI/ML engineer based in Pakistan. I build responsive web applications and intelligent systems that feel effortless to use—combining clean engineering with sharp visual thinking.</p>
        <div className="facts"><div><strong>06+</strong><span>Featured projects</span></div><div><strong>10+</strong><span>Core technologies</span></div><div><strong>2026</strong><span>BS Computer Science</span></div></div>
      </div>
    </section>

    <section id="projects" className="projects">
      <div className="section-head reveal"><div className="section-label">02 / Selected work</div><h2>PROJECTS THAT<br/><span>SPEAK FOR THEMSELVES.</span></h2></div>
      <div className="project-grid">
        {projects.map((project, index) => <a className="project-card reveal" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
          <div className={`project-visual ${project.className}`}>
            <div className="browser-bar"><i/><i/><i/><span>{project.url.replace('https://','')}</span></div>
            <div className="visual-code">{project.code}</div>
            <div className="visual-index">0{index + 1}</div>
          </div>
          <div className="project-meta"><div><span>{project.type} · {project.year}</span><h3>{project.name}</h3><p>{project.description}</p></div><ArrowUpRight /></div>
        </a>)}
      </div>
    </section>

    <section id="skills" className="skills reveal">
      <div className="section-label">03 / Capabilities</div>
      <h2>IDEAS, ENGINEERED<br/><span>END TO END.</span></h2>
      <div className="ticker">{stack.map((item, i) => <span key={item}>{item}<b>{i % 2 ? '✦' : '●'}</b></span>)}</div>
      <div className="skill-columns">
        <div><span>01</span><h3>Full-stack systems</h3><p>Responsive interfaces, robust APIs, authentication, databases, and thoughtful deployment.</p></div>
        <div><span>02</span><h3>Applied intelligence</h3><p>AI-powered products, computer vision, LLM experiences, and machine-learning workflows.</p></div>
        <div><span>03</span><h3>Product thinking</h3><p>Clear information architecture, purposeful motion, accessibility, and visual polish.</p></div>
      </div>
    </section>

    <footer id="contact" className="contact reveal">
      <div className="section-label">04 / Let's work together</div>
      <h2>HAVE AN IDEA?<br/><span>LET'S MAKE IT REAL.</span></h2>
      <a className="email" href="mailto:wareeshaashraf09@gmail.com">wareeshaashraf09@gmail.com <ArrowUpRight /></a>
      <div className="footer-row">
        <p>© 2026 Wareesha Ashraf</p>
        <div><a href="https://github.com/wareeshayy" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/wareesha-ashraf-17a99827b/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="https://wareeshaportfolio.netlify.app/" target="_blank" rel="noreferrer"><ArrowUpRight/> Live portfolio</a></div>
      </div>
    </footer>
  </main>;
}

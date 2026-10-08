import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Check, Copy, Mail, Menu, X } from 'lucide-react'
import './styles.css'

const EMAIL = 'wmaaf1311@gmail.com'

const projects = [
  {
    number: '01',
    title: 'MyChamp',
    kicker: 'Multi-tenant sports academy platform',
    description: 'Laravel 11 + Filament platform for students, clubs, attendance, payments, subscriptions, and athlete development.',
    tags: ['Laravel 11', 'Filament 3', 'PHP 8.2', 'Vue 3'],
    image: 'images/mychamps.png',
    imageAlt: 'MyChamp project interface',
    link: null,
    metric: '4 clubs · 3 tracks',
  },
  {
    number: '02',
    title: 'KTAM platform',
    kicker: 'Membership & contribution systems',
    description: 'Membership registration, recurring contributions, reconciliation, card delivery, approvals, and reporting.',
    tags: ['TypeScript', 'Node.js', 'Express', 'Laravel'],
    image: 'images/ktam.png',
    imageAlt: 'KTAM platform interface',
    link: null,
    metric: 'Payments · approvals',
  },
  {
    number: '03',
    title: 'Masbro Canteen',
    kicker: 'Food ordering system',
    description: 'Laravel ordering app with API server, mobile client, and admin panel for sales, RBAC, payments, Firebase.',
    tags: ['Laravel', 'REST API', 'RBAC', 'Midtrans'],
    image: 'images/masbro-canteen.jpg',
    imageAlt: 'Masbro Canteen dashboard interface',
    link: 'https://github.com/wildan1311/pa-masbro-canteen',
    metric: 'API · mobile · admin',
  },
  {
    number: '04',
    title: 'AWB Printout Photos',
    kicker: 'Passport photo printing tool',
    description: 'Focused React app for cropping passport photos to the required ratio and preparing them for print.',
    tags: ['React', 'Tailwind', 'Cropper.js'],
    image: 'images/awb-photo.jpg',
    imageAlt: 'AWB passport photo print interface',
    link: 'https://github.com/wildan1311/awb-cetak-foto',
    metric: 'Crop · print · deliver',
  },
  {
    number: '05',
    title: 'KAGAPI',
    kicker: 'Digital queue management',
    description: 'Laravel + JS queue system with realtime status, WebSockets, TTS announcements, and mobile API.',
    tags: ['Laravel', 'JavaScript', 'WebSocket', 'REST API'],
    image: 'images/kagapi.jpg',
    imageAlt: 'KAGAPI queue management interface',
    link: 'https://kelurahangebangputih.com/',
    metric: 'Queue · realtime',
  },
  {
    number: '06',
    title: 'POS & publishing tools',
    kicker: 'Operational web applications',
    description: 'POS, e-catalog, portal, CRM, writer portal, HRIS, and operational tools for publishing workflows.',
    tags: ['Laravel', 'Filament', 'jQuery', 'DataTables'],
    image: 'images/pos.jpg',
    imageAlt: 'POS publishing application interface',
    link: 'https://github.com/circleitdev/pos-laravel-backend',
    metric: 'Operations · retail',
  },
]

const experience = [
  { period: '2025 — now', role: 'Backend Developer', company: 'PT Grama Inovasi Teknologi · LabMu', detail: 'Membership, contributions, payment, shipment, and internal platform systems.' },
  { period: '2024 — 2025', role: 'Web Developer', company: 'Deepublish', detail: 'CRM, HRIS, writer portal, e-catalog, and operational apps for a publisher.' },
  { period: '2024', role: 'Web Developer', company: 'KAGAPI · Gebang Keputih', detail: 'Digital queue management with realtime updates and mobile integration.' },
  { period: '2023 — 2024', role: 'Intern Web Developer', company: 'PT Aksamedia Mulia Digital', detail: 'Admin and API development for an online exam platform.' },
]

const stack = ['Laravel', 'Filament', 'Node.js', 'TypeScript', 'React', 'Vue 3', 'MySQL', 'REST API', 'Tailwind', 'Firebase']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}><span className="wordmark-mark">W</span> wildan.dev</a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />} Menu
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero">
          <span className="hero-badge"><i /> Available for work · Yogyakarta, ID</span>
          <h1>Transforming concepts into <span className="grad">seamless user experiences.</span></h1>
          <p className="hero-sub">I&apos;m Wildan — backend & web developer turning complicated workflows into clear, dependable products with Laravel, Node.js, and modern web tools.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">Explore selected work <ArrowDown size={16} /></a>
            <a className="button button-ghost" href={`mailto:${EMAIL}`}>Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-meta"><span>2.5+ yrs experience</span><span>6 selected projects</span><span>Laravel · Node · React</span></div>
        </section>

        <section className="showcase">
          <div className="showcase-main">
            <div className="showcase-tag"><em>Featured</em><em>Production</em></div>
            {projects[0].image
              ? <img src={projects[0].image} alt={projects[0].imageAlt} />
              : <img src="images/masbro-canteen.jpg" alt="Featured project preview" onError={(e) => { e.currentTarget.style.display = 'none' }} />}
            <h3>{projects[0].title} — {projects[0].kicker}</h3>
            <p>{projects[0].description}</p>
          </div>
          <div className="showcase-stack">
            <div className="mini-card">
              <h4>My toolbox stack</h4>
              <p>Laravel, Filament, Node.js, React — reliable backends, clean admins.</p>
              <div className="bar"><i style={{ width: '86%' }} /></div>
            </div>
            <div className="mini-card">
              <h4>Currently</h4>
              <p>Backend Developer @ LabMu — membership, payments, shipment systems.</p>
              <div className="bar"><i style={{ width: '64%' }} /></div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <div><span className="kicker">Selected work</span><h2>A few things I&apos;ve helped shape.</h2></div>
            <p>Production platforms, internal tools, and experiments — each started from a real workflow.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <button className="work-card" key={project.number} onClick={() => setActiveProject(project)}>
                <div className={project.image ? 'work-thumb' : 'work-thumb fallback'}>
                  {project.image
                    ? <img src={project.image} alt={project.imageAlt} loading="lazy" />
                    : <><span>{project.title.slice(0, 2).toUpperCase()}</span><small>{project.metric}</small></>}
                </div>
                <div className="work-body">
                  <div className="work-top"><span className="work-num">{project.number} — {project.metric}</span><ArrowUpRight size={17} /></div>
                  <h3>{project.title}</h3>
                  <div className="kicker-line">{project.kicker}</div>
                  <p className="desc">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="split">
            <div className="panel">
              <span className="kicker">About</span>
              <h3>Curious by default. Careful by practice.</h3>
              <p>Information Engineering graduate with ~2.5 years hands-on experience across Laravel, Node.js, payments, and internal platforms. I like working close to the problem and leaving code easier than I found it.</p>
              <div className="stack-list">{stack.map((s) => <span key={s}>{s}</span>)}</div>
            </div>
            <div className="panel">
              <span className="kicker">Experience</span>
              <h3>The path so far.</h3>
              <div className="timeline" id="experience">
                {experience.map((item) => (
                  <div className="timeline-item" key={item.period + item.role}>
                    <div className="timeline-period">{item.period}</div>
                    <div className="timeline-role"><h4>{item.role}</h4><span>{item.company}</span></div>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-card">
            <span className="kicker">Have a thoughtful problem?</span>
            <h2>Let&apos;s make something useful.</h2>
            <p>Tell me about your workflow, system, or idea — I&apos;ll reply within 1–2 days.</p>
            <button className="email-button" onClick={copyEmail}>{EMAIL} {copied ? <Check size={18} /> : <Copy size={16} />}</button>
            <div className="socials">
              <a href="https://github.com/wildan1311" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
              <a href="https://www.linkedin.com/in/wildan-maulana-akbar-al-faqih-b83a61192/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
              <a href={`mailto:${EMAIL}`}><Mail size={15} /> Email <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Wildan Maulana Akbar Alfaqih</span>
        <span>Minimal dark · Built with React</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project"><X size={18} /></button>
            {activeProject.image && <img className="modal-image" src={activeProject.image} alt={activeProject.imageAlt} />}
            <div className="mono" style={{ color: 'var(--accent)' }}>{activeProject.number} — {activeProject.metric}</div>
            <p className="mono" style={{ color: 'var(--muted)', marginTop: 12 }}>{activeProject.kicker}</p>
            <h2>{activeProject.title}</h2>
            <p className="modal-description">{activeProject.description}</p>
            <div className="tag-list" style={{ marginTop: 16 }}>{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="modal-meta"><span>Role</span><strong>Web / backend development</strong><span>Focus</span><strong>Reliable product workflows</strong></div>
            {activeProject.link
              ? <a className="button button-light" href={activeProject.link} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={16} /></a>
              : <p className="modal-note">Private project · details available on request.</p>}
          </div>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

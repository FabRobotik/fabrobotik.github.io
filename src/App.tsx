import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Printer, 
  MapPin, 
  Calendar as CalendarIcon, 
  BrainCircuit, 
  Menu, 
  X, 
  Mail, 
  ChevronRight, 
  Zap, 
  Shield, 
  Heart, 
  Download, 
  Clock, 
  CheckCircle2, 
  User, 
  Instagram,
  Twitter,
  Linkedin,
  Target,
  Github,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Cours', path: '/cours' },
    { name: 'L\'Atelier', path: '/services' },
    { name: 'Réserver', path: '/reservation' },
    { name: 'Rejoindre', path: '/membership' },
  ];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: 'var(--primary)', padding: '10px', borderRadius: '14px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BrainCircuit size={28} />
          </div>
          <span style={{ fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.06em', color: 'var(--dark)' }}>FabRobotik</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/membership" className="btn btn-primary hidden-mobile">
            Adhérer <ChevronRight size={18} />
          </Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <BrainCircuit size={32} style={{ color: 'var(--primary)' }} />
          <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>FabRobotik</span>
        </div>
        <p style={{ color: 'var(--slate-400)', marginBottom: '32px', lineHeight: '1.6' }}>
          L'alliance de l'intelligence et de la création. Nous formons les architectes du monde numérique de demain.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="#" className="social-icon"><Instagram size={20} /></a>
          <a href="#" className="social-icon"><Twitter size={20} /></a>
          <a href="#" className="social-icon"><Linkedin size={20} /></a>
          <a href="https://github.com/fabrobotik" className="social-icon"><Github size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="footer-title">Explorer</h4>
        <Link to="/" className="footer-link">Accueil</Link>
        <Link to="/about" className="footer-link">À Propos</Link>
        <Link to="/cours" className="footer-link">Nos Cours</Link>
        <Link to="/services" className="footer-link">L'Atelier</Link>
      </div>
      <div>
        <h4 className="footer-title">Contact</h4>
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--slate-400)', marginBottom: '16px' }}>
          <MapPin size={18} style={{ color: 'var(--primary)' }} /> Oullins-Pierre Bénite
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--slate-400)' }}>
          <Mail size={18} style={{ color: 'var(--primary)' }} /> fabrobotik@proton.me
        </p>
      </div>
    </div>
    <div className="container" style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <p style={{ color: 'var(--slate-500)', fontSize: '0.875rem' }}>© 2026 FabRobotik. Fait avec <Heart size={14} style={{ color: 'var(--accent)', display: 'inline' }} /> pour l'innovation.</p>
    </div>
  </footer>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => (
  <PageTransition>
    <header className="section" style={{ paddingTop: '180px' }}>
      <div className="container grid md-cols-2 gap-20" style={{ alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '32px' }}>
            <Zap size={14} /> Forger l'intelligence de demain
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '32px' }}>
            VOTRE ESPACE <span style={{ color: 'var(--primary)' }}>FabRobotik</span>.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--slate-600)', marginBottom: '48px' }}>
            Apprenez l'informatique, maîtrisez l'IA et construisez vos propres systèmes robotiques au sein de notre communauté de passionnés.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/cours" className="btn btn-primary">Découvrir les Cours</Link>
            <Link to="/reservation" className="btn btn-outline">Accéder à l'Atelier</Link>
          </div>
        </div>
        <div className="img-overlap">
           <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Robot" className="img-main" />
           <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500" alt="Lab" className="img-small" />
        </div>
      </div>
    </header>
  </PageTransition>
);

const About = () => (
  <PageTransition>
    <section className="section" style={{ paddingTop: '180px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '32px' }}>NOTRE <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>HISTOIRE</span>.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--slate-600)', lineHeight: '1.8' }}>
            FabRobotik est né de la conviction que la technologie ne doit pas être une boîte noire. 
            Fondée en 2024 par un groupe d'ingénieurs et de passionnés, l'association s'est donné pour mission 
            de rendre la robotique de pointe et l'IA accessibles à tous.
          </p>
        </div>

        <div className="grid md-cols-2 gap-20" style={{ marginBottom: '120px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { year: '2024', title: 'La Fondation', desc: 'Ouverture de notre premier atelier avec 2 imprimantes 3D et une ambition immense.' },
              { year: '2025', title: 'Expansion IA', desc: 'Intégration des premières stations de calcul et lancement des cours sur LeRobot.' },
              { year: '2026', title: 'FabRobotik Aujourd\'hui', desc: 'Une communauté de 200 membres et un parc machine de classe industrielle.' }
            ].map((item, i) => (
              <div key={i} className="history-item">
                <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.25rem' }}>{item.year}</span>
                <h4 style={{ margin: '8px 0' }}>{item.title}</h4>
                <p style={{ color: 'var(--slate-500)', fontSize: '0.9375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="philosophy-card">
            <Target size={40} style={{ color: 'var(--primary)', marginBottom: '24px' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>Notre Philosophie</h3>
            <p style={{ color: 'var(--slate-400)', lineHeight: '1.8', marginBottom: '24px' }}>
              Nous croyons en la "Forge Cognitive" : l'idée que l'on comprend mieux une technologie en la construisant soi-même. 
              Pas de théorie abstraite sans pratique concrète.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}><CheckCircle2 size={18} style={{ color: 'var(--primary)' }} /> Open Source par défaut</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}><CheckCircle2 size={18} style={{ color: 'var(--primary)' }} /> Apprentissage par l'échec</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} style={{ color: 'var(--primary)' }} /> Collaboration radicale</li>
            </ul>
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '60px', textAlign: 'center' }}>L'ÉQUIPE <span style={{ color: 'var(--primary)' }}>FONDRATRICE</span>.</h2>
        <div className="grid md-cols-3 gap-8">
          {[
            { name: 'Alexandre Forge', role: 'Fondateur & Expert Robotique', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
            { name: 'Sarah Circuit', role: 'Responsable FabLab', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
            { name: 'Marc Neuron', role: 'Lead IA & Deep Learning', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }
          ].map((member, i) => (
            <div key={i} className="card member-card">
              <img src={member.img} alt={member.name} className="member-image" />
              <h4>{member.name}</h4>
              <p style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 700, marginTop: '4px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

const Courses = () => {
  const handleBooking = (courseName: string) => {
    alert(`Demande de réservation envoyée pour le cours : ${courseName}`);
  };

  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '80px' }}>FORGEZ VOS <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>COMPÉTENCES</span>.</h2>
          <div className="grid md-cols-3 gap-8">
            {[
              { title: "Initiation Robotique", price: "45€", dur: "3h", img: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=500" },
              { title: "IA & Machine Learning", price: "75€", dur: "4h", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500" },
              { title: "Maîtrise LeRobot", price: "120€", dur: "1 jour", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=500" }
            ].map((c, i) => (
              <div key={i} className="card course-card" style={{ padding: 0 }}>
                <img src={c.img} alt={c.title} className="course-image" />
                <div style={{ padding: '32px' }}>
                  <h3>{c.title}</h3>
                  <div style={{ display: 'flex', gap: '12px', margin: '16px 0', color: 'var(--slate-500)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {c.dur}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={14} /> Certifiant</span>
                  </div>
                  <div className="course-price">{c.price}</div>
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleBooking(c.title)}>S'inscrire</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Services = () => (
  <PageTransition>
    <section className="section" style={{ paddingTop: '180px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '24px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>LA FORGE <br /><span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>TECHNIQUE</span>.</h2>
          <button className="btn btn-outline no-print" onClick={() => window.print()}>
            <Download size={18} /> Catalogue FabRobotik (PDF)
          </button>
        </div>
        <div className="card grid md-cols-2 gap-20" style={{ alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1631284555447-64355d91d158?auto=format&fit=crop&q=80&w=800" alt="Lab" style={{ width: '100%', borderRadius: '16px' }} />
          <div>
            <h3>Équipements FabRobotik</h3>
            <p style={{ color: 'var(--slate-600)', margin: '20px 0' }}>Un arsenal complet pour transformer vos idées en réalité physique et numérique.</p>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '16px' }}><strong>Parc Impression 3D</strong> - FDM & Résine haute définition</li>
              <li style={{ marginBottom: '16px' }}><strong>Station Laser</strong> - Découpe et gravure 100W</li>
              <li style={{ marginBottom: '16px' }}><strong>Unités Robotiques</strong> - Bras SO-100 & Plateformes IA</li>
              <li><strong>Calcul Haute Performance</strong> - GPUs dédiés au Deep Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Réservation envoyée à l'équipe FabRobotik !");
  };

  const days = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.7 ? 'full' : 'free'
  }));

  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container grid md-cols-2 gap-20">
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '32px' }}>RÉSERVER.</h2>
            <p style={{ color: 'var(--slate-600)', marginBottom: '40px' }}>Sélectionnez un créneau pour accéder aux machines de la Forge.</p>
            <div className="card">
              <div className="calendar-grid">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => <div key={d} style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.75rem', color: 'var(--slate-400)' }}>{d}</div>)}
                {days.map(d => (
                  <div key={d.day} className={`calendar-day ${d.status} ${selectedDate === d.day ? 'selected' : ''}`} onClick={() => d.status === 'free' && setSelectedDate(d.day)}>
                    {d.day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="form-card">
            <div className="form-header">
              <h3 style={{ fontSize: '1.75rem' }}>Finaliser la réservation</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label"><User size={14} style={{ marginRight: 8 }} /> Identité</label>
                <input type="text" name="user_name" className="form-input" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <label className="form-label"><Printer size={14} style={{ marginRight: 8 }} /> Ressource</label>
                <select name="machine" className="form-select">
                  <option>Imprimante 3D</option>
                  <option>Découpeuse Laser</option>
                  <option>Poste Robotique IA</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label"><CalendarIcon size={14} style={{ marginRight: 8 }} /> Date</label>
                <input type="text" name="date" className="form-input" value={selectedDate ? `${selectedDate} Mars 2026` : ''} readOnly placeholder="Sélectionner un jour" required />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', padding: '18px' }} disabled={!selectedDate}>
                Confirmer la réservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Membership = () => (
  <PageTransition>
    <section className="section" style={{ paddingTop: '180px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>REJOINDRE LA FORGE.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--slate-600)', marginTop: '24px' }}>Devenez membre de FabRobotik et accédez au futur.</p>
        </div>
        
        <div className="grid md-cols-2 gap-8" style={{ maxWidth: '900px', marginInline: 'auto' }}>
          {[
            { title: 'Membre Actif', price: '30€', color: 'primary', perks: ['Accès illimité à l\'atelier', 'Priorité sur les cours IA'] },
            { title: 'Étudiant Forge', price: '15€', color: 'accent', perks: ['Accès illimité à l\'atelier', 'Tarif réduit composants'] }
          ].map((plan, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: i === 0 ? '2px solid var(--primary)' : '1px solid var(--slate-200)' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>{plan.title}</h4>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>{plan.price}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--slate-400)' }}>/an</span></div>
              <ul style={{ listStyle: 'none', width: '100%', marginBottom: '40px' }}>
                {plan.perks.map((p, j) => <li key={j} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={16} style={{ color: 'var(--primary)' }} /> {p}</li>)}
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', backgroundColor: i === 0 ? 'var(--primary)' : 'var(--dark)' }}>Adhérer</button>
            </div>
          ))}
        </div>

        <div className="donor-box">
          <h3>Propulser FabRobotik</h3>
          <p>Vos dons nous permettent d'acquérir les technologies les plus avancées pour la communauté.</p>
          <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
            <Heart size={18} style={{ marginRight: 8 }} /> Soutenir par un don
          </button>
        </div>
      </div>
    </section>
  </PageTransition>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cours" element={<Courses />} />
              <Route path="/services" element={<Services />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/membership" element={<Membership />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { 
  Printer, 
  MapPin, 
  Calendar as CalendarIcon, 
  Menu, 
  X, 
  Mail, 
  ChevronRight, 
  Shield, 
  Heart, 
  Download, 
  Clock, 
  CheckCircle2, 
  User, 
  Facebook,
  Twitter,
  Linkedin,
  Target,
  Github,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, type Language } from './translations';

// --- Context ---

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.fr;
}>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

const useTranslation = () => useContext(LanguageContext);

// --- Shared Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.courses, path: '/cours' },
    { name: t.nav.workshop, path: '/services' },
    { name: t.nav.reserve, path: '/reservation' },
    { name: t.nav.join, path: '/membership' },
  ];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/logo_medium.png" alt="FabRobotik Logo" style={{ height: '50px', width: 'auto' }} />
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'var(--slate-100)', padding: '4px', borderRadius: '12px' }}>
            <button 
              className={`btn-lang ${lang === 'fr' ? 'active' : ''}`} 
              onClick={() => setLang('fr')}
              style={{ fontSize: '1.4rem', padding: '4px 8px', borderRadius: '8px', background: lang === 'fr' ? 'var(--white)' : 'transparent', boxShadow: lang === 'fr' ? 'var(--shadow-sm)' : 'none', transition: 'var(--transition)' }}
            >
              🇫🇷
            </button>
            <button 
              className={`btn-lang ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => setLang('en')}
              style={{ fontSize: '1.4rem', padding: '4px 8px', borderRadius: '8px', background: lang === 'en' ? 'var(--white)' : 'transparent', boxShadow: lang === 'en' ? 'var(--shadow-sm)' : 'none', transition: 'var(--transition)' }}
            >
              🇬🇧
            </button>
          </div>
          
          <Link to="/membership" className="btn btn-primary hidden-mobile">
            <Heart size={18} />
          </Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <img src="logo.png" alt="FabRobotik Logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ color: 'var(--slate-400)', marginBottom: '32px', lineHeight: '1.8' }}>
            {t.footer.desc}
          </p>
          <div style={{ display: 'flex', gap: '14px' }}>
            <a href="https://www.facebook.com/profile.php?id=61585205717978" className="social-icon"><Facebook size={20} /></a>
            <a href="https://x.com/fabrobotik" className="social-icon"><Twitter size={20} /></a>
            <a href="https://www.linkedin.com/company/fabrobotik/about" className="social-icon"><Linkedin size={20} /></a>
            <a href="https://github.com/FabRobotik" className="social-icon"><Github size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="footer-title">{t.footer.explorer}</h4>
          <Link to="/" className="footer-link">{t.nav.home}</Link>
          <Link to="/about" className="footer-link">{t.nav.about}</Link>
          <Link to="/news" className="footer-link">{t.nav.news}</Link>
          <Link to="/cours" className="footer-link">{t.nav.courses}</Link>
          <Link to="/services" className="footer-link">{t.nav.workshop}</Link>
        </div>
        <div>
          <h4 className="footer-title">{t.footer.contact}</h4>
          <p style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--slate-400)', marginBottom: '16px' }}>
            <MapPin size={18} style={{ color: 'var(--primary)' }} /> Oullins-Pierre Bénite
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--slate-400)' }}>
            <Mail size={18} style={{ color: 'var(--primary)' }} /> fabrobotik@proton.me
          </p>
        </div>
      </div>
      <div className="container" style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p style={{ color: 'var(--slate-500)', fontSize: '0.95rem' }}>
          © 2026 FabRobotik. {t.footer.madeWith.split('{heart}')[0]} <Heart size={14} style={{ color: 'var(--accent)', display: 'inline' }} /> {t.footer.madeWith.split('{heart}')[1]}
        </p>
      </div>
    </footer>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <header className="section" style={{ paddingTop: '180px', position: 'relative', overflow: 'hidden' }}>
        <div className="container grid md-cols-2 gap-20" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', marginBottom: '32px', lineHeight: 1 }}>
              {t.home.title.split('{span}')[0]} <span style={{ color: 'var(--primary)' }}>FabRobotik</span>{t.home.title.split('{span}')[1]}
            </h1>
            <p style={{ fontSize: '1.35rem', color: 'var(--slate-600)', marginBottom: '48px', lineHeight: '1.7' }}>
              {t.home.desc}
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/cours" className="btn btn-primary">{t.home.btnCourses}</Link>
              <Link to="/reservation" className="btn btn-outline">{t.home.btnWorkshop} <Sparkles size={18} /></Link>
            </div>
          </div>
          <div className="img-overlap">
             <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Robotik Community" className="img-main" />
             <div style={{ position: 'absolute', top: '-20px', right: '-20px', backgroundColor: 'var(--primary)', color: 'white', padding: '20px', borderRadius: '24px', fontWeight: 800, transform: 'rotate(12deg)', boxShadow: 'var(--shadow-lg)' }}>
                {t.home.badge}
             </div>
          </div>
        </div>
        <div className="blob" style={{ width: '600px', height: '600px', top: '-200px', right: '-100px' }}></div>
        <div className="blob" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', backgroundColor: 'var(--secondary)' }}></div>
      </header>
    </PageTransition>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '32px' }}>
              {t.about.title.split('{span}')[0]} <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>{t.about.titleSpan}</span>{t.about.title.split('{span}')[1]}
            </h2>
            <p style={{ fontSize: '1.35rem', color: 'var(--slate-600)', lineHeight: '1.8' }}>
              {t.about.desc}
            </p>
          </div>

          <div className="grid md-cols-2 gap-20" style={{ marginBottom: '120px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {t.about.history.map((item, i) => (
                <div key={i} className="history-item">
                  <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.4rem' }}>{item.year}</span>
                  <h4 style={{ margin: '10px 0', fontSize: '1.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--slate-500)', fontSize: '1rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="philosophy-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <Target size={48} style={{ color: 'var(--secondary)' }} />
                 <h3 style={{ fontSize: '2.2rem' }}>{t.about.philosophy.title}</h3>
              </div>
              <p style={{ color: 'var(--slate-400)', lineHeight: '1.8', marginBottom: '32px', fontSize: '1.1rem' }}>
                {t.about.philosophy.desc}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {t.about.philosophy.perks.map((perk, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.1rem' }}>
                    <div style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', padding: '8px', borderRadius: '12px' }}>
                       <CheckCircle2 size={20} style={{ color: 'var(--primary-light)' }} />
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '60px', textAlign: 'center' }}>
            {t.about.team.title.split('{span}')[0]} <span style={{ color: 'var(--primary)' }}>{t.about.team.titleSpan}</span>{t.about.team.title.split('{span}')[1]}
          </h2>
          <div className="grid md-cols-3 gap-8">
            {[
              { name: 'Alexandre Chapin', role: t.about.team.role, img: 'alex.jpeg' },
            ].map((member, i) => (
              <div key={i} className="card member-card">
                <img src={member.img} alt={member.name} className="member-image" />
                <h4 style={{ fontSize: '1.5rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700, marginTop: '8px' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const News = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const article = t.news.list.find(a => a.id === parseInt(id));
    if (!article) return <div className="section container">Article not found</div>;

    return (
      <PageTransition>
        <section className="section" style={{ paddingTop: '180px' }}>
          <div className="container">
            <button 
              onClick={() => navigate('/news')} 
              className="btn btn-outline" 
              style={{ marginBottom: '40px' }}
            >
              <ArrowLeft size={18} /> {t.news.backToList}
            </button>
            <div style={{ maxWidth: '900px', marginInline: 'auto' }}>
              <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: '100%', borderRadius: '48px', marginBottom: '48px', height: '450px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} 
              />
              <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{article.date}</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '24px 0' }}>{article.title}</h1>
              <div style={{ fontSize: '1.25rem', lineHeight: '1.9', color: 'var(--slate-600)' }}>
                {article.content}
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '80px' }}>
            {t.news.title.split('{span}')[0]} <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>{t.news.titleSpan}</span>{t.news.title.split('{span}')[1]}
          </h2>
          
          {t.news.list.length > 0 ? (
            <div className="grid md-cols-2 gap-8">
              {t.news.list.map((article) => (
                <div key={article.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    style={{ width: '100%', height: '280px', objectFit: 'cover' }} 
                  />
                  <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'var(--slate-400)', fontSize: '0.95rem', fontWeight: 700 }}>{article.date}</span>
                    <h3 style={{ margin: '16px 0', fontSize: '1.85rem' }}>{article.title}</h3>
                    <p style={{ color: 'var(--slate-600)', marginBottom: '32px', flexGrow: 1, fontSize: '1.1rem' }}>{article.excerpt}</p>
                    <Link to={`/news/${article.id}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                      {t.news.readMore} <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0', backgroundColor: '#f8fafc', borderRadius: '48px', border: '3px dashed var(--slate-200)' }}>
              <div style={{ backgroundColor: 'white', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', boxShadow: 'var(--shadow-md)' }}>
                <Sparkles size={48} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '16px' }}>{t.news.noNews}</h3>
              <p style={{ color: 'var(--slate-500)', maxWidth: '450px', margin: '0 auto', fontSize: '1.1rem' }}>{t.news.noNewsDesc}</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

const Courses = () => {
  const { t } = useTranslation();
  const handleBooking = (courseName: string) => {
    alert(`${t.reservation.alert} (${courseName})`);
  };

  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '80px' }}>
            {t.courses.title.split('{span}')[0]} <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>{t.courses.titleSpan}</span>{t.courses.title.split('{span}')[1]}
          </h2>
          <div className="grid md-cols-3 gap-8">
            {t.courses.list.map((c, i) => (
              <div key={i} className="card course-card" style={{ padding: 0 }}>
                <img src={[
                  "duck_hf.png",
                  "ia.jpg",
                  "so100.jfif"
                ][i]} alt={c.title} className="course-image" />
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '1.5rem' }}>{c.title}</h3>
                  <div style={{ display: 'flex', gap: '12px', margin: '16px 0', color: 'var(--slate-500)', fontSize: '0.95rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={16} /> {c.dur.includes('day') ? t.courses.day : t.courses.duration.replace('{d}', c.dur)}
                    </span>
                  </div>
                  <div className="course-price">{t.courses.upcoming}</div>
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleBooking(c.title)}>{t.courses.signUp}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              {t.services.title.split('{span}')[0]} <br /><span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>{t.services.titleSpan}</span>{t.services.title.split('{span}')[1]}
            </h2>
            <button className="btn btn-outline no-print" onClick={() => window.print()}>
              <Download size={18} /> {t.services.download}
            </button>
          </div>
          <div className="card grid md-cols-2 gap-20" style={{ alignItems: 'center' }}>
            <img src="lab.jpg" alt="Lab" style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }} />
            <div>
              <h3 style={{ fontSize: '2rem' }}>{t.services.equipment.title}</h3>
              <p style={{ color: 'var(--slate-600)', margin: '24px 0', fontSize: '1.1rem' }}>{t.services.equipment.desc}</p>
              <ul style={{ listStyle: 'none' }}>
                {t.services.equipment.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '20px', fontSize: '1.05rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ backgroundColor: 'var(--primary)', width: '8px', height: '8px', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                    <span><strong>{item.split(' - ')[0]}</strong> - {item.split(' - ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Reservation = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMachine, setSelectedMachine] = useState(t.reservation.resources[0]);
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  // Use state for reservations to keep them consistent across renders
  const [bookedDates, setBookedDates] = useState<{ [machine: string]: number[] }>(() => {
    const saved = localStorage.getItem('fabrobotik_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    // Initial mock data: deterministic "random" bookings so it's consistent
    const initial: { [machine: string]: number[] } = {};
    t.reservation.resources.forEach(machine => {
      initial[machine] = Array.from({ length: 31 }, (_, i) => i + 1)
        .filter(day => (day * machine.length) % 7 === 0); // Deterministic pattern
    });
    return initial;
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('fabrobotik_bookings', JSON.stringify(bookedDates));
  }, [bookedDates]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !form.current) return;

    setIsSending(true);

    const formData = new FormData(form.current);
    // On ajoute la date de manière explicite pour le mail
    formData.append('date_de_reservation', `${selectedDate} ${t.reservation.month}`);

    // URL Formspree (à configurer dans GitHub Secrets / .env)
    const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL || "https://formspree.io/f/votre_id";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const currentMachineBookings = bookedDates[selectedMachine] || [];
        if (!currentMachineBookings.includes(selectedDate)) {
          setBookedDates({
            ...bookedDates,
            [selectedMachine]: [...currentMachineBookings, selectedDate]
          });
        }
        alert(t.reservation.alert);
        setSelectedDate(null);
        form.current?.reset();
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("Oups ! Une erreur est survenue lors de l'envoi. Vous pouvez nous contacter directement à fabrobotik@proton.me");
    } finally {
      setIsSending(false);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    const isBooked = (bookedDates[selectedMachine] || []).includes(day);
    return {
      day,
      status: isBooked ? 'full' : 'free'
    };
  });

  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container grid md-cols-2 gap-20">
          <div>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '32px' }}>{t.reservation.title}</h2>
            <p style={{ color: 'var(--slate-600)', marginBottom: '48px', fontSize: '1.2rem' }}>{t.reservation.desc}</p>
            <div className="card">
              <div className="calendar-grid">
                {t.reservation.calendarDays.map(d => <div key={d} style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.85rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>{d}</div>)}
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
              <h3 style={{ fontSize: '2rem' }}>{t.reservation.finalize}</h3>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><User size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} /> {t.reservation.identity}</label>
                <input type="text" name="nom_utilisateur" className="form-input" placeholder={t.reservation.namePlaceholder} required />
              </div>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><Printer size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} /> {t.reservation.resource}</label>
                <select 
                  name="machine_choisie" 
                  className="form-select" 
                  value={selectedMachine} 
                  onChange={(e) => {
                    setSelectedMachine(e.target.value);
                    setSelectedDate(null); // Reset date when machine changes
                  }}
                >
                  {t.reservation.resources.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '32px' }}>
                <label className="form-label"><CalendarIcon size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} /> {t.reservation.date}</label>
                <input 
                  type="text" 
                  name="date_cliquee" 
                  className="form-input" 
                  value={selectedDate ? `${selectedDate} ${t.reservation.month}` : ''} 
                  readOnly 
                  placeholder={t.reservation.datePlaceholder} 
                  required 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const calendarElement = document.querySelector('.calendar-grid');
                    calendarElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                />
              </div>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }} 
                disabled={!selectedDate || isSending}
              >
                {isSending ? "Envoi en cours..." : t.reservation.confirm}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const Membership = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: '180px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>{t.membership.title}</h2>
            <p style={{ fontSize: '1.35rem', color: 'var(--slate-600)', marginTop: '24px', maxWidth: '700px', marginInline: 'auto' }}>{t.membership.desc}</p>
          </div>
          
          <div className="grid md-cols-2 gap-8" style={{ maxWidth: '950px', marginInline: 'auto' }}>
            {t.membership.plans.map((plan, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: i === 0 ? '3px solid var(--primary)' : '1px solid var(--slate-200)', position: 'relative' }}>
                <h4 style={{ fontSize: '1.85rem', marginBottom: '24px' }}>{plan.title}</h4>
                <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '32px', color: 'var(--dark)' }}>{i === 0 ? '60€' : '30€'}<span style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--slate-400)' }}>{t.membership.perYear}</span></div>
                <ul style={{ listStyle: 'none', width: '100%', marginBottom: '40px' }}>
                  {plan.perks.map((p, j) => <li key={j} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem' }}><div style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', padding: '6px', borderRadius: '50%' }}><Shield size={16} style={{ color: 'var(--primary)' }} /></div> {p}</li>)}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%', padding: '18px', backgroundColor: i === 0 ? 'var(--primary)' : 'var(--dark)' }}>{t.membership.btnJoin}</button>
              </div>
            ))}
          </div>

          <div className="donor-box">
            <h3 style={{ color: 'white' }}>{t.membership.donor.title}</h3>
            <p style={{ fontSize: '1.2rem', marginBottom: '32px', opacity: 0.9 }}>{t.membership.donor.desc}</p>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '18px 40px', fontSize: '1.1rem' }}>
              <Heart size={20} style={{ marginRight: 10, color: 'var(--accent)' }} /> {t.membership.donor.btn}
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

function App() {
  const [lang, setLang] = useState<Language>('fr');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<News />} />
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
    </LanguageContext.Provider>
  );
}

export default App;

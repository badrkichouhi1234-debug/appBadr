/*
React single-file starter template for the site structure in your brief.

How to use:
1. Create a new React app (Vite or CRA). Example (Vite):
   npm create vite@latest my-site --template react
   cd my-site
   npm install
2. Replace src/App.jsx with the contents of this file.
3. Add the CSS from the bottom of this file into src/index.css (or import it from App.jsx).
4. Run: npm run dev (Vite) or npm start (CRA).

This template uses no extra dependencies and implements a simple SPA (no react-router).

Files to create / update:
- src/App.jsx  (replace with this file)
- src/index.css  (copy CSS from the /* CSS */ section at bottom)
- src/main.jsx (default from Vite / CRA entry)
*/

import React, {useState} from 'react';

const NavLink = ({label, active, onClick}) => (
  <button className={`nav-link ${active ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

function Header({onNavigate, current}){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">MonSite</h1>
        <nav className="main-nav">
          <NavLink label="Accueil" active={current==='home'} onClick={()=>onNavigate('home')} />
          <NavLink label="Présentation" active={current==='presentation'} onClick={()=>onNavigate('presentation')} />
          <NavLink label="Découvrir" active={current==='decouvrir'} onClick={()=>onNavigate('decouvrir')} />
          <NavLink label="Actualités" active={current==='actualites'} onClick={()=>onNavigate('actualites')} />
          <NavLink label="Nous contacter" active={current==='contact'} onClick={()=>onNavigate('contact')} />
        </nav>
        <button className="burger" onClick={()=>document.body.classList.toggle('nav-open')}>☰</button>
      </div>
    </header>
  );
}

function Home(){
  return (
    <section className="page container">
      <h2>Bienvenue sur le site</h2>
      <p>Présentation rapide — mettez ici un message d'accueil, un bandeau avec images ou un slider.</p>
      <div className="cards">
        <article className="card">
          <h3>Présentation</h3>
          <p>Histoire, L'équipe, coordonnées...</p>
        </article>
        <article className="card">
          <h3>Découvrir</h3>
          <p>Documentation, Localisation...</p>
        </article>
        <article className="card">
          <h3>Actualités</h3>
          <p>Les dernières nouvelles et événements.</p>
        </article>
      </div>
    </section>
  );
}

function Presentation(){
  const [sub, setSub] = useState('histoire');
  return (
    <section className="page container">
      <h2>Présentation</h2>
      <div className="subnav">
        <button className={`pill ${sub==='histoire'?'on':''}`} onClick={()=>setSub('histoire')}>Histoire</button>
        <button className={`pill ${sub==='equipe'?'on':''}`} onClick={()=>setSub('equipe')}>L'équipe</button>
        <button className={`pill ${sub==='coord'?'on':''}`} onClick={()=>setSub('coord')}>Coordonnées</button>
      </div>

      {sub==='histoire' && (
        <article>
          <h3>Histoire</h3>
          <p>Ici vous pouvez décrire l'histoire de l'établissement.</p>
        </article>
      )}
      {sub==='equipe' && (
        <article>
          <h3>L'équipe</h3>
          <p>Liste des membres et leurs rôles.</p>
        </article>
      )}
      {sub==='coord' && (
        <article>
          <h3>Coordonnées</h3>
          <p>Adresse postale, téléphone, fax, e‑mail, personne à contacter.</p>
        </article>
      )}
    </section>
  );
}

function Decouvrir(){
  const [sub, setSub] = useState('doc');
  return (
    <section className="page container">
      <h2>Découvrir</h2>
      <div className="subnav">
        <button className={`pill ${sub==='doc'?'on':''}`} onClick={()=>setSub('doc')}>Documentation</button>
        <button className={`pill ${sub==='loc'?'on':''}`} onClick={()=>setSub('loc')}>Localisation</button>
      </div>

      {sub==='doc' && (
        <article>
          <h3>Documentation</h3>
          <p>Liens et documents (PDF, Word) à télécharger.</p>
          <ul>
            <li><a href="#">Brochure (PDF)</a></li>
            <li><a href="#">Guide de l'utilisateur</a></li>
          </ul>
        </article>
      )}

      {sub==='loc' && (
        <article>
          <h3>Localisation</h3>
          <p>Carte interactive (intégrer Google Maps ou Leaflet dans la version finale).</p>
        </article>
      )}
    </section>
  );
}

function Actualites(){
  // sample static news list; later replace with API calls
  const news = [
    {id:1, title:'Nouvel événement', date:'2025-11-01', body:'Description courte de l\'événement.'},
    {id:2, title:'Mise à jour', date:'2025-10-20', body:'Nouvelles fonctionnalités ajoutées.'}
  ];
  return (
    <section className="page container">
      <h2>Actualités</h2>
      <ul className="news-list">
        {news.map(n=> (
          <li key={n.id} className="news-item">
            <h4>{n.title} <small>{n.date}</small></h4>
            <p>{n.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [sent, setSent] = useState(false);
  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    // Here you would send data to your backend (fetch POST)
    console.log('Envoi du message', form);
    setSent(true);
    setForm({name:'', email:'', message:''});
  }
  return (
    <section className="page container">
      <h2>Nous contacter</h2>
      {sent && <div className="notice">Merci, votre message a été envoyé.</div>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nom
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Message
          <textarea name="message" value={form.message} onChange={handleChange} rows={6} required />
        </label>
        <button type="submit" className="btn">Envoyer</button>
      </form>

      <div className="contact-details">
        <h4>Coordonnées</h4>
        <p>Adresse: 123 Rue Exemple<br/>Téléphone: +212 6 00 00 00 00<br/>Email: contact@monsite.test</p>
      </div>
    </section>
  );
}

export default function App(){
  const [page, setPage] = useState('home');
  return (
    <div className="app-root">
      <Header onNavigate={setPage} current={page} />
      <main>
        {page==='home' && <Home />}
        {page==='presentation' && <Presentation />}
        {page==='decouvrir' && <Decouvrir />}
        {page==='actualites' && <Actualites />}
        {page==='contact' && <Contact />}
      </main>
      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} MonSite — Tous droits réservés.</div>
      </footer>
    </div>
  );
}

/* CSS - copy this into src/index.css or import into your project */

/*
container { max-width, padding }
*/

/* ---------- copy below into src/index.css ---------- */

:root{
  --bg:#f8f9fb; --card:#fff; --accent:#0b74de; --muted:#6b7280;
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family:Inter,system-ui,Arial,"Helvetica Neue",sans-serif;background:var(--bg);color:#111}
.container{max-width:1100px;margin:0 auto;padding:20px}
.site-header{background:#fff;border-bottom:1px solid #e6e6e6;position:sticky;top:0;z-index:50}
.header-inner{display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.2rem;margin:0}
.main-nav{display:flex;gap:8px}
.nav-link{background:transparent;border:0;padding:10px 12px;border-radius:6px;cursor:pointer}
.nav-link:hover{background:#f1f5f9}
.nav-link.active{background:var(--accent);color:#fff}
.burger{display:none;background:transparent;border:0;font-size:20px}

.page{padding:28px 0}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
.card{background:var(--card);padding:16px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.04)}
.subnav{display:flex;gap:8px;margin:12px 0}
.pill{border:1px solid #e5e7eb;background:#fff;padding:8px 12px;border-radius:999px;cursor:pointer}
.pill.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.news-list{list-style:none;padding:0;margin:0}
.news-item{background:var(--card);padding:14px;margin-bottom:10px;border-radius:8px}
.contact-form{display:grid;gap:10px;max-width:640px}
.contact-form label{display:block}
.contact-form input,.contact-form textarea{width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px}
.btn{background:var(--accent);color:#fff;border:0;padding:10px 16px;border-radius:8px;cursor:pointer}
.notice{background:#e6fffa;border-left:4px solid #06b6d4;padding:10px;margin-bottom:12px}
.site-footer{background:#fff;border-top:1px solid #e6e6e6;padding:14px;margin-top:40px}
.contact-details{margin-top:20px;background:var(--card);padding:12px;border-radius:8px}

/* responsive */
@media (max-width:800px){
  .main-nav{display:none}
  .burger{display:block}
  body.nav-open .main-nav{display:flex;flex-direction:column;position:absolute;left:0;right:0;top:60px;background:#fff;padding:12px;box-shadow:0 6px 20px rgba(0,0,0,0.08)}
}

/* ---------- end CSS ---------- */

import React,{useState} from 'react';
import {translations} from './data/translations.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App(){const [lang,setLang]=useState('de');const [menuOpen,setMenuOpen]=useState(false);const t=translations[lang];const goContact=()=>{setMenuOpen(false);document.getElementById('kontakt')?.scrollIntoView({behavior:'smooth'});};return <div className="site" id="home"><Header t={t} lang={lang} setLang={setLang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goContact={goContact}/><main><Hero t={t} goContact={goContact}/><Services t={t}/><About t={t}/><Projects t={t}/><Contact t={t}/></main><Footer t={t}/></div>;}

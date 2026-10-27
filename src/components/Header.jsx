import React from 'react';
import { Mail, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { languageOptions } from '../data/translations.jsx';
const anchors = ['#home','#ueber-uns','#leistungen','#projekte','#kontakt'];
export default function Header({ t, lang, setLang, menuOpen, setMenuOpen, goContact }) {
 return <header className="header"><div className="header-inner"><Logo /><button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <X/> : <Menu/>}</button><nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">{t.nav.map((item,i)=><a key={item} href={anchors[i]} onClick={()=>setMenuOpen(false)}>{item}</a>)}</nav><button className="button button-gold header-cta" onClick={goContact}><Mail size={15}/>{t.contact}</button>  <label className="language"><select value={lang} onChange={e=>setLang(e.target.value)} aria-label="Choose language">{languageOptions.map(x=><option key={x.code} value={x.code}>{x.label}</option>)}</select></label> <span className="swiss-flag">✚</span> </div></header>;
}

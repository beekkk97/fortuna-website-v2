import React from 'react';
import { Facebook,Instagram,Linkedin } from 'lucide-react';
import Logo from './Logo.jsx';
const anchors=['#home','#ueber-uns','#leistungen','#projekte','#kontakt'];
export default function Footer({t}) { return <footer className="footer"><div className="footer-main wrap"><Logo light/><nav aria-label="Footer navigation">{t.nav.map((x,i)=><a key={x} href={anchors[i]}>{x}</a>)}</nav><div className="socials"><a href="#kontakt" aria-label="Facebook"><Facebook/></a><a href="#kontakt" aria-label="Instagram"><Instagram/></a><a href="#kontakt" aria-label="LinkedIn"><Linkedin/></a></div><span className="country"><span className="swiss-flag">✚</span> {t.country}</span></div><div className="footer-bottom wrap"><span>© {new Date().getFullYear()} FORTUNA GmbH. {t.footer}</span><div><a href="#kontakt">{t.imprint}</a><a href="#kontakt">{t.privacy}</a></div></div></footer>; }

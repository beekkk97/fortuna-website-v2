import React from 'react';
import { ShieldCheck, Star, Leaf, ArrowRight } from 'lucide-react';
import { images } from '../data/images.js';
const icons=[ShieldCheck,Star,Leaf];
export default function About({t}) { return <section className="about wrap" id="ueber-uns"><div className="about-photo"><img src={images.painter} alt="Professionelle Malerarbeiten" loading="lazy"/></div><div className="about-copy"><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><a className="text-link" href="#kontakt">{t.more}<ArrowRight size={15}/></a></div><div className="values">{t.values.map(([title,text],i)=>{const Icon=icons[i];return <div className="value" key={title}><Icon/><div><h4>{title}</h4><p>{text}</p></div></div>;})}</div></section>; }

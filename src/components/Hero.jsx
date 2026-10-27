import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/images.js';
export default function Hero({t,goContact}) { return <section className="hero" style={{'--hero-image':`url("${images.hero}")`}}><div className="hero-overlay"/><div className="hero-content wrap"><p className="eyebrow">{t.eyebrow}</p><h1>{t.headline}</h1><p className="hero-sub">{t.subhead}</p><button className="button button-gold" onClick={goContact}>{t.cta}<ArrowRight size={17}/></button></div><div className="hero-note">{t.heroNote}</div></section>; }

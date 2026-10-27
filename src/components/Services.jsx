import React from 'react';
import { PaintRoller, BrickWall, Building2, Sparkles, HardHat } from 'lucide-react';
const icons=[PaintRoller,BrickWall,Building2,Sparkles,HardHat];
export default function Services({t}) { return <section className="services wrap" id="leistungen" aria-label={t.services}>{t.serviceItems.map(([title,text],i)=>{const Icon=icons[i];return <article className="service" key={title}><Icon className="service-icon" strokeWidth={1.65}/><h3>{title}</h3><p>{text}</p></article>;})}</section>; }

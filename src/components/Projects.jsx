import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/images.js';
const photos=[images.facade,images.interior,images.construction,images.roller];
export default function Projects({t}) { return <section className="projects-section" id="projekte"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">{t.projectLabel}</p><h2>{t.projectTitle}</h2></div><a className="text-link" href="#kontakt">{t.allProjects}<ArrowRight size={15}/></a></div><div className="project-grid">{t.projects.map(([title,place],i)=><article className="project" key={title}><img src={photos[i]} alt={title} loading="lazy"/><h3>{title}</h3><p>{place}</p></article>)}</div></div></section>; }

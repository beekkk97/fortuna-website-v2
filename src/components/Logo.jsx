import React from 'react';
export default function Logo({ light = false }) {
 return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="FORTUNA GmbH home"><svg className="brand-mark" viewBox="0 0 54 48" role="img" aria-label="Fortuna logo"><path d="M5 25 L27 5 L49 25 L49 43 L34 43 L34 28 L27 22 L20 28 L20 43 L5 43 Z" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M14 43 L14 29 L27 17 L40 29 L40 43" fill="none" stroke="#b99a5a" strokeWidth="4"/></svg><span className="brand-text"><strong>FORTUNA <small>GmbH</small></strong><em>MALEREI&nbsp; | &nbsp;BAU MANAGEMENT</em></span></a>;
}

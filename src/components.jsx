import React, { useEffect, useRef, useState } from 'react';

export function Brand({home='#home'}) { return <a className="brand" href={home} aria-label="Go to home"><span>AY</span><strong>Ayon.</strong></a>; }

export function Header({detail=false}) {
  const [open,setOpen]=useState(false); const [active,setActive]=useState('home');
  useEffect(()=>{ if(detail)return; const onScroll=()=>{const current=[...document.querySelectorAll('main section[id]')].filter(s=>scrollY>=s.offsetTop-160).at(-1); if(current)setActive(current.id)}; onScroll(); addEventListener('scroll',onScroll,{passive:true}); return()=>removeEventListener('scroll',onScroll)},[detail]);
  useEffect(()=>{document.body.classList.toggle('menu-open',open); return()=>document.body.classList.remove('menu-open')},[open]);
  if(detail)return <header className="site-header"><nav className="navbar container"><Brand home="index.html"/><a className="button button-small button-ghost" href="index.html#projects">← All projects</a></nav></header>;
  const links=['home','about','skills','education','experience','projects','contact'];
  return <header className="site-header" id="top"><nav className="navbar container" aria-label="Main navigation"><Brand/><button className={`menu-button ${open?'open':''}`} type="button" aria-label="Open navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button><div className={`nav-links ${open?'open':''}`}>{links.map(link=><a key={link} className={active===link?'active':''} href={`#${link}`} onClick={()=>setOpen(false)}>{link[0].toUpperCase()+link.slice(1)}</a>)}</div><a className="button button-small nav-cta" href="#contact">Let's talk</a></nav></header>;
}

export function Footer({detail=false}) { return <footer><div className="container footer-inner"><Brand home={detail?'index.html':'#top'}/><p>{detail?'Case study · Built from scratch':'Designed with purpose. Built from scratch.'}</p><p>© {new Date().getFullYear()} Ayon</p></div></footer>; }

export function Reveal({children,className='',as:Tag='div',...props}) { const [visible,setVisible]=useState(false); const nodeRef=useRef(null); useEffect(()=>{const node=nodeRef.current;if(!node)return;if(!('IntersectionObserver' in window)){setVisible(true);return}const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect()}},{threshold:.12});observer.observe(node);return()=>observer.disconnect()},[]); return <Tag ref={nodeRef} className={`${className} reveal ${visible?'visible':''}`} {...props}>{children}</Tag>; }

export function ProjectVisual({project,index,linked=false}) { const content=<>{project.image?<img src={project.image} alt={`${project.name} project preview`}/>:<div className="visual-window" aria-hidden="true"><i/><i/><i/><b/><em/></div>}{index!==undefined&&<span>0{index+1}</span>}</>; return linked?<a className={`project-image project-visual ${project.visual}`} href={`project.html?id=${project.id}`} aria-label={`View ${project.name}`}>{content}</a>:<div className={`detail-image project-visual ${project.visual}`}>{content}</div>; }

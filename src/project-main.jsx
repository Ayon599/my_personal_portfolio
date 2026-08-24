import React,{useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import '../styles.css';
import {projects} from './data';
import {Footer,Header,ProjectVisual} from './components';

function ProjectPage(){const id=new URLSearchParams(location.search).get('id');const project=projects.find(p=>p.id===id)||projects[0];useEffect(()=>{document.title=`${project.name} | Ayon`},[project]);return <><Header detail/><main><section className="detail-hero"><div className="container"><p className="eyebrow">Project case study</p><h1>{project.name}</h1><p>{project.category}</p></div></section><section className="section"><div className="container detail-grid"><ProjectVisual project={project}/><aside className="detail-meta"><p className="eyebrow">Technology stack</p><div className="skill-tags">{project.stack.map(item=><span key={item}>{item}</span>)}</div><div className="detail-actions"><a className="button" href={project.live} target="_blank" rel="noreferrer">View live project ↗</a><a className="button button-ghost" href={project.github} target="_blank" rel="noreferrer">Client GitHub ↗</a></div></aside></div><div className="container case-grid"><article><span>01</span><h2>Overview</h2><p>{project.description}</p></article><article><span>02</span><h2>Development challenge</h2><p>{project.challenge}</p></article><article><span>03</span><h2>Future improvements</h2><p>{project.improvement}</p></article></div></section></main><Footer detail/></>}
createRoot(document.getElementById('root')).render(<React.StrictMode><ProjectPage/></React.StrictMode>);

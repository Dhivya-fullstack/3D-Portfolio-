import React from 'react'
import { projects } from '../constants';  
import { arrow } from '../assets/icons';
import {Link} from "react-router-dom";
import CTA from "../components/CTA";

const Projects = () => {
  return <section className ="max-container">
    <h1 className='head-text'>
      My{""}
      <span className="blue-gradient_text drop-shadow font-semibold">
        Projects
      </span>
    </h1>
    <p>
      I've embarked on numerous projects throughtout the years, but these are the
      ones I hold closest to my heart.
    </p> 
<div className='flex flex-wrap my-20 gap-16'>
  {
    projects.map((project,index)=>
    {
      return(
        <div className='lg:w-[400px] w-full' key={index}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded xl ${project.theme}`}/>
             <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={project.iconUrl} 
              alt="project"
              className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
           <div className='mt-5 flex flex-col'>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div>         
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="blue-gradient_text drop-shadow "
    >Live Link</a>
<img src = {arrow}
alt="arrow"
className='w-4 h-4 object-contain'/>
              </div>
            </div>
        </div>
         )})
  }
</div>
<hr className='border-slate-200'/>
<CTA/>
  </section>
}
export default Projects;
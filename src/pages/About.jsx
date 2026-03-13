import React from 'react'
import CTA from '../components/CTA';
import { experiences, skills} from '../constants';

import {VerticalTimeline,
        VerticalTimelineElement} 
        from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


const About = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">
      Hello, I'm {""}
      <span className='blue-gradient_text font-semibold drop-shadow'>
        {""}
        Dhivya
      </span>
      {""}👋
    </h1>

    <div className="mt-5 text-gray-500">
      <p>Software Engineer based on Singapore, specializing in technical 
      education through hands on learning.
    </p>
    </div>

    <div className='py-10 flex flex-col' > 
       <h3 className='subhead-text'>My Skills</h3>

       <div className="mt-16 flex flex-wrap gap-12">
       {skills.map((skills,index)=>{
        return (
           <div className="block-container w-20 h-20" key={index}>
            <div className='btn-back rounded-xl' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={skills.imageUrl}
                alt={skills.name}
                className='w-1/2 h-1/2 object-contain' 
                />
            </div>
            </div>
        )
      })}
            <div className='py-16'>
              <h3 className='subhead-text'>My Experience</h3>
              <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                  Backend Software Engineer with 2+ years of corporate experience in Application programming and medical technology development, currently
                  upskilling in Full Stack Web Development with AI at the NUS School of Computing.
               
                </p>
              </div >
              <div className="mt-12 flex">
<VerticalTimeline>
  {experiences.map((experience,index)=>{
    return(
      <VerticalTimelineElement 
      key={index}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company}
          className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      contentStyle={{
        borderBottom: "8px",
        borderStyle: "solid",
        borderBottomColor:experience.iconBg,
        boxShadow: "none",
      }}
      
      >
        <div>
          <h3 className='text-balck text-xl font-poppins font-semibold'>
            {experience.title}</h3>
          <p className='text-black-500 font-medium text-base'
          style={{margin:0}}
          >
            {experience.company}</p>
          </div>
          <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point,index)=>{
              return<li key={index} className='text-black-500/50 font-normal pl-l text-sm'>{point}</li>;
            })}
          </ul>

      </VerticalTimelineElement>
  )
  })}
</VerticalTimeline>
            </div>
            </div>
       </div>   
    </div>
    <hr className='border-slate-200'/>
    
    <CTA/>
    </section>
)
}

export default About;
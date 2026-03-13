import { css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb, 
    nextjs,
    nodejs,
    react,
    tailwindcss,
    linkedin,
    contact,
    pricewise,
    estate,
    } from "../assets/icons";
   

    export const skills = [
        {
            
            name: "HTML",   
            imageUrl: html,
            type: "frontend",
        },
        {
            
            name: "CSS",
            imageUrl: tailwindcss,
            type: "frontend",
        },
        {
            name: "JavaScript",
            imageUrl: javascript,
            type: "frontend",
        },
        {
            name: "React",
            imageUrl: react,
            type: "frontend",

        },
        {
            name: "Node.js",
            imageUrl: nodejs,
            type: "backend",
        },
        {
            name: "MongoDB",
            imageUrl: mongodb,
            type: "backend",
        },
        {
            name: "Express",
            imageUrl: express,
            type: "backend",
        },
        {
            name: "Git",
            imageUrl: git,
            type: "tools",
        },
        {
            name: "GitHub",
            imageUrl: github,   
            type: "tools",
        },
        {
            name: "LinkedIn",
            imageUrl: linkedin,
            type: "social",
        }
    ];

    export const experiences  = [
        {
            title : "Full Stack Developer with AI - Trainee",
            company : "NUS School of Computing for Executive",
            date: "Sept 2025 to Present",
            icon: react,
            iconBg:" #c6cbf7",
    
            points:["Current Focus: Developing modern web applications using the MERN stack (React.js,Node.js, Express.js).",
                "Data Management: Implementing structured and unstructured data solutions using MySQLand MongoDB.",
                "Version Control: Developing advanced proficiency in Git for collaborative software development."
               ],
        },


          {
            title : "Externship Program, ServiceNow",
            company: "ServiceNow",
            date: "Sept 2023 to Jan 2024",
            icon: react ,
            iconBg:" #f1d3c1",
    
            points:["ServiceNow Administration: Completed the NextGen Program track, gaining mastery in configuring and customizing enterprise-grade ServiceNow instances.",
                    "ITSM Optimization: Streamlined business processes to reduce technology debt through automated service delivery.",
                    "Certifications: Earned ServiceNow Micro-Certifications in Flow Designer and Performance Analytics."
               ],
        },

         {
            title : "Software Developer",
            company : " DHL Technologies, Singapore",
            date: "Feb 2017 to May 2017",
            icon: git,
            iconBg:" #c5f5e3",
    
            points:["Requirement Engineering: Led the gathering and definition of complex customer requirements for the DHL POM (Project Operations Management)system.",
                    "System Design: Collaborated with stakeholders to architect new systems tailored to enhance operational efficiency.",
                    "Field Validation: Conducted rigorous software field testing to verify in-situ performance and reliability in live logistical environments.",
            ],
        },

       {
            title : "Software Developer",
            company : " Wipro Technologies",
            date: "Oct 2014 to Oct 2016",
            icon: css,
            iconBg:" #bee0f7",
    
            points:[" Project - Draeger ICS: Built a central monitoring workstation using Java framework, aggregating real- time data for 32 Infinity patient monitors acros a high-speed network",
                    "Project - Radiometer AQT 90 FLEX: Developed for an immunoassay analyser featuring a customized Windows/Linux OS and touch-screen integration.",
                    "Performance Optimization: Modernized and modularized legacy Java codebases, significantly improving system performance and maintainability.",
                    "Requirement Engineering: Acted as a technical bridge, translating complex business requirements into clear technical specifications and project roadmaps."               
       ],
},

    ];

    export const socialLinks = [
       {
        name:"Contact",
        iconUrl:contact,
        link:"/contact",
       },
       {
        name:"Github",
        iconUrl: github,
        link:"/https://github.com/Dhivya-fullstack",
       },
        {
        name:"LinkedIn",
        iconUrl: linkedin,
        link:"/https://www.linkedin.com/in/dhivyajayakumar",
       },
       
    ]

    export const projects=[
        {
            iconUrl:pricewise,
            theme:"btn-back-blue",
            name:"TaskTracker",
            description:"Developed a Task tracker app to track our daily chores",
            link:"https://github.com/Dhivya-fullstack/task-tracker",
        },
         {
            iconUrl:estate,
            theme:"btn-back-red",
            name:"Tinder clone app",
            description:"Developed a Task tracker app to track our daily chores",
            link:"https://github.com/Dhivya-fullstack/task-tracker",
        },
          {
            iconUrl:estate,
            theme:"btn-back-red",
            name:"Tinder clone app",
            description:"Developed a Task tracker app to track our daily chores",
            link:"https://github.com/Dhivya-fullstack/task-tracker",
        },
          {
            iconUrl:estate,
            theme:"btn-back-red",
            name:"Tinder clone app",
            description:"Developed a Task tracker app to track our daily chores",
            link:"https://github.com/Dhivya-fullstack/task-tracker",
        }
]
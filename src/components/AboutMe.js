import React from "react";
import Typography from '@mui/material/Typography';

const AboutMe = () => {
  return (
    <section className="about_me_container">
      <Typography 
      id = "About"
     variant="h3" 
     component="div" 
     gutterBottom
     sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
     >
      ABOUT ME
    </Typography> 
    <div className="about_me_text">
    <p> 
      I am full-stack developer who learned how to code at Microverse, a remote software development school 
      that uses pair-programming and real-world projects to teach JavaScript, React, Redux and Rails.
    </p>

    <p>
      I began my career in a financial institution, where I witnessed the deployment of a core banking application, 
      which led to my interest in software development. I am passionate about becoming a full-stack software developer. 
      I enrolled in Microverse, where I have spent several months building projects like awesome-book and To-Do-list,
      hotel reservation app, budget app, crypto tracker using ES6 JavaScript syntax, React, Redux, and Ruby on Rails,
      performing both Test-Driven-Development using Jest and Behaviour Driven Test using RSpec, and following proper Gitflow. 
    </p>

    <p>
      My project management and ITIL certifications have also taught me to follow a project from client description to deployment. 
      I know how to work to tight deadlines because of my experience in financial institutions and the weekly capstone projects 
      we submit at Microverse. I have also been using Zoom nearly daily for the last six months as I pair-program and collaborate 
      with other software developers in different time zones.
    </p>

    </div>
      
      <a href="https://drive.google.com/file/d/1G1GomlMzeTpSMCJlYw0IpLIA_GTzlxYP/view?usp=sharing" alt="Resume" target= "_blank" rel="noreferrer">
         <button className="resume_btn btn btn-primary">Get my resume</button>
      </a>
    <article className="skills-col" style={{marginTop: "2rem"}}>
      <h4 className="skills_heading">My Skills</h4>
      <div className="skills_card">
        <h6>Front End</h6>
        <p className="skill_group" style={{fontSize: "12px"}}>
          <span>JavaScript(ES6)</span>|
          <span>React</span>|
          <span>Redux</span>|
          <span>HTML</span>|
          <span>CSS</span>
        </p> 
      </div>

      <div className="skills_card">
        <h6>Backend</h6>
        <p className="skill_group" style={{fontSize: "12px"}}>
          <span>Ruby</span>|
          <span>Rails</span>|
          <span>Postgres</span>
        </p> 
      </div>
      <div className="skills_card">
        <h6>Tools and Methods</h6>
        <p className="skill_group" style={{fontSize: "12px"}}>
          <span>Git</span>|
          <span>GitHub</span>|
          <span>Heroku</span>|
          <span>Netlify</span>|
          <span>RSpec</span>|
          <span>Chrome Dev Tool</span>|
          <span>Jest</span>
        </p> 
      </div>

      <div className="skills_card">
        <h6>Professional</h6>
        <p className="skill_group" style={{fontSize: "12px"}}>
          <span>Remote coding</span>|
          <span>Pair-Programming</span>|
          <span>Mentoring</span>
        </p>
      </div>

      <div className="skills_card">
        <h6>Certification</h6>
        <p className="skill_group" style={{fontSize: "12px"}}>
          <span>PRINCE2 Practitioner</span>|
          <span>ITIL Practitioner</span>
        </p>
      </div>
    </article> 
    </section>
  )

}

export default AboutMe;
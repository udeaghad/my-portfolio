import React from 'react';
import Typography from '@mui/material/Typography';

const AboutMe = () => (
  <section className="about_me_container" style={{ padding: '0 10%' }}>
    <div className="about-me-text">
      <Typography
        id="About"
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
      >
        ABOUT ME
      </Typography>
      <div className="about_me_text">
        <p>
          As a skilled Full Stack Developer with experience in building scalable, secured,
          and high-performing applications, I am passionate about creating innovative and
          efficient solutions to complex problems. With a background in Banking and Finance
          and an MBA, I bring a unique perspective to my work that is grounded in business
          strategy and customer needs.
        </p>

        <p>
          I have experience collaborating remotely with cross-functional teams of developers
          and contributing to code bases, as well as refactoring legacy code to improve
          maintainability and efficiency. I have also worked on personal projects, including
          a delivery app and a budget app, using technologies such as JavaScript, TypeScript,
          Node.js, Express.js, React, Redux, PostgreSQL, and MongoDB.
        </p>

        <p>
          As a Service Manager at Sterling Bank Plc, I gained experience in first-level support
          maintenance and streamlined processes that led to a significant increase in
          account openings. I have brought along with me these experiences in my software development 
          journey. With a Full Stack Web Development Program and 1300+ hours of experience
          mastering algorithms and data structures, I have honed my skills in remote pair
          programming, code reviews, and communication and collaboration with international remote
          developers. My project management and ITIL certifications have also taught me to follow a
          project from client description to deployment.
        </p>

        <p>
          I am eager to continue growing as a developer and working on challenging projects that
          make a positive impact.
        </p>

      </div>

      <a href="https://drive.google.com/file/d/1-DAmrBi1YFwwP9V5JSnRvJl9Z0-eWcmX/view?usp=sharing" alt="Resume" target="_blank" rel="noreferrer">
        <button type="button" className="resume_btn btn btn-primary" style={{ borderRadius: 'unset' }}>Get my resume</button>
      </a>
    </div>
    <article className="skills-col" style={{ marginTop: '2rem' }}>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
      >
        My Skills
      </Typography>
      <div className="skills_card">
        <h6>Front End</h6>
        <p className="skill_group">
          <span>JavaScript(ES6)</span>
          |
          <span>TypeScript</span>
          |
          <span>React</span>
          |
          <span>Redux</span>
          |
          <span>HTML</span>
          |
          <span>CSS</span>
        </p>
      </div>

      <div className="skills_card">
        <h6>Backend</h6>
        <p className="skill_group">
          <span>TypeScript</span>
          |
          <span>Node</span>
          |
          <span>Express</span>
          |
          <span>Ruby</span>
          |
          <span>Rails</span>
          |
          <span>Postgres</span>
          |
          <span>MongoDB</span>
        </p>
      </div>
      <div className="skills_card">
        <h6>Tools and Methods</h6>
        <p className="skill_group">
          <span>Git</span>
          |
          <span>GitHub</span>
          |
          <span>Heroku</span>
          |
          <span>Netlify</span>
          |
          <span>RSpec</span>
          |
          <span>Chrome Dev Tool</span>
          |
          <span>Jest</span>
        </p>
      </div>

      <div className="skills_card">
        <h6>Professional</h6>
        <p className="skill_group">
          <span>Remote coding</span>
          |
          <span>Pair-Programming</span>
          |
          <span>Mentoring</span>
        </p>
      </div>

      <div className="skills_card">
        <h6>Certification</h6>
        <p className="skill_group">
          <span>PRINCE2 Practitioner</span>
          |
          <span>ITIL Practitioner</span>
        </p>
      </div>
    </article>
  </section>
);

export default AboutMe;

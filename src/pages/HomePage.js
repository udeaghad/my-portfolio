import React from "react"
import Typography from '@mui/material/Typography';
import MyProjects from "../components/MyProjects";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe"
import ResponsiveAppBar from "../components/NavBar";


const HomePage = ({projects}) => {

  return (
     <> 
     <ResponsiveAppBar /> 
     <section className="home_page">
     <Typography 
     variant="h3" 
     component="div" 
     gutterBottom
     sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
     >
      Pretty code by ingenious person
    </Typography> 

    <div >
       <p className="fs-6 fw-bold text-secondary" style={{textAlign: "justify"}}>
          I am a full stack web developer with a background in business, banking and finance. 
          Always passionate about solving problems with code and comfortable pair programming and collaborating. 
          As a lifelong learner, I am always working hard to improve my skills. Do you have a project you need coded?
          Don't hesitate to contact me.
       </p>

    </div>

    <div>
      <p className="fs-1 my-4 fw-bold">My Works in social networks</p>

      <div className="d-flex justify-content-between align-items-center ">
        <a href="https://github.com/udeaghad" alt="github" target= "_blank" rel="noreferrer" >
          <img src="/images/github-icon.png" alt="github" style={{width: "40%"}}/>
        </a>

        <a href=" https://www.linkedin.com/in/dozie-udeagha/" alt="linkedin" target= "_blank" rel="noreferrer" >
          <img src="/images/linkedin-icon.png" alt="linkedin" style={{width: "40%"}} />
        </a>

        <a href="https://twitter.com/udeaghad" alt="twitter" target= "_blank" rel="noreferrer" >
          <img src="/images/twitter-icon.png" alt="twitter" style={{width: "40%"}}/>
        </a>

        <a href="https://angel.co/u/dozie-udeagha" alt="angelist" target= "_blank" rel="noreferrer" >
          <img src="/images/angelist-icon.png" alt="angelist" style={{width: "75%"}}/>
        </a>
      </div>
      </div>
      </section>
      

  <MyProjects projects={projects}/>

  
    <AboutMe />
    
    <ContactMe />
    
            
     
      
    
    </>
  )
}

export default HomePage
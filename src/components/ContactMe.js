import React from "react"
import Typography from '@mui/material/Typography';

const ContactMe = () => {

  return (
    <section >
    <Typography 
    id = "Contact"
     variant="h3" 
     component="div" 
     gutterBottom
     sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
     >
      Let's chat
    </Typography>
    <p>
      Do you have a project we can collaborate on? I'd love to hear about it.
      Also, I"m open to discussing topics related to web development.
      Send me a message on any of my social media account or fill out the form below.      
    </p>

    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Get in touch</button>
      </form>
    </div>

    <div className="footer" style={{marginTop: "2rem"}}>
      <p className="email" style={{textAlign: "center"}}>
        <a href="mailto:dozie.udeagha@gmail.com" >
          dozie.udeagha@gmail.com
        </a>
      </p>
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
         <p style={{textAlign: "center", marginTop:"1rem", fontSize:"10px"}}>© 2022 Dozie Udeagha</p>

    </div>
    </section>
    
  )
}

export default ContactMe;
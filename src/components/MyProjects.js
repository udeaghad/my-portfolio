import React from "react";
import "./MyProject.css";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const MyProjects = ({projects}) => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
    
  }
  
  return (
    <section className="project-card">
      <Typography 
      id = "Portfolio"
     variant="h3" 
     component="div" 
     gutterBottom
     sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
     >
      MY PROJECTS
    </Typography> 

      <div className="project_card_container">
        {projects.map((project) => (
          <div className="card_item" key={project.id}>

            <div className="card_img_container">
              <h2 className="card_title">{project.name}</h2>
              <img src={project.image} alt="project" style={{width: "100%"}} />
            </div>

            <div className="stack_container">
              {project.stack.map((stack) => (
                <p className="stack_name" key={stack}>
                  <span>{stack}</span>
                </p>
              ))}
            </div>
            <button onClick={() => handleClick(project.id)} className="btn-project-details btn btn-primary">
               See the project
            </button>
          </div>
  ))}
      </div>
    </section>
  );
}

export default MyProjects;
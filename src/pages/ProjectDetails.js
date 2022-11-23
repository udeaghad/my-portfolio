import React from "react";
import { useResolvedPath } from "react-router-dom";

const ProjectDetails = ({projects}) => {
  console.log(projects);
 const path = useResolvedPath();
 const id = parseInt(path.pathname.split("/")[2]);
  const project = projects.find((project) => project.id === id);
  console.log(project);
  return (
    <>
    <section className="detail_page">
      <div className="detail_container">
        <div className="detail_img_container">
          <img src={project.image} alt="project" style={{width: "100%"}} />
        </div>

        <div className="link-btn">

        <a href={project.demo} target="_blank" rel="noreferrer">
          <button className="btn btn-primary" style={{width: "100%"}}>See  Live</button>
        </a>

        <a href={project.source_code} target="_blank" rel="noreferrer">
          <button className="btn btn-primary" style={{width: "100%"}}>See Source </button>
        </a>

        </div>

        <div className="project_name">
          <h2>{project.name}</h2>
        </div>

        <div className="stack_container">
              {project.stack.map((stack) => (
                <p className="stack_name" key={stack}>
                  <span>{stack}</span>
                </p>
              ))}
        </div>

        <div className="project_description">
          <p>{project.description}</p>
        </div>






      </div>

      
    </section>
    
    </>
    
  );
}

export default ProjectDetails;
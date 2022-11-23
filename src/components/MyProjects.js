import React, {useState}from "react";
import "./MyProject.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  maxHeight: "100vh",  
};


const MyProjects = ({projects}) => {

  const [open, setOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState({})
  const handleOpen = (project_id) => {
    setOpen(true);    
    const project_details = projects.find((project) => project.id === project_id);
    setProjectDetails(project_details);
  }
  const handleClose = () => setOpen(false);
  
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
            <button onClick={() => handleOpen(project.id)} className="btn-project-details btn btn-primary" style={{borderRadius: "unset"}}>
               See the project
            </button>

            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <button onClick={handleClose} className="btn btn-primary" style={{float: "right", borderRadius: "unset"}}>X</button>
        
        <section className="detail_page">
          <div className="detail_container">
        <div className="detail_img_container" style={{margin: "2rem 0"}}>
          <img src={projectDetails.image} alt="project" style={{width: "100%"}} />
        </div>

        <div className="link-btn">

        <a href={projectDetails.demo} target="_blank" rel="noreferrer">
          <button className="btn btn-primary" 
          style={{width: "100%", borderRadius: "unset", height: "4rem", fontSize: "2rem", fontWeight: "bolder"}}
          >
            
            <span style={{marginRight: "3rem"}}>See  Live </span>
            <LaunchIcon />
          </button>
        </a>

        <a href={projectDetails.source_code} target="_blank" rel="noreferrer">
          <button className="btn btn-primary" 
          style={{width: "100%", borderRadius: "unset", height: "4rem", fontSize: "2rem", fontWeight: "bolder"}}
          >
            
            <span style={{marginRight: "3rem"}}>See Source</span>
            <GitHubIcon />
          </button>
        </a>

        </div>

        
        <Typography       
            variant="h3" 
            component="div" 
            gutterBottom
            sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 3 }}
        >

           {projectDetails.name}
        </Typography> 

        <div className="stack_container">
              {projectDetails.stack && projectDetails.stack.map((stack) => (
                <p className="stack_name" key={stack}>
                  <span>{stack}</span>
                </p>
              ))}
        </div>

        <div className="project_description">
          <p>{projectDetails.description}</p>
        </div>
      </div>
    </section>
        </Box>
      </Modal>
          </div>
  ))}
      </div>
    </section>
  );
}

export default MyProjects;
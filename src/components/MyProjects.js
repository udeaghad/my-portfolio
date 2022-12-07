import React, { useState } from 'react';
import './MyProject.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

const MyProjects = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});
  const handleOpen = (projectId) => {
    setOpen(true);
    const prjDetails = projects.find((project) => project.id === projectId);
    setProjectDetails(prjDetails);
  };
  const handleClose = () => setOpen(false);

  return (
    <section className="project-card" style={{ padding: '0 10%' }}>
      <Typography
        id="Projects"
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 10 }}
      >
        MY PROJECTS
      </Typography>

      <div className="project_card_container mobile">
        <Carousel>
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
              <div className="card_item">

                <div className="card_img_container">
                  <h2 className="card_title">{project.name}</h2>
                  <img src={project.image} alt="project" style={{ width: '100%' }} />
                </div>

                <div className="stack_container">
                  {project.stack.map((stack) => (
                    <p className="stack_name" key={stack} style={{ backgroundColor: '#2b2d42' }}>
                      <span>{stack}</span>
                    </p>
                  ))}
                </div>
                <button type="button" onClick={() => handleOpen(project.id)} className="btn-project-details btn btn-primary" style={{ borderRadius: 'unset' }}>
                  See the project
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"

                >
                  <Box className="modal-style" sx={{ bgcolor: 'background.paper', padding: '2%' }}>
                    <button type="button" onClick={handleClose} className="btn btn-primary" style={{ float: 'right', borderRadius: 'unset' }}>X</button>

                    <section className="detail_page">
                      <div className="detail_container">
                        <div className="detail_img_container" style={{ margin: '2rem 0' }}>
                          <img src={projectDetails.image} alt="project" style={{ width: '100%' }} />
                        </div>

                        <div className="link-btn">

                          <a href={projectDetails.demo} target="_blank" rel="noreferrer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{
                                width: '100%', borderRadius: 'unset', height: '4rem', fontSize: '2rem', fontWeight: 'bolder',
                              }}
                            >

                              <span style={{ marginRight: '3rem' }}>See  Live </span>
                              <LaunchIcon />
                            </button>
                          </a>

                          <a href={projectDetails.source_code} target="_blank" rel="noreferrer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{
                                width: '100%', borderRadius: 'unset', height: '4rem', fontSize: '2rem', fontWeight: 'bolder',
                              }}
                            >

                              <span style={{ marginRight: '3rem' }}>See Source</span>
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
                            <p className="stack_name" key={stack} style={{ backgroundColor: '#2b2d42' }}>
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

            </Carousel.Item>
          ))}

        </Carousel>
      </div>

      <div className="project_card_container desktop">
        {projects.map((project) => (
          <div className="card_item" key={project.id}>

            <div className="card_img_container">
              <h2 className="card_title">{project.name}</h2>
              <img src={project.image} alt="project" style={{ width: '100%' }} />
            </div>
            <div className="stack_container">
              {project.stack.map((stack) => (
                <p
                  className="stack_name"
                  key={stack}
                  style={{ backgroundColor: '#2b2d42', border: '1px solid #2b2d42', borderRadius: '3px' }}
                >
                  <span>{stack}</span>
                </p>
              ))}
            </div>

            <div className="project_description">
              <p>{project.description}</p>
            </div>
            <div className="link-btn">

              <a href={project.demo} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="detail-button"
                >
                  <span>Demo </span>
                  <LaunchIcon />
                </button>
              </a>

              <a href={project.source_code} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="detail-button"
                >

                  <span>Source</span>
                  <GitHubIcon />
                </button>
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

MyProjects.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
};

export default MyProjects;

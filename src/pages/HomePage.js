import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import MyProjects from '../components/MyProjects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import ResponsiveAppBar from '../components/NavBar';

const HomePage = ({ projects }) => {
  const desktop = useMediaQuery('(min-width:768px)');
  const mobile = useMediaQuery('(max-width:768px)');

  return (
    <>
      <ResponsiveAppBar />
      <section className="home_page" style={{ padding: '0 6%' }}>
        {mobile
     && (
     <Typography
       variant="h3"
       component="div"
       gutterBottom
       sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 2 }}
     >
       Pretty code by an ingenious person
     </Typography>
     )}

        {desktop
     && (
     <Typography
       variant="h1"
       component="div"
       gutterBottom
       sx={{
         fontFamily: 'Nerko One', fontWeight: 400, mt: 10, width: '65%',
       }}
     >
       Pretty code by an ingenious person
     </Typography>
     )}
        <div>
          <p className="intro-text">
            My name is Dozie Udeagha and am a full stack web developer with a background in
            business, banking and finance. Always passionate about solving problems with code
            and comfortable pair programming and collaborating. As a lifelong learner, I am
            always working hard to improve my skills. Do you have a project you need coded?
            Do not hesitate to contact me.
          </p>

        </div>

        <div className="social-buttons">
          <ul>
            <li>
              <a href="https://github.com/udeaghad" alt="github" target="_blank" rel="noreferrer">
                <span className="media-name">gitHub</span>
                <i className="icon fa-brands fa-github" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/dozie-udeagha/" alt="linkedin" target="_blank" rel="noreferrer">
                <span className="media-name">LinkedIn</span>
                <i className="icon fa-brands fa-linkedin" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/udeaghad" alt="twitter" target="_blank" rel="noreferrer">
                <span className="media-name">twitter</span>
                <i className="icon fa-brands fa-twitter" />
              </a>
            </li>

            <li>
              <a href="https://angel.co/u/dozie-udeagha" alt="angelist" target="_blank" rel="noreferrer">
                <span className="media-name">Angelist</span>
                <i className="icon fa-brands fa-angellist" />
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="social-media-container">
          <p className="media-title my-4 fw-bold">My Works in social networks</p>

          <div className="d-flex justify-content-between align-items-center ">
            <a href="https://github.com/udeaghad" alt="github" target="_blank" rel="noreferrer">
              <img src="/images/github-icon.png" alt="github" style={{ width: '30%' }} />
            </a>

            <a href=" https://www.linkedin.com/in/dozie-udeagha/" alt="linkedin" target="_blank" rel="noreferrer">
              <img src="/images/linkedin-icon.png" alt="linkedin" style={{ width: '30%' }} />
            </a>

            <a href="https://twitter.com/udeaghad" alt="twitter" target="_blank" rel="noreferrer">
              <img src="/images/twitter-icon.png" alt="twitter" style={{ width: '30%' }} />
            </a>

            <a href="https://angel.co/u/dozie-udeagha" alt="angelist" target="_blank" rel="noreferrer">
              <img src="/images/angelist-icon.png" alt="angelist" style={{ width: '65%' }} />
            </a>
          </div>
        </div> */}
      </section>

      <MyProjects projects={projects} />

      <AboutMe />

      <ContactMe />

    </>
  );
};

HomePage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
};

export default HomePage;

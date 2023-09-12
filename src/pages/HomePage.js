import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import MyProjects from '../components/MyProjects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import ResponsiveAppBar from '../components/NavBar';

const HomePage = ({ projects }) => {
  const mobile = useMediaQuery('(max-width:768px)');
  const desktop = useMediaQuery('(min-width:769px)');

  return (
    <>
      <ResponsiveAppBar />
      <section className="home_page" style={{ padding: '0 6%' }}>
        {mobile && (
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{ fontFamily: 'Nerko One', fontWeight: 400, mt: 2 }}
          >
            Driven by passion, curiosity and inspiration
          </Typography>
        )}

        {desktop && (
          <Typography
            variant="h2"
            component="div"
            gutterBottom
            sx={{
              fontFamily: 'Nerko One',
              fontWeight: 400,
              mt: 8,
              width: '65%',
            }}
          >
            Driven by passion, curiosity and inspiration
          </Typography>
        )}

        <div>
          <p className="intro-text">
            My name is Dozie Udeagha, and I am a Full Stack Web Developer with a
            background in business, banking, and finance. Always passionate
            about solving complex problems, comfortable with pair
            programming and collaborating. As a lifelong learner, I am working
            hard to improve my skills and provide leadership. Do you have a
            project you need to code? Do not hesitate to contact me.
          </p>
        </div>

        <div className="social-buttons">
          <ul>
            <li>
              <a
                href="https://github.com/udeaghad"
                alt="github"
                target="_blank"
                rel="noreferrer"
              >
                <span className="media-name">GitHub</span>
                <i className="icon fa-brands fa-github" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/dozie-udeagha/"
                alt="linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="media-name">LinkedIn</span>
                <i className="icon fa-brands fa-linkedin" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/udeaghad"
                alt="twitter"
                target="_blank"
                rel="noreferrer"
              >
                <span className="media-name">twitter</span>
                <i className="icon fa-brands fa-twitter" />
              </a>
            </li>

            <li>
              <a
                href="https://angel.co/u/dozie-udeagha"
                alt="angelist"
                target="_blank"
                rel="noreferrer"
              >
                <span className="media-name">Angelist</span>
                <i className="icon fa-brands fa-angellist" />
              </a>
            </li>
          </ul>
        </div>
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

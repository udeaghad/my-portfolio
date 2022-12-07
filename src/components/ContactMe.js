import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
  const [state, handleSubmit] = useForm('mwkzjpjq');
  if (state.succeeded) {
    return <p>Thanks you for contacting me! I will get back to you soon</p>;
  }

  return (
    <section className="contact-section">
      <Typography
        id="Contact"
        variant="h3"
        component="div"
        gutterBottom
        sx={{
          fontFamily: 'Nerko One', fontWeight: 400, mt: 10, color: 'whitesmoke',
        }}
      >
        Let&apos;s chat
      </Typography>
      <p className="contact-text">
        Do you have a project we can collaborate on? I&apos;d love to hear about it.
        Also, I&apos;m open to discussing topics related to web development.
        Send me a message on any of my social media account or fill out the form below.
      </p>

      <div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="name-email-field">
            <div className="mb-3 name-email-item">
              <label htmlFor="name" className="form-label">
                Name
                <input type="text" className="form-control" id="name" name="name" />
              </label>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="mb-3 name-email-item">
              <label htmlFor="email" className="form-label">
                Email address
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" />
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="text-area-field">

            <div className="mb-3 text-area-item">
              <label htmlFor="message" className="form-label">
                Message
                <textarea className="form-control" id="message" rows="3" name="message" />
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="btn btn-primary contact-button" style={{ borderRadius: 'unset' }}>Get in touch</button>
          </div>

        </form>
      </div>

      <div className="footer" style={{ marginTop: '2rem' }}>
        <div className="d-flex justify-content-around align-items-center footer-media">
          <a href="https://github.com/udeaghad" alt="github" target="_blank" rel="noreferrer">
            <img src="/images/github-icon.png" alt="github" />
          </a>

          <a href=" https://www.linkedin.com/in/dozie-udeagha/" alt="linkedin" target="_blank" rel="noreferrer">
            <img src="/images/linkedin-icon.png" alt="linkedin" />
          </a>

          <a href="https://twitter.com/udeaghad" alt="twitter" target="_blank" rel="noreferrer">
            <img src="/images/twitter-icon.png" alt="twitter" />
          </a>

          <a href="https://angel.co/u/dozie-udeagha" alt="angelist" target="_blank" rel="noreferrer">
            <img src="/images/angelist-icon.png" alt="angelist" style={{ width: '45%' }} />
          </a>
        </div>
        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '10px' }}>© 2022 Dozie Udeagha</p>

      </div>
    </section>

  );
};

export default ContactMe;

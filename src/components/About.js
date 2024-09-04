// src/pages/About.js

import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-primary">About iNotebook</h1>
      <p className="lead">
        Welcome to <span className="fw-bold">iNotebook</span>! iNotebook is a simple and efficient tool designed to help you keep track of your notes, ideas, and tasks. Our mission is to provide a user-friendly platform where you can organize your thoughts and manage your projects with ease.
      </p>
      <div className="feature-section bg-light p-4 rounded shadow-sm">
        <h2 className="mt-5 text-success">Features</h2>
        <ul className="list-unstyled">
          <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Secure note storage</li>
          <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Easy-to-use interface</li>
          <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Tagging and categorization</li>
          <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Responsive design for all devices</li>
          <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Search functionality</li>
        </ul>
      </div>
      <div className="team-section bg-light p-4 rounded shadow-sm mt-5">
        <h2 className="mt-5 text-info">Our Team</h2>
        <p>
          Our dedicated team of developers and designers is passionate about creating tools that enhance productivity and organization. We continuously strive to improve iNotebook and add new features based on user feedback.
        </p>
      </div>
      <div className="contact-section bg-light p-4 rounded shadow-sm mt-5">
        <h2 className="mt-5 text-warning">Contact Us</h2>
        <p>
          Have any questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:Support@gmail.com">Support@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;

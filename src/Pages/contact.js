import React from "react";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {

  const contactDetails = [
    {
      icon: <FaGithub />,
      type: "GitHub",
      value: "kshama-github",
      link: "https://github.com/kshama1708",
    },
    {
      icon: <FaLinkedin />,
      type: "LinkedIn",
      value: "kshama-linkedin",
      link: "https://linkedin.com/",
    },
    {
      icon: <FaEnvelope />,
      type: "Email",
      value: "kshamas0817@gmail.com",
      link: "mailto:kshamas0817@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      type: "Location",
      value: "Karnataka, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>

          <p className="contact-subtitle">
            Feel free to reach out for collaborations, projects,
            or just a friendly conversation.
          </p>
        </div>

        {/* Main Layout */}
        <div className="contact-content">

          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <form
              action="https://formsubmit.co/kshamas0817@gmail.com"
              method="POST"
              className="contact-form"
            >

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-grid">

            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >

                <div className="contact-icon">
                  {item.icon}
                </div>

                <div className="contact-details">
                  <h3>{item.type}</h3>
                  <p>{item.value}</p>
                </div>

              </a>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
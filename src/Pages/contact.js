import React from "react";
import "./Contact.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      type: "Email",
      value: "kshama.fakeemail@example.com",
      link: "mailto:kshama.fakeemail@example.com",
    },
    {
      icon: <FaPhone />,
      type: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <FaInstagram />,
      type: "Instagram",
      value: "@kshama_insta",
      link: "https://instagram.com/",
    },
    {
      icon: <FaGithub />,
      type: "GitHub",
      value: "kshama-github",
      link: "https://github.com/",
    },
    {
      icon: <FaLinkedin />,
      type: "LinkedIn",
      value: "kshama-linkedin",
      link: "https://linkedin.com/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out via any of the platforms below. I’d love to connect!
        </p>

        <div className="contact-grid">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <h3>{item.type}</h3>
                <p>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

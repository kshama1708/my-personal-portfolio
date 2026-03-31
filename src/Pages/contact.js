import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out via any of the platforms below. I’d love to connect!
        </p>

<form
action="https://formsubmit.co/kshamas0817@gmail.com"
method="POST"
className="contact-form">
  <input
  type="text"
  name="name"
  placeholder="Your Name"
  required />
<input
  type="email"
  name="email"
  placeholder="Your Email"
  required />

  <textarea
  name="message"
  placeholder="Your Message"
  rows="6"
  required></textarea>
  <button type="submit" className="btn">Send Message</button>

</form>

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

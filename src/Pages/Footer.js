import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Kshama Salian. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
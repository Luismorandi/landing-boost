import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © 2024 <span id="boost-rights">boost</span>
        <span id="dot-rights">;</span> - Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

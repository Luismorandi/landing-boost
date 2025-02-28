import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const logo =
  "https://cdn.prod.website-files.com/662f1c7a7ad34af693f624d2/662f1c7a7ad34af693f62515_boost%3B%20(1).png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Abre/cierra el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú (al hacer clic en overlay, links o botón)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO a la izquierda */}
      <div className="navbar__logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Enlaces (solo desktop) */}
      <ul className="navbar__links">
        <li>
          <a href="#features">About Us</a>
        </li>
        <li>
          <a href="#how">How It Works</a>
        </li>
        <li>
          <a href="#cta">Our Pricing</a>
        </li>
      </ul>

      {/* Botón (solo desktop) */}
      <div className="navbar__contact">
        <button className="navbar__button">Contact Us</button>
      </div>

      {/* Ícono hamburguesa (solo mobile) */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Overlay semi-transparente (solo si isOpen === true) */}
      {isOpen && <div className="navbar__overlay" onClick={closeMenu}></div>}

      {/* Menú móvil (side drawer) */}
      <div className={`navbar__mobileMenu ${isOpen ? "active" : ""}`}>
        <ul className="mobileMenu__links">
          <li>
            <a href="#section1" onClick={closeMenu}>
              Culture{" "}
              <FontAwesomeIcon icon={faUsers} style={{ color: "#000" }} />
            </a>
          </li>
          <li>
            <a href="#section2" onClick={closeMenu}>
              MVP {"    "}
              <FontAwesomeIcon icon={faRocket} style={{ color: "#000" }} />
            </a>
          </li>
          <li>
            <a href="#section3" onClick={closeMenu}>
              Pricing{"             "}
              <FontAwesomeIcon icon={faDollarSign} style={{ color: "#000" }} />
            </a>
          </li>
        </ul>

        {/* Botón centrado al final */}
        <div className="mobileMenu__footer">
          <button className="navbar__button" onClick={closeMenu}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./CTA.css";

// Imagen de ejemplo
const ctaImage =
  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740780411/4444_jdtvuy.png";

const CTA: React.FC = () => {
  // Estado para guardar el email y manejar el modal
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el envío tradicional

    // Opcional: validación simple
    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    // Construye FormData
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/xldgqjyv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Éxito: mostrar modal
        setShowModal(true);
        setErrorMessage("");
        // Limpia el campo
        setEmail("");
      } else {
        // Error en Formspree
        setErrorMessage("There was an error sending your email. Try again!");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  // Cierra el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="cta-section" id="cta">
      {/* Modal de gracias */}
      {showModal && (
        <div className="cta__modal-overlay">
          <div className="cta__modal">
            <h3>Thank You!</h3>
            <p>We have received your email. We'll be in touch soon!</p>
            <button onClick={closeModal} className="cta__button">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Columna izquierda: Texto */}
      <div className="cta-section__content">
        <h2>Ready to chat? Reach out!</h2>
        <p>
          We'd love to talk pricing, but <span>every project is unique</span>{" "}
          and needs a <span>custom approach.</span> Let's chat about your
          project, its costs, and what truly matters:{" "}
          <span>connecting with people ready to shake up the world.</span>
        </p>

        <div className="cta-section__actions">
          {/* Enlace mailto */}
          <a
            href="mailto:hello@example.com"
            className="cta__button"
            aria-label="Send us an email"
          >
            Contact us
          </a>
          <span>or</span>

          {/* Formulario controlado por handleSubmit */}
          <form onSubmit={handleSubmit} className="cta__form">
            <input
              className="cta__input"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="cta__button" type="submit">
              Send
            </button>
          </form>
        </div>

        {/* Mensaje de error si algo falla */}
        {errorMessage && <p className="cta__error">{errorMessage}</p>}
      </div>

      {/* Columna derecha: Imagen */}
      <div className="cta-section__image">
        <img src={ctaImage} alt="CTA" />
      </div>
    </section>
  );
};

export default CTA;

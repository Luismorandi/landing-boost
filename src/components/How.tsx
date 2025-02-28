import React from "react";
import "./How.css";

// Ejemplo de imagen, ajusta la ruta a tu preferencia
const sampleImage =
  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740779529/3333_u9v61o.png";

const How: React.FC = () => {
  return (
    <section className="split-section" id="how">
      {/* Columna izquierda: Imagen */}
      <div className="split-section__image">
        <img src={sampleImage} alt="Sample" />
      </div>

      {/* Columna derecha: Gradiente y texto */}
      <div className="split-section__content">
        <h2>We turn your idea into reality.</h2>
        <p>
          From a sleek landing page to a fully functional application or
          website,
          <span>we've got you covered.</span> Our specialized software
          developers
          <span>bring your business ideas to life.</span> This stage is where
          <span>the magic happens</span>—exhilarating and essential to
          <span>test your concept in the real world.</span> We move quickly and
          cost-effectively to <span>ensure you're on the right track.</span>
        </p>
      </div>
    </section>
  );
};

export default How;

import React from "react";
import "./Hero.css";

/**
 * Si tienes las imágenes en la carpeta `src/assets`, por ejemplo:
 * import leftImage from '../assets/left.png';
 * import rightImage from '../assets/right.png';
 *
 * Para este ejemplo usaremos rutas genéricas.
 */
const rightImage =
  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740766963/662f1c7a7ad34af693f62505_lamp_left_grydnm.png";
const leftImage =
  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740766963/11_zpjehc.png";
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src={leftImage} alt="Left side" className="hero__image-left" />

      <div className="hero__content">
        <h1>
          Start your business, <span>let's truly make it happen</span>
        </h1>
        <p>
          Let's kickstart your MVP with speed and ease. Think of us as your
          go-to tech squad right from the start. Our expertise lies in
          transforming your visions into tangible realities.
        </p>
      </div>

      <img src={rightImage} alt="Right side" className="hero__image-right" />
    </section>
  );
};

export default Hero;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./Landing.css"; // Opcional, si deseas estilos para esta página
import How from "../components/How";

const Landing: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <How />
      <CTA />
      <Footer />
    </>
  );
};

export default Landing;

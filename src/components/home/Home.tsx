import React from "react";
import { Collage } from "./collage/Collage";
import { Infundador } from "./fundador/Infundador";
import { Formulario } from "./formulario/Formulario";
import "styles/home/home.css";
export const Home = () => {
  return (
    <section className="home-section">
      <div className="collage">
        <Collage />
      </div>
      <div className="formulario_voluntariado">
        <Formulario />
      </div>
      <div className="fundador-sec">
        <Infundador />
      </div>

      
    </section>
  );
};

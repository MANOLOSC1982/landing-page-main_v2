import React from 'react';
import visionImage from "../../images/visionvf.png"; 
import missionImage from "../../images/misionvf.png";  
import "./MisionVision.css";

function MisionVision() {
  return (
    <div className="mision-vision-container bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-6 sm:py-8">
          <h1 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 sm:text-6xl">Misión - Visión</h1>
        </div>
        <div className="flex flex-wrap items-center justify-around mt-16 lg:mt-10">
          <div className="max-w-lg lg:w-1/2 mx-auto lg:mx-0">
            <img src={visionImage} alt="Visión" className="w-full h-auto vision-image" />
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:text-center lg:w-1/2 vision-text">
            <h2 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 sm:text-5xl">Visión</h2>
            <p className="mt-2 text-xl text-gray-800 font-montserrat" >
              Es consolidar y mantener nuestro liderazgo y posicionamiento logrado en el mercado cooperativo nacional, con la práctica de la mejora continua del Sistema Besterp y fusionándolo e integrándolo con los grandes avances de la Inteligencia Artificial, machine learning, los apps, apis, etc, lo cual les permitirá gozar de un sistema robusto hecho en lenguaje ORACLE para que puedan estar en el mismo nivel que los bancos y Cajas municipales.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:text-center lg:w-1/2 mission-text">
            <h2 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 sm:text-5xl">Misión</h2>
            <p className="mt-2 text-xl text-gray-800 font-montserrat">
              Nuestra misión es implementar nuestro sistema en aquellas cooperativas que deciden apostar por el cambio y la modernización, dotándoles de la mejor herramienta de las tecnologías de información y comunicación, como es el Sistema Besterp, para que éstas, puedan lograr su máxima productividad y rentabilidad, sin dejar de lado sus principios y valores cooperativos.
            </p>
          </div>
          <div className="max-w-lg lg:w-1/2 mx-auto lg:mx-0">
            <img src={missionImage} alt="Misión" className="w-full h-auto mission-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisionVision;

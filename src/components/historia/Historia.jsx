import React from 'react';
import besterpLogo from "../../images/besterp_somos.png"; // Asegúrate de importar la imagen de tu logo
import './Historia.css';

const Historia = () => {
  return (
    <div className="historia-container">
    
      <div className="historia-content">
      
    
        
        <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">
        Nuestra historia
        
        </h2>

        <div className="contenido">
        <div className="texto">
        <p className="mt-2 text-xl text-gray-800 font-montserrat">
          Nuestra empresa nació como respuesta a la necesidad que tenían las Cooperativas de Ahorro y Crédito de contar con una herramienta Informática, Integral, funcional y operativa al 100%.
        </p>
       
        <p className="mt-2 text-xl text-gray-800 font-montserrat">
          Vamos a cumplir 17 años de vida empresarial y a lo largo de dicho periodo, hemos logrado una rápida evolución, para responder a un mundo cambiante y complejo. 
        </p>
        <p className="mt-2 text-xl text-gray-800 font-montserrat">
        A la fecha, contamos con la versión BESTERP FINANCIAL INTEGRAL 7.0 WEB. Éste es el resultado de una ardua labor desplegada por el SCRUM TEAM (equipo BESTERP) que con gran acierto ha plasmado en el Sistema Besterp, la mayor cantidad de conocimiento y mejores Practicas en Microfinanzas del mundo Cooperativo, que permite a cada uno de nuestro clientes personalizar los productos y diferenciarse en el mercado, teniendo control absoluto y visión de su negocio; así como, le permite no solo procesar operaciones de socios unipersonales; sino también, permite actuar con sociedades jurídicas (en PYMES), siendo un sistema simple e intuitivo, concebido para que tanto analistas como gestores puedan operar forma ágil.
        </p>
            <img src={besterpLogo} alt="BESTERP Logo" className="logo" />
          </div>
          
        </div>

      
      </div>

     
     
    </div>

    
  );
}







export default Historia;

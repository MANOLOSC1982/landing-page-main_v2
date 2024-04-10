import React from 'react';
import besterpLogo from "../../images/besterp_componentes.png"; // Asegúrate de importar la imagen de tu logo 
import './Quienesomos.css';

const Quienesomos = () => {
  return (
    <div className="quien-container">
    
      <div className="quien-content">
      
        <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">Quiénes Somos</h2>
        <div className="contenido2">
        <div className="texto2">
        <p className="mt-2 text-xl text-gray-800 font-montserrat">
        Somos BESTERP, una marca de SOFTWARE COOPERATIVO, integral y moderno (ERP) reconocido a nivel nacional. 
        </p>
        <p className="mt-2 text-xl text-gray-800 font-montserrat">
        Somos una fábrica de Software especializado para resolver toda la operatividad de la misión crítica de las cooperativas de ahorro y crédito.
        </p>
        
        <img src={besterpLogo} alt="BESTERP Logo" className="logo2" />
    
            
          </div>
          
        </div>

      
      </div>

     
     
    </div>

    
  );
}








export default Quienesomos;

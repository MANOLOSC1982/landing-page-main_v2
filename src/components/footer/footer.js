import React from "react";
import "./Footer.css";
import besterpLogo from "../../images/ImagotipoBesterp_sinBG_bordeBlanco_1px.png"
import emailLogo from "../../images/email_log.png"; 
import mapLogo from "../../images/map.png"; 
import phoneLogo from "../../images/phone.png"; 

function Footer() {

  

  return (
    <footer className="main-footer mt-20">
      <div className="footer-container">
        
        <div className="footer-column mt-6 text-lg leading-8 text-gray-600">
          
          <h4 > <strong>Besterp Technologies</strong> </h4>
          <ul>
          <li>Software para Cooperativas de Ahorro y Crédito</li>
          <li>| Sistema de Gestión para Entidades de Crédito y Financieras </li>  
          <li><img
            className="w-100 h-40"
            src={besterpLogo}
            alt="" />  </li>
          </ul>
        </div>
        
          
         
      
        <div className="footer-column mt-6 text-lg leading-8 text-gray-600">
          <h4 > <strong>Informacion de Contacto</strong> </h4>
          <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://api.whatsapp.com/send?phone=966976926" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={phoneLogo} className="w-10 h-10 mr-2" alt="Icono de teléfono" />
                +51 966976926
            </a>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <img src={emailLogo} className="w-10 h-10 mr-2" alt="Icono de ubicación" />
            informes@besterp.pe
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <img src={mapLogo} className="w-10 h-10 mr-2" alt="Icono de ubicación" />
            Marqués de Guadalcázar 370, Santiago de Surco 15049 (Lima , Perú)
          </li>
        </ul>
        </div>
       
      </div>
      <div className="footer-bottom mt-6 text-lg leading-8 text-gray-600 text-bold">
        <p>&copy;{new Date().getFullYear()} Besterp Technologies. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

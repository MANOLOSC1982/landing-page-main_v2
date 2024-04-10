import React from 'react';
import { data } from '../../components/clients/mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import documentImage from "../../images/regulation.png"; 
import credibiImage from "../../images/quality.png";  
import expImage from "../../images/experience.png";  
import techImage from "../../images/technology.png";  
import innovImage from "../../images/bulb.png";  
import comproImage from "../../images/commitment.png";  

function Clients() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

      return (
        <>
            <div className="mision-vision-container bg-white py-24 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
             
                <div className="flex flex-wrap items-center justify-around mt-16 lg:mt-10">
                    <div className="max-w-lg lg:w-1/2 mx-auto lg:mx-0">
                        <img src='https://www.alkemy.org/wp-content/uploads/2023/07/frustracion-1.png'  alt="Visión" className="w-full h-auto vision-image" />
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl lg:text-center lg:w-1/2 vision-text ">
                        <h2 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-500 sm:text-5xl">¿Qué impide a tu Cooperativa lograr buenos resultados?</h2>
                            <p className="mt-2 text-gray-800 font-montserrat " >
                            Hoy en día, vemos que el software promedio de una cooperativa en Perú tiene las siguientes características:
                            </p>
                            <ul role='list' className="mt-2  text-gray-800 font-montserrat list-disc list-inside">
                            <li>No dispone de soporte o tiene un equipo técnico limitado</li>
                            <li>Ineficiencias en la gestión de datos provocan retrasos en las consultas.</li>
                            <li>No cuenta con contabilizacion en linea sobre sus operaciones.</li>
                            <li>Utiliza tecnologías desactualizadas y tiene procesos lentos e inseguros</li>                       
                            <li>Sistemas heterogéneos dificultan la interoperabilidad.</li>
                            </ul>
                            <p className="mt-3  text-gray-800 font-montserrat">Pero softwares con conceptos de gestión modernos y enfocados para cooperativas ya son una realidad y están al alcance de tu organización. </p>
                            
                    </div>
               
                </div>
            </div>
        </div>

        <div className="bg-gray-200 py-24 sm:py-10">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
    <p className="text-5xl font-extrabold text-center sm:text-5xl">
        <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-500 text-transparent bg-clip-text">
            ¿Por qué Besterp Technologies?
        </span>
    </p>
    </div>
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg text-center">
        <img src={documentImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>

        <p className="text-1xl font-extrabold sm:text-1xl text-center">Normatividad</p>
        <p className="mt-2 text-gray-800 font-montserrat">Cumplimos a cabalidad con todas las normas de la SBS, reglamentos y estatutos impuestos por la ley peruana para el sector cooperativo.</p>
        </div>

      <div className="bg-white p-4 rounded-lg">
      <img src={credibiImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>
        <p className="text-1xl font-extrabold sm:text-1xl text-center">Credibilidad</p>
        <p className="mt-2 text-gray-800 font-montserrat">Hemos demostrado que podemos hacer crecer el sector con educación financiera y constante auto-aprendizaje brindando confianza y respaldo a nuestros clientes..</p>
      </div>

      <div className="bg-white p-4 rounded-lg">
      <img src={expImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>
        <p className="text-1xl font-extrabold sm:text-1xl text-center">Experiencia</p>
        <p className="mt-2 text-gray-800 font-montserrat">Son más de 15 años de experiencia en el sector cooperativo que nos permiten ser una de las mejores compañía con más implementaciones a lo largo y ancho de todo el país.</p>
      </div>

      <div className="bg-white p-4 rounded-lg">
      <img src={techImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>
        <p className="text-1xl font-extrabold sm:text-1xl text-center">Tecnología</p>
        <p className="mt-2 text-gray-800 font-montserrat">Nuestro compromiso es brindarle al sector las herramientas y aplicaciones del momento con la finalidad de posicionar a nuestras entidades en el mercado actual.</p>
      </div>

      <div className="bg-white p-4 rounded-lg">
      <img src={innovImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>
        <p className="text-1xl font-extrabold sm:text-1xl text-center">Innovación</p>
        <p className="mt-2 text-gray-800 font-montserrat">Contamos con un grupo de ingenieros y profesionales jóvenes e innovadores que buscan fortalecer el sector con las herramientas más funcionales y novedosas.</p>
      </div>

      <div className="bg-white p-4 rounded-lg">
      <img src={comproImage} alt="Descripción de la imagen" className="mx-auto block w-20 h-20"/>
        <p className="text-1xl font-extrabold sm:text-1xl text-center">Compromiso</p>
        <p className="mt-2 text-gray-800 font-montserrat">Nuestros clientes son el centro de todo lo que hacemos, por ende trabajamos día a día para hacer de nuestra compañía la mejor y la más competente del mercado.</p>
      </div>
      {/* Repite los mismos elementos para los otros valores */}
    </div>
  </div>
</div>
    
     <h2 className="text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 mt-5">  Nuestros Clientes</h2>
    <p className="text-center  text-xl text-gray-800 font-montserrat mt-5"> Desde cooperativas emergentes hasta líderes del mercado, nuestra base de clientes refleja nuestra dedicación  </p>
    <p className="text-center  text-xl text-gray-800 font-montserrat ">a proporcionar soluciones de alta calidad y satisfacer las necesidades financieras más exigentes. </p>
    <p className="text-center  text-xl text-gray-800 font-montserrat "> Echa un vistazo a algunos de nuestros clientes destacados que confían en nuestra experiencia y compromiso con la excelencia.</p>
      <div className='relative flex items-center mt-5'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={80} />
        <div
          id='slider'
          className='w-full h-full overflow-x-hidden overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hiden'
        >
          {data.map((item) => (
            <img
              className='w-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={80} />
      </div>

        </>
  );
}
export default Clients;
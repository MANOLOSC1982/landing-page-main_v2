import React from 'react';
import visionImage from "../../images/visionvf.png"; 
import missionImage from "../../images/misionvf.png";  
// "text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 sm:text-5xl" 

//"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"  
function Valores() {
  return (
    <div className="bg-gray-200 py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className= "text-6xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-600 sm:text-6xl" >    
            Valores de la Empresa
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src={visionImage}  alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">CRISTOCENTRISMO</p>
              <p className="mt-2 text-gray-800 font-montserrat">Para la familia Besterp, como creyentes y practicantes de la fe y el amor a Cristo, todas nuestras acciones y nuestras vidas tienen como centro, a nuestro Redentor Jesucristo.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">HONESTIDAD</p>
              <p className="mt-2 text-gray-800 font-montserrat">Implica que actuemos con sinceridad y capacidad de reconocer y corregir nuestros errores, inspirando confianza a los que nos rodean y siendo cada día mejores personas.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">COMPAÑERISMO</p>
              <p className="mt-2 text-gray-800 font-montserrat">Para la familia BESTERP la práctica del compañerismo es un hábito cotidiano, porque nos sentimos como verdaderos hermanos y con esa fuerza podemos emprender grandes proyectos.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">TRABAJO EN EQUIPO</p>
              <p className="mt-2 text-gray-800 font-montserrat">Somos SCRUM TEAM- equipo Besterp, de espíritu, mente y corazón, no hay requerimiento de nuestros clientes que no podamos resolver, porque trabajamos en equipo y con actitud ganadora. Nuestros consultores se inter apoyan con total confianza.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">RESPONSABILIDAD</p>
              <p className="mt-2 text-gray-800 font-montserrat" >Cada integrante del equipo Besterp, debe cumplir de forma oportuna con sus tareas asignadas, informando a los Usuarios requirientes y haciendo las pruebas pertinentes de los aspectos atendidos.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">INNOVACION</p>
              <p className="mt-2 text-gray-800 font-montserrat">Atendiendo a los cambios disruptivos o incrementales, que vienen ocurriendo en el desarrollo del Software, en nuestros días, la innovación debe ser el rasgo principal de cada colaborador Besterp, acorde con la visión de la empresa.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">PUNTUALIDAD</p>
              <p className="mt-2 text-gray-800 font-montserrat">El integrante del equipo Besterp, debe estar siempre mentalizado a practicar la cultura de la puntualidad, evitando la pérdida de horas valiosas, tal como lo hacen en los países adelantados.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">EMPATIA</p>
              <p className="mt-2 text-gray-800 font-montserrat">El colaborador Besterp, básicamente, debe saber escuchar a los usuarios con los que trata, mostrando tolerancia y respeto a su interlocutor y practicando la Escuela activa.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">HUMILDAD</p>
              <p className="mt-2 text-gray-800 font-montserrat">El colaborador Besterp ha de recordar siempre, “Que el humilde sirve y el soberbio se hace servir” por ende, no hay más acción loable que ser servicial, en todo momento y en todo lugar.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
            <div className="col-span-1">
              <img src="ruta_de_la_imagen_a" alt="Descripción de la imagen" className="w-full h-auto" />
            </div>
            <div className="col-span-1">
              <p className="text-1xl font-extrabold sm:text-1xl">AMABILIDAD</p>
              <p className="mt-2 text-gray-800 font-montserrat">Es el valor característico de todo el equipo Besterp, fundándose en el respeto absoluto, el afecto y el comportamiento de benevolencia con todo sus semejantes, sin distinción alguna.</p>
            </div>
          </div>

          {/* Repite lo mismo para los otros valores */}
        </div>
      </div>
    </div>
  );
}

export default Valores;


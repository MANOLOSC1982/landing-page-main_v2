import React from 'react'
import maintenanceBg from "../../images/maintenance_1.svg"

function Maintenance() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Página en Mantenimiento
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pronto volveremos y renovados! Por el momento, puedes comunicarte con nosotros a <span className='text-blue-600'>informes@besterp.pe</span> o al <span className='text-blue-600'>966976926</span>. Nos comprometemos a responderte dentro de las próximas 24 horas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <img
            className="mx-auto w-auto h-full"
            src={maintenanceBg}
            alt=""
          /> 
        </div>
      </div>
    </div>
  )
}

export default Maintenance
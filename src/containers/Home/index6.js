import React from 'react'
import Navbar from '../../components/navigation/navbar'
import Hero from '../../components/index/hero'
import Solutions from '../../pages/solutionsbp'
import Methodology from '../../components/methodology/methodology'
import GetContact from '../../pages/contact'
import Maintenance from '../../components/maintenance/Maintenance'
import Footer from '../../components/footer/footer'
import Valores from '../../components/nosotros/Valores'

function Home3() {

  return (
    <>
    
    <Navbar />
    <Solutions/>
    <Footer/>
       { /*  <Navbar />
        <Hero />
        <Maintenance/> */}

   
     
    </>
  )
}

export default Home3
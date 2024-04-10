import React from 'react'
import Navbar from '../../components/navigation/navbar'
import Hero from '../../components/index/hero'
import Solutions from '../../pages/solutions'
import Methodology from '../../components/methodology/methodology'
import GetContact from '../../pages/contact'
import Maintenance from '../../components/maintenance/Maintenance'
import MisionVision from '../../components/nosotros/MisionVision' 
import Footer from '../../components/footer/footer'

function Home2() {

  return (
    <>
    
    <Navbar />
    <MisionVision />
    <Footer/>
       { /*  <Navbar />
        <Hero />
        <Maintenance/> */}

   
     
    </>
  )
}

export default Home2
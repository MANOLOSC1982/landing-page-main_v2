import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as LinkScroll, animateScroll } from "react-scroll";
import "../../styles/Navbar.css";
import dataMindsImagotipoBlanco from "../../images/BesterpLogo_bordeBlanco_3px.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import {
    faHome,
    faBars,
    faTimes,
    faPeopleGroup,
    faMicrochip,
    faDiagramProject,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";



  
function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showNosotrosDropdown, setShowNosotrosDropdown] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const toggleNosotrosDropdown = () => {
        setShowNosotrosDropdown(!showNosotrosDropdown);
    };

    window.addEventListener("scroll", changeColor);

    const handleNosotrosDropdownEnter = () => {
        setShowNosotrosDropdown(true);
    };

    const handleNosotrosDropdownLeave = () => {
        // Don't hide the dropdown when mouse leaves "Nosotros" section
        // Keep it open if mouse enters the dropdown area
        // setShowNosotrosDropdown(false);
    };

    const handleNosotrosDropdownContentLeave = () => {
        setShowNosotrosDropdown(false);
    };

    return (
        <div className={`flex items-center px-4 py-3 sm:px-6 sm:py-4 justify-between sticky top-0 z-50 ${color ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-xl" : "bg-blue-900"}`}>
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <a className="flex-1">
                    <img
                        src={dataMindsImagotipoBlanco}
                        className="h-12 w-auto sm:h-16"
                        alt="Besterp Technologies"
                    />
                </a>
            </div>
            <div className="flex-none hidden md:flex md:justify-center md:h-full text-white md:text-md lg:text-lg">
                <Link
                    to="/home" 
                    offset={-250} 
                    smooth={true} 
                    spy={true} 
                    className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-red-500" : "hover:text-red-500"}`}
                >
                    <FontAwesomeIcon icon={faHome} className="mr-3" />Inicio
                </Link>

                <div 
                    className="relative"
                    onMouseEnter={handleNosotrosDropdownEnter}
                    onMouseLeave={handleNosotrosDropdownLeave}
                >
                    <div 
                        className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`} 
                    >
                        <FontAwesomeIcon icon={faMicrochip} className="mr-3" /> Nosotros  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                    </div>
                    {showNosotrosDropdown && (
                        <div 
                            className="absolute z-10 top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                            onMouseEnter={handleNosotrosDropdownEnter}
                            onMouseLeave={handleNosotrosDropdownLeave}
                            style={{ width: '200px' }}
                        >
                            <div onMouseLeave={handleNosotrosDropdownContentLeave}>
                                    <Link to="/historia" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Historia
                                    </Link>
                                   
                                    <Link to="/quienes-somos" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        ¿Quiénes somos?
                                    </Link>
                                    <Link to="/mision-vision" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Misión y Visión
                                    </Link>
                                    <Link to="/valores" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Nuestro Valores
                                    </Link>
                                {/* Add more solution links as needed */}
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/soluciones" offset={-20} spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faMicrochip} className="mr-3" /> Soluciones
                </Link>
               
               
                <Link to="/contactanos" offset={20} spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faPhone} className="mr-3" /> Contáctanos
                </Link>
            </div>
            <div className="flex-1 items-center justify-end hidden md:flex">
                {/* <Avatar
                    image="https://gustui.s3.amazonaws.com/avatar.png"
                    className="cursor-pointer my-2"
                    /> */}
            </div>
            <FontAwesomeIcon
                icon={mobileOpen ? faTimes : faBars}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white text-3xl cursor-pointer md:hidden"
            />
            {mobileOpen && (
                <div className="absolute top-full left-0 p-2 w-full flex flex-col py-2 shadow-sm lg:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="flex-1 flex flex-col items-center text-xl">
                            <Link to="/home" offset={-100} smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-3" /> Home
                            </Link>

                            <div 
                                className="relative"
                                onMouseEnter={handleNosotrosDropdownEnter}
                                onMouseLeave={handleNosotrosDropdownLeave}
                            >
                                <div className="no-underline px-2 py-1 my-2 font-medium hover:text-blue-700">
                                    <FontAwesomeIcon icon={faMicrochip} className="mr-3" />  Nosotros  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                                </div>
                                {showNosotrosDropdown && (
                                    <div className="absolute z-10 top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                                        <div onMouseLeave={handleNosotrosDropdownContentLeave}>
                                            <Link to="/historia" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Historia
                                            </Link>
                                            <Link to="/quienes-somos" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                             	¿Quiénes somos?
                                            </Link>
                                            <Link to="/mision-vision" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Mision y Valores
                                            </Link>
                                            <Link to="/valores" offset={-20} spy={true} smooth={true} duration={500} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Nuestro Valores
                                            </Link>
                                            {/* Add more solution links as needed */}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/soluciones" smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 py-1 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faMicrochip} className="mr-3" /> Soluciones
                            </Link>
                            

                          
                            <Link to="/contactanos" offset={20} smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faPhone} className="mr-3" /> Contáctanos
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

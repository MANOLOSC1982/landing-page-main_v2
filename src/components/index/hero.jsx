import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"
import { Link as LinkScroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import "@fontsource/jetbrains-mono"

import fintechBg from "../../images/finance_consultancy.jpg"
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Soluciones', href: '#' },
  { name: 'Equipo', href: '#' },
  { name: 'Nosotros', href: '#' },
  { name: 'Contáctanos', href: '#' },
]

export default function Hero() {

  const transition = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {},
    delay: 3500,
    config: config.molasses,
  })

  return (
    <div className="relative bg-blue-900 overflow-hidden h-full" id="home">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl h-full lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" fill="#1E3A8A" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl h-32 sm:h-40 md:h-48">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 10,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('<span style="color: white;">Empoderando la </span><br>')
                        .typeString('<span style="color: white;">Cooperación con </span><br>')
                        .typeString('<span style="color: white;">Tecnología</span>')
                        .pauseFor(1000)
                        .deleteChars(27)
                        .typeString('<span style="color: white;">Tecnología con </span><br>')
                        .typeString('<span style="color: white;">Cooperación</span>')
                        .pauseFor(2000)
                        .start();
                    }}
                  />
                </h1>
                {transition((styles, item) => item ?
                  <animated.div style={styles}>
                    <p className="mt-3 text-base text-white font-montserrat sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Somos la empresa Somos BESTERP, una marca de SOFTWARE COOPERATIVO, integral y moderno (ERP) reconocido a nivel nacional. Somos una fábrica de Software especializado para resolver toda la operatividad de la misión crítica de las cooperativas de ahorro y crédito.
                      {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block mx-2">
                                                <span class="relative text-white">Dataminds</span>
                                            </span>  */}
                    </p>
                  </animated.div> : ""
                )}
                {transition((styles, item) => item ?
                  <animated.div style={styles} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="shadow">
                      <Link to="/soluciones" activeClass="active-white" offset={20} spy={true} smooth={true} duration={500}>
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold font-montserrat rounded-full text-white bg-gradient-to-r from-red-800 via-red-600 to-red-400 md:py-4 md:text-lg md:px-10 hover:from-red-600 hover:via-red-400 hover:to-red-200 hover:text-black hover:font-bold">
                          Conocer más
                        </a>
                      </Link>
                    </div>
                  </animated.div> : ""
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full shadow-inner">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={fintechBg}
          alt=""
        />
      </div>
    </div>
  )
}
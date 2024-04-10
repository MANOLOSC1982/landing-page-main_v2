import SolutionsSwiper from "../components/solutions/solutions-swiper";
import visionImage from "../images/visionvf.png"; 
import oracleImage from "../images/oracle.png";
import datamindImage from "../images/dataminds.png";
import besterpmentoringImage from "../images/besterp_mentoring_orig.png";

const features = [
  { name: 'Core Financiero', description: 'En nuestro core financiero, proporcionamos una solución completa para la gestión de créditos, evaluación crediticia, convenios, captaciones, operaciones financieras, gestión de riesgos, cumplimiento normativo, cobranzas, auditoría, cumplimiento de requisitos de la SBS, administración de caja chica, asuntos legales y administración del sistema.' },
    { name: 'Modulos Administrativos', description: 'En nuestros módulos administrativos, ofrecemos una gama completa de herramientas que incluyen contabilidad, compras, ventas, logística, gestión de activos fijos, presupuestos, planeamiento, recursos humanos, marketing y trámite documentario para satisfacer todas las necesidades de gestión de tu empresa de manera integrada y eficiente.' },
    { name: 'Analitica de Negocios', description: 'Para la analítica de negocios, ofrecemos herramientas avanzadas que incluyen paneles de control, series temporales y reportes gráficos. Estas capacidades permiten una comprensión profunda del rendimiento empresarial y facilitan la toma de decisiones informadas.' },
    { name: 'Mailing', description: ' Proporcionamos funcionalidades clave como alertas diarias, envío de estados de cuentas, cartas de invitación, notificaciones, saludos y mensajes dirigidos a los socios. Esto permite una comunicación eficiente y personalizada con los miembros de la cooperativa, manteniéndolos informados y comprometidos con la organización.' },
    { name: 'Herramientas World-Class', description: 'Incluyen una sólida infraestructura tecnológica que comprende una base de datos Oracle 12c o superior, un servidor web WebLogic Server 12c, y plataformas de desarrollo como Forms and Reports 12c y APEX. Estas herramientas garantizan un rendimiento óptimo, seguridad y capacidad de escalabilidad para satisfacer las demandas de cualquier operación financiera.' },
    { name: 'Integracion con otros Sistemas', description: 'Nuestra solución ofrece una integración fluida con otros sistemas a través de diversas interfaces, incluyendo 4 Told, Interface Entura, PINPAD Entura, Interface Kasnet, API Sentinel, y API PerúApis (Reniec, Sunat). Esto permite una interoperabilidad eficiente y una comunicación sin problemas con múltiples plataformas y servicios, optimizando así la experiencia del usuario y la eficiencia operativa.' },
    { name: 'Metodologias y Herramientas Adicionales', description: 'ofrece una amplia gama de metodologías y herramientas adicionales, incluyendo Scoring Logit, Kmeans, almacenamiento de documentos en la base de datos, Scoring Regresión Lineal, Metodología VAR y Monte Carlo. Estas capacidades proporcionan análisis avanzados, almacenamiento eficiente de documentos y modelos predictivos precisos para respaldar decisiones estratégicas y operativas en tu organización.' },
    { name: 'Seguimiento de Metricas', description: 'Seguimiento de métricas que incluye Perlas, Indicadores Clave de Riesgo (KRIs), Indicadores Clave de Desempeño (KPIs) y seguimiento de metas por usuario, agencia y cooperativa. Estas herramientas proporcionan una visión integral del rendimiento y la gestión de riesgos, permitiendo una toma de decisiones ágil y basada en datos para alcanzar los objetivos estratégicos de la cooperativa.' },
  ]
  


export default function Solutions() {
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedFeatures = chunkArray(features, 3);

  return (
    
    <div className="bg-white" id="soluciones">
      <div className="max-w-4xl  mx-auto  pt-20 px-4  items-center grid-cols-1 gap-y-16  gap-x-8 sm:px-6 sm:pt-50 lg:max-w-7xl  lg:px-8  lg:grid-cols-2  ">
        <div>

          <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">
            Soluciones
          </h2>

          <p className="mt-4 text-black font-montserrat text-lg">
          Nuestra solución de ERP financiero para cooperativas de ahorro y crédito ofrece una plataforma integral para gestionar todas las operaciones financieras y administrativas de tu institución. Desde finanzas y créditos hasta riesgos y contabilidad, nuestra solución proporciona todo lo que necesitas para optimizar tu cooperativa. Además, ofrecemos funciones avanzadas como generación de informes para la SBS, integración API REST, calificación de scoring, envío de correos electrónicos, facturación electrónica , implementacion de tarjetas de debito y aplicativo movil entre otros
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-y-6 lg:gap-x-8">
            {chunkedFeatures.map((chunk, index) => (
            <div key={index}>
            {chunk.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4 font-montserrat">
            <dt className="font-bold text-gray-900">{feature.name}</dt>
            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
            </div>
            ))}
            </div>
            ))}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> */}
        <div className="flex overflow-hidden">
          <SolutionsSwiper />
        </div>
      </div>

      <div className="quien-container">
  <div className="quien-content">
    <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900">
      El Core financiero de Besterp es una solución con amplia funcionalidad
    </h2>
    <div className="contenido2 flex justify-between mt-4">
     

      <div className="texto2 flex flex-col items-center">
      
      <img src={datamindImage}   />
        <div className="flex flex-col justify-center" >
          <p className="text-5xl font-extrabold text-center" >Dataminds</p>
          <p className="mt-2 text-gray-800 font-montserrat">
          En Dataminds combinamos ciencia de datos, mejores prácticas y tecnología para la construcción de sistemas de puntuación capaces de predecir el futuro, utilizando técnicas estadísticas y de machine learning de vanguardia con la finalidad de brindar fundamento estadístico y tecnológico a las decisiones de las instituciones financieras.
          </p>
        </div>
      </div>

      <div className="texto2 flex flex-col items-center">
      <img src={oracleImage}   />
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-extrabold text-center" >Oracle Partner</p>
          <p className="mt-2 text-gray-800 font-montserrat">
          Desarrollamos nuestra solución ERP para cooperativas de ahorro y crédito utilizando las potentes herramientas de Oracle, incluyendo Oracle Forms, Reports y PL/SQL. Esta elección nos permite aprovechar la robustez y la fiabilidad de la tecnología Oracle, garantizando un rendimiento óptimo y una integración perfecta con los sistemas existentes.
          </p>
        </div>
      </div>

      <div className="texto2 flex flex-col items-center">
      <img src={besterpmentoringImage}   />
        <div className="flex flex-col justify-center">
        <p className="text-5xl font-extrabold text-center" >Besterp Mentoring</p>
          <p className="mt-2 text-gray-800 font-montserrat">
          Ofrecemos un amplio conjunto de características de mentoría, que incluyen capacitación integral, programas de entrenamiento personalizados con laboratorios prácticos, ejecución de metodologías específicas, estudios económico-financieros ad hoc y facilitación de procesos de planificación estratégica. Estas herramientas están diseñadas para fortalecer las habilidades y conocimientos de los miembros de la cooperativa.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
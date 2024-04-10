import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Demo from './containers/Demo';
import Home from './containers/Home/index';
//import Solucion from './pages/solutions';
import Solucion from './containers/Home/index6';
import Navbar from "./components/navigation/navbar";
import Hero from "./components/index/hero";
import Maintenance from "./components/maintenance/Maintenance";
import MisionVision from './containers/Home/index2';
import Historia from './containers/Home/index3';
import Quienesomos from './containers/Home/index4';
import Valores from './containers/Home/index5';
import Contactos from './containers/Home/index7';
function App() {
  return (
 
      <>
   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/quienes-somos" element={<Quienesomos />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/contactanos" element={<Contactos />} />
          <Route path='/soluciones' element={<Solucion />} />
          {/* Aquí puedes definir más rutas */}
        </Routes>
      </>
   
  );
}

export default App;


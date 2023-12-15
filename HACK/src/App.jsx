import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/app/Nav";

import Inicio from "./components/app/Inicio";
import TiposCancer from "./components/app/TiposCancer";
import Paginas from "./components/app/Paginas";
import Contactos from "./components/app/Contactos";
import { Usercontextprovider, useuserContext } from "./components/context/userContext";
import { Navcontextprovider } from "./components/context/navcontext";
import Factoresriesgo from "./components/app/factoresriesgo";
// import { Redirect, Route } from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Usercontextprovider>
          <Navcontextprovider>
            <Nav />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/TiposCancer" element={<TiposCancer />} />
              <Route path="/Paginas" element={<Paginas />} />
              <Route path="/Contacto" element={<Contactos />} />
              <Route path="/factoresriesgo" element={<Factoresriesgo />} />
              {/* <Route path="/Acceso" element={<Redirect to="http://127.0.0.1:8000/api/login" />} /> */}

            </Routes>
          </Navcontextprovider>
        </Usercontextprovider>


      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import VerificarDniPage from "./VerificarDniPage";
import Menu from "../components/Menu";
import { useSelector } from "react-redux";
import * as actions from "../actions/verifyActions";

const HomePage = () => {
 
  return (
    <div className="menu-home w-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/nuevo-paciente" element={<NuevoPacientePage />} />
          <Route path="/lista-de-personal" element={<ListaDePersonalPage />} />
          <Route path="/verificar-dni" element={<VerificarDniPage />} />
          <Route path="/lista-de-funciones"element={<ListaDeFuncionesPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;

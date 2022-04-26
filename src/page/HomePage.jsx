import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div className="menu-home w-100">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nuevo-paciente" element={<NuevoPacientePage />} />
        <Route path="/lista-de-personal" element={<ListaDePersonalPage />} />
        <Route path="/lista-de-funciones" element={<ListaDeFuncionesPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;

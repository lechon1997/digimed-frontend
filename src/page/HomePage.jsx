import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import Menu from "../components/Menu";
import TratamientoForm from "../components/TratamientoForm";

const HomePage = () => {
  return (
    <div className="menu-home">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nuevo-paciente" element={<NuevoPacientePage />} />
        <Route path="/lista-de-personal" element={<ListaDePersonalPage />} />
        <Route path="/lista-de-funciones" element={<ListaDeFuncionesPage />} />
        <Route path="/add-tratamiento" element={<TratamientoForm />} />
      </Routes>
    </div>
  );
};

export default HomePage;

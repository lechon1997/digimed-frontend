import React from "react";
import { Route, Routes } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import VerificarDniPage from "./VerificarDniPage";
import Menu from "../components/Menu";
import SintomasPage from "./SintomasPage";
import DelegarTareasPage from "./DelegarTareasPage";
import TratamientoForm from "../components/TratamientoForm";

const HomePage = () => {
  return (
    <div className="menu-home w-100">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nuevo-paciente" element={<NuevoPacientePage />} />
        <Route path="/lista-de-personal" element={<ListaDePersonalPage />} />
        <Route path="/verificar-dni" element={<VerificarDniPage />} />
        <Route path="/lista-de-funciones" element={<ListaDeFuncionesPage />} />
        <Route path="/paciente/sintomas/:id" element={<SintomasPage />} />
        <Route
          path="/atencion/tratamiento/:idatencion"
          element={<TratamientoForm />}
        />
        <Route path="/delegar-tareas" element={<DelegarTareasPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;

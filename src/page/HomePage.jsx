import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import VerificarDniPage from "./VerificarDniPage";
import Menu from "../components/Menu";
import SintomasPage from "./SintomasPage";
import DiagnosticoPage from "./DiagnosticoPage";
import DelegarTareasPage from "./DelegarTareasPage";
import { useSelector } from "react-redux";
import * as actions from "../actions/verifyActions";
import TratamientoForm from "../components/TratamientoForm";
import VerFuncionesPage from "./VerFuncionesPage";
import ListaDeFunciones from "../components/ListaDeFunciones";
import DelegarTareasPage from "./DelegarTareasPage";
import ModalNuevaFuncion from "../components/ModalNuevaFuncion";

const HomePage = () => {

  const url = "https://forms.gle/sZPy5oci54wUviU79";
  const urlChanger = (e) => {
    e.preventDefault();
    window.location.assign(url);
  };

  return (
    <div className="menu-home w-100">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nuevo-paciente" element={<NuevoPacientePage />} />
        <Route path="/lista-de-personal" element={<ListaDePersonalPage />} />
        <Route path="/verificar-dni" element={<VerificarDniPage />} />
        <Route path="/lista-de-funciones" element={<ListaDeFuncionesPage />} />
        <Route path="/ver-funciones" element={<VerFuncionesPage />} />
        <Route path="/ingresar-funcion"element={<ModalNuevaFuncion />}/>
        <Route path="/paciente/sintomas/:id" element={<SintomasPage />} />
        <Route path="/delegar-tareas/:dni" element={<DelegarTareasPage />} />
        <Route path="/paciente/diagnostico/:id" element={<DiagnosticoPage />} />
        <Route
          path="/atencion/tratamiento/:idatencion/:idPaciente"
          element={<TratamientoForm />}/>
      </Routes>
     
    </div>
  );
};

export default HomePage;

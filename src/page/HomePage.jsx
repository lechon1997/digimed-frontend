import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NuevoPacientePage from "./NuevoPacientePage";
import ListaDeFuncionesPage from "./ListaDeFuncionesPage";
import ListaDePersonalPage from "./ListaDePersonalPage";
import VerificarDniPage from "./VerificarDniPage";
import Menu from "../components/Menu";
import SintomasPage from "./SintomasPage";
import DiagnosticoPage from "./DiagnosticoPage";
import { useSelector } from "react-redux";
import * as actions from "../actions/verifyActions";
import TratamientoForm from "../components/TratamientoForm";
import FormularioNuevaFuncionPage from "./FormularioNuevaFuncionPage";
import ListaDeFunciones from "../components/ListaDeFunciones";

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
        <Route
          path="/ingresar-funcion"
          element={<FormularioNuevaFuncionPage />}
        />
        <Route path="/paciente/sintomas/:id" element={<SintomasPage />} />
        <Route path="/delegar-tareas/:dni" element={<DelegarTareasPage />} />
        <Route path="/paciente/diagnostico/:id" element={<DiagnosticoPage />} />
        <Route
          path="/atencion/tratamiento/:idatencion/:idPaciente"
          element={<TratamientoForm />}
        />
      </Routes>
      <button className="btn-redireccion" onClick={urlChanger}>
        Encuesta
      </button>
    </div>
  );
};

export default HomePage;

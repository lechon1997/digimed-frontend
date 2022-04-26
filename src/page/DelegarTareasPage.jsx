import React from "react";
import { useParams } from "react-router-dom";
import HeaderFormDelegar from "../components/HeaderFormDelegar";

const DelegarTareasPage = () => {
  const { id } = useParams();
  return (
    <div className="contenedor-delegar-tareas d-flex justify-content-center">
      <div className="form-delegar-tarea d-flex justify-content-center">
        <HeaderFormDelegar />
      </div>
    </div>
  );
};

export default DelegarTareasPage;

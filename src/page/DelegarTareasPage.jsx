import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import HeaderFormDelegar from "../components/HeaderFormDelegar";
import ContenedorFormDelegar from "../components/ContenedorFormDelegar";
import FooterFormDelegar from "../components/FooterFormDelegar";
import { fetchFunciones } from "../actions/delegarTareasActions";

const DelegarTareasPage = ({ dispatch }) => {
  const { id } = useParams();
  dispatch(fetchFunciones());
  return (
    <div className="contenedor-delegar-tareas d-flex justify-content-center">
      <div className="form-delegar-tarea d-flex flex-column">
        <HeaderFormDelegar />
        <ContenedorFormDelegar />
        <FooterFormDelegar />
      </div>
    </div>
  );
};

export default connect(null)(DelegarTareasPage);

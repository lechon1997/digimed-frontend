import React from "react";
import { connect } from "react-redux";

const HeaderFormDelegar = () => {
  return (
    <div className="header-form-delegar-tarea d-flex">
      <div className="item-header-form-delegar">
        <label>Seleccionar funcion</label>
      </div>
      <div className="item-header-form-delegar">
        <label>Editar funcion</label>
      </div>
      <div className="item-header-form-delegar">
        <label className="">Seleccionar enfermera</label>
      </div>
    </div>
  );
};

export default HeaderFormDelegar;

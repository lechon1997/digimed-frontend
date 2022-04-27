import React from "react";
import { connect } from "react-redux";

const HeaderFormDelegar = ({
  seleccionarFuncion,
  editarFuncion,
  seleccionarEnfermera,
}) => {
  return (
    <div className="header-form-delegar-tarea d-flex">
      <div
        className={`item-header-form-delegar bg-primary text-white ${
          editarFuncion ? "" : "radius-header-delegar-tareas"
        }`}
      >
        <label>Seleccionar funcion</label>
      </div>
      <div
        className={`item-header-form-delegar ${
          editarFuncion ? "bg-primary text-white" : ""
        } ${
          editarFuncion && !seleccionarEnfermera
            ? "radius-header-delegar-tareas"
            : ""
        }`}
      >
        <label>Editar funcion</label>
      </div>
      <div
        className={`item-header-form-delegar ${
          seleccionarEnfermera ? "bg-primary text-white" : ""
        }`}
      >
        <label className="">Seleccionar enfermera</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  seleccionarFuncion: state.delegarTareas.seleccionarFuncion,
  editarFuncion: state.delegarTareas.editarFuncion,
  seleccionarEnfermera: state.delegarTareas.seleccionarEnfermera,
});

export default connect(mapStateToProps)(HeaderFormDelegar);

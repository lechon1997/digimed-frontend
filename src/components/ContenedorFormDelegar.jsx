import React from "react";
import { connect } from "react-redux";
import SeleccionarFuncionFormDelegar from "./SeleccionarFuncionFormDelegar";
import EditarFuncionFormDelegar from "./EditarFuncionFormDelegar";
import SeleccionarEnfermeroFormDelegar from "./SeleccionarEnfermeroFormDelegar";

const ContenedorFormDelegar = ({
  seleccionarFuncion,
  editarFuncion,
  seleccionarEnfermera,
}) => {
  return (
    <div className="w-100 h-100 mb-3 mt-4">
      {seleccionarFuncion && <SeleccionarFuncionFormDelegar />}
      {editarFuncion && <EditarFuncionFormDelegar />}
      {seleccionarEnfermera && <SeleccionarEnfermeroFormDelegar />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  seleccionarFuncion: state.delegarTareas.seleccionarFuncion,
  editarFuncion: state.delegarTareas.editarFuncion,
  seleccionarEnfermera: state.delegarTareas.seleccionarEnfermera,
});

export default connect(mapStateToProps)(ContenedorFormDelegar);

import React from "react";
import { connect } from "react-redux";
import {
  siguienteEditarFuncion,
  siguienteSeleccionFuncion,
  volverSeleccionarEnfermera,
  volverEditarFuncion,
} from "../actions/delegarTareasActions";

const FooterFormDelegar = ({
  seleccionarFuncion,
  editarFuncion,
  seleccionarEnfermera,
  dispatch,
}) => {
  const siguiente = () => {
    if (!editarFuncion) {
      dispatch(siguienteSeleccionFuncion());
    } else {
      dispatch(siguienteEditarFuncion());
    }
  };

  const volver = () => {
    if (seleccionarEnfermera) {
      dispatch(volverSeleccionarEnfermera());
    } else {
      dispatch(volverEditarFuncion());
    }
  };
  return (
    <div className=" d-flex justify-content-between pb-3 ps-3 pe-3">
      <button id="btn-volver" className="btn btn-primary" onClick={volver}>
        Volver
      </button>
      {seleccionarEnfermera ? (
        <button
          id="btn-finalizar"
          className="btn btn-success"
          onClick={siguiente}
        >
          Finalizar
        </button>
      ) : (
        <button
          id="btn-siguiente"
          className="btn btn-primary"
          onClick={siguiente}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  seleccionarFuncion: state.delegarTareas.seleccionarFuncion,
  editarFuncion: state.delegarTareas.editarFuncion,
  seleccionarEnfermera: state.delegarTareas.seleccionarEnfermera,
});

export default connect(mapStateToProps)(FooterFormDelegar);

import React from "react";
import { connect } from "react-redux";
import {
  siguienteEditarFuncion,
  siguienteSeleccionFuncion,
  volverSeleccionarEnfermera,
  volverEditarFuncion,
  fetchEnviarNotificacionEnfermera,
} from "../actions/delegarTareasActions";

const FooterFormDelegar = ({
  seleccionarFuncion,
  editarFuncion,
  seleccionarEnfermera,
  enfermeraSeleccionada,
  funcionSeleccionada,
  dispatch,
}) => {
  console.log(funcionSeleccionada);

  const finalizar = () => {
    dispatch(
      fetchEnviarNotificacionEnfermera({
        enfermero: enfermeraSeleccionada.enfermera,
        funcion: funcionSeleccionada.funcion,
        pacienteDNI: "9898989898",
      })
    );
  };

  const guardarCambiosFuncion = () => {
    console.log("gurdando cambios...");
  };

  const siguiente = () => {
    if (editarFuncion) {
      guardarCambiosFuncion();
    }

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
          onClick={finalizar}
          disabled={!enfermeraSeleccionada.seleccionada ? true : false}
        >
          Finalizar
        </button>
      ) : (
        <button
          id="btn-siguiente"
          className="btn btn-primary"
          onClick={siguiente}
          disabled={!funcionSeleccionada.seleccionada ? true : false}
        >
          {editarFuncion ? "guardar y continuar" : "continuar"}
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  seleccionarFuncion: state.delegarTareas.seleccionarFuncion,
  editarFuncion: state.delegarTareas.editarFuncion,
  seleccionarEnfermera: state.delegarTareas.seleccionarEnfermera,
  funcionSeleccionada: state.delegarTareas.funcionSeleccionada,
  enfermeraSeleccionada: state.delegarTareas.enfermeraSeleccionada,
});

export default connect(mapStateToProps)(FooterFormDelegar);

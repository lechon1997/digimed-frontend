import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  siguienteEditarFuncion,
  siguienteSeleccionFuncion,
  volverSeleccionarEnfermera,
  volverEditarFuncion,
  fetchEnviarNotificacionEnfermera,
  fetchActualizarFuncion,
  limpiarEstadoStoreDelegar,
} from "../actions/delegarTareasActions";

const FooterFormDelegar = ({
  seleccionarFuncion,
  editarFuncion,
  seleccionarEnfermera,
  enfermeraSeleccionada,
  funcionSeleccionada,
  nombreFuncionCache,
  descripcionFuncionCache,
  alertNombre,
  paciente,
  dispatch,
}) => {
  let { dni } = useParams();
  let navigate = useNavigate();
  //LIMPIAR EL ESTADO DE LA STORE CUANDO EL COMPONENTE ES DEMONTADO, ES DECIR QUE SE VA DEL FORMULARIO.
  useLayoutEffect(() => {
    return () => {
      console.log("se limpiado el estado");
      dispatch(limpiarEstadoStoreDelegar());
    };
  }, []);

  const finalizar = () => {
    try {
      dispatch(
        fetchEnviarNotificacionEnfermera({
          enfermero: enfermeraSeleccionada.enfermera,
          funcion: funcionSeleccionada.funcion,
          pacienteDNI: paciente.dni,
        })
      );
      window.alert("se envió la notifiación al enfermero");
      navigate("/");
    } catch (e) {
      window.alert("Error al enviar la notificación");
      navigate("/");
    }
  };

  const guardarCambiosFuncion = () => {
    dispatch(
      fetchActualizarFuncion({
        id: funcionSeleccionada.funcion.id,
        nombre: nombreFuncionCache,
        descripcion: descripcionFuncionCache,
      })
    );
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
    <div
      className={`d-flex ${
        seleccionarFuncion ? "justify-content-end" : "justify-content-between"
      } pb-3 ps-3 pe-3`}
    >
      {!seleccionarFuncion ? (
        <button
          id="btn-volver"
          className="btn btn-primary"
          onClick={volver}
          disabled={alertNombre.isOpen ? true : false}
        >
          Volver
        </button>
      ) : (
        ""
      )}
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
          disabled={
            !funcionSeleccionada.seleccionada || alertNombre.isOpen
              ? true
              : false
          }
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
  nombreFuncionCache: state.delegarTareas.nombreFuncionCache,
  descripcionFuncionCache: state.delegarTareas.descripcionFuncionCache,
  alertNombre: state.delegarTareas.alertaNombre,
  paciente: state.delegarTareas.paciente,
});

export default connect(mapStateToProps)(FooterFormDelegar);

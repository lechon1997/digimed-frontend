import React from "react";
import { connect } from "react-redux";
import { editarNombreFuncion } from "../actions/delegarTareasActions";
import { editarDescripcionFuncion } from "../actions/delegarTareasActions";
import { alertaNombre } from "../actions/delegarTareasActions";
import { Alert } from "reactstrap";

const EditarFuncionFormDelegar = ({
  funcionSeleccionadaStore,
  nombreFuncionCache,
  descripcionFuncionCache,
  alertNombre,
  dispatch,
}) => {
  const onChangeNombre = (e) => {
    const nombre = e.target.value;

    dispatch(editarNombreFuncion(nombre));

    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    if (!nombre.match(formatoNombre)) {
      dispatch(
        alertaNombre({
          value: "el nombre no es válido, debe corregirlo para continuar",
          isOpen: true,
        })
      );
    }

    if (nombre.length === 0) {
      dispatch(alertaNombre({ value: "", isOpen: false }));
    }

    if (nombre.match(formatoNombre) && alertNombre.isOpen) {
      dispatch(alertaNombre({ value: "", isOpen: false }));
    }
  };

  const onChangeDescripcion = (e) => {
    dispatch(editarDescripcionFuncion(e.target.value));
  };

  return (
    <div>
      <div className="container d-flex flex-column  align-items-center">
        <div class="mb-4 width-inputs-form-delegar">
          <label for="exampleFormControlInput1" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="nombre-funcion"
            onChange={onChangeNombre}
            defaultValue={nombreFuncionCache}
          />
        </div>
        <div class="mb-3 width-inputs-form-delegar">
          <label for="exampleFormControlTextarea1" class="form-label">
            Descripción
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onChangeDescripcion}
            defaultValue={descripcionFuncionCache}
          />
          <Alert className="mt-3" isOpen={alertNombre.isOpen} color="danger">
            {alertNombre.value}
          </Alert>
          {/**Se confirma la edición solo cuando le da al botón siguiente, si le da volver y se editó algún campo no se guarda los cambios */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  funcionSeleccionadaStore: state.delegarTareas.funcionSeleccionada,
  nombreFuncionCache: state.delegarTareas.nombreFuncionCache,
  descripcionFuncionCache: state.delegarTareas.descripcionFuncionCache,
  alertNombre: state.delegarTareas.alertaNombre,
});

export default connect(mapStateToProps)(EditarFuncionFormDelegar);

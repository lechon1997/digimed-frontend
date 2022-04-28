import React from "react";
import { connect } from "react-redux";
import { editarNombreFuncion } from "../actions/delegarTareasActions";
import { editarDescripcionFuncion } from "../actions/delegarTareasActions";

const EditarFuncionFormDelegar = ({
  funcionSeleccionadaStore,
  nombreFuncionCache,
  descripcionFuncionCache,
  dispatch,
}) => {
  const onChangeNombre = (e) => {
    dispatch(editarNombreFuncion(e.target.value));
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
});

export default connect(mapStateToProps)(EditarFuncionFormDelegar);

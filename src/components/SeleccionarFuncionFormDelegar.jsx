import React from "react";
import { connect } from "react-redux";
import { seleccionarFuncion } from "../actions/delegarTareasActions";
import { Table, Alert } from "reactstrap";

const SeleccionarFuncionFormDelegar = ({
  funciones,
  funcionSeleccionadaStore,
  dispatch,
}) => {
  const funcionSeleccionada = (p) => {
    dispatch(seleccionarFuncion(p));
  };
  return (
    <Table className="container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Seleccionar</th>
        </tr>
      </thead>
      <tbody>
        {funciones.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={p.descripcion}
            >
              {p.descripcion.length >= 17
                ? `${p.descripcion.slice(0, 17)}...`
                : p.descripcion}
            </td>
            <td>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked={
                  funcionSeleccionadaStore.seleccionada &&
                  p.id === funcionSeleccionadaStore.funcion.id
                    ? true
                    : false
                }
                onClick={(e) => {
                  funcionSeleccionada(p);
                }}
              ></input>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  funciones: state.delegarTareas.funciones,
  funcionSeleccionadaStore: state.delegarTareas.funcionSeleccionada,
});

export default connect(mapStateToProps)(SeleccionarFuncionFormDelegar);

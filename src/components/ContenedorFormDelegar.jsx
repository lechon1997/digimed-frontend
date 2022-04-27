import React from "react";
import { connect } from "react-redux";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Alert,
} from "reactstrap";

const ContenedorFormDelegar = ({ funciones, dispatch }) => {
  console.log(funciones);
  return (
    <div className="w-100 h-100 mb-3 mt-4">
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
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  funciones: state.delegarTareas.funciones,
});

export default connect(mapStateToProps)(ContenedorFormDelegar);

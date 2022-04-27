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

const ListaDeFunciones = ({ funciones, dispatch }) => {
  return (
    <div>
      <Table className="container">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {funciones.funciones.map((f) => (
            <tr key={f.id}>
              <td>{f.nombre}</td>
              <td>{f.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  funciones: state.funciones,
});

export default connect(mapStateToProps)(ListaDeFunciones);

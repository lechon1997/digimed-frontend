import React from "react";
import { connect } from "react-redux";
import CheckBoxPersonal from "./CheckBoxPersonal";
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

const ListaDePersonal = ({ personal, dispatch }) => {
  return (
    <div>
      <Table className="container">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {personal.personal.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.email}</td>
              <td>
                <CheckBoxPersonal enfermero={p} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  personal: state.personal,
});

export default connect(mapStateToProps)(ListaDePersonal);

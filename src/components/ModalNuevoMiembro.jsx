import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { OcultarModalNuevoMiembro } from "../actions/personalActions";
import { fetchNuevoEnfermero } from "../actions/personalActions";
import { AlertNombre } from "../actions/personalActions";
import { FormularioValido } from "../actions/personalActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Alert,
} from "reactstrap";

const ModalNuevoMiembro = ({
  isOpen,
  alertNombre,
  alertEmail,
  validForm,
  dispatch,
}) => {
  const ocultar_modal = () => {
    dispatch(
      FormularioValido({
        value: "",
        showAlert: false,
      })
    );
    dispatch(AlertNombre({ value: "", isOpen: false }));
    dispatch(OcultarModalNuevoMiembro());
  };

  const onSubmitxd = (e) => {
    e.preventDefault();
    const nombre = e.target.name.value;
    const email = e.target.email.value;
    const isActive = e.target.estado.checked;
    console.log("hola xdd");
    if (nombre.length === 0) {
      dispatch(
        FormularioValido({
          value: "Nombre no puede ser vacío",
          showAlert: true,
        })
      );
    } else if (email.length === 0) {
      dispatch(
        FormularioValido({
          value: "Email no puede ser vacío",
          showAlert: true,
        })
      );
    } else {
      dispatch(
        FormularioValido({
          value: "",
          showAlert: false,
        })
      );
      console.log("hola");
      dispatch(fetchNuevoEnfermero({ nombre, email, active: isActive }));
      ocultar_modal();
    }
  };

  const onChangeNombre = (e) => {
    const nombre = e.target.value;
    console.log(nombre);
    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    if (!nombre.match(formatoNombre)) {
      dispatch(AlertNombre({ value: "el nombre no es válido", isOpen: true }));
    }

    if (nombre.length === 0) {
      dispatch(AlertNombre({ value: "", isOpen: false }));
    }

    if (nombre.match(formatoNombre) && alertNombre.isOpen) {
      dispatch(AlertNombre({ value: "", isOpen: false }));
    }
  };

  return (
    <Modal className="mt-3" isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Ingresar nuevo enfermero</h3>
        </div>
      </ModalHeader>

      <form onSubmit={onSubmitxd}>
        <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={onChangeNombre}
            />
          </FormGroup>
          <Alert isOpen={alertNombre.isOpen} color="danger">
            {alertNombre.value}
          </Alert>
          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              id="email"
              type="email"
            />
          </FormGroup>
          <Alert isOpen={alertEmail.isOpen} color="danger">
            {alertEmail.value}
          </Alert>
          <FormGroup>
            <label>Activo:</label>
            <input
              className="form-check-input  ms-2"
              name="estado"
              type="checkbox"
              value=""
              id="estado"
            />
          </FormGroup>
          <Alert isOpen={validForm.showAlert} color="danger">
            {validForm.value}
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button
            className="btn btn-danger"
            onClick={ocultar_modal}
            id="btn-cancelar"
          >
            Cancelar
          </Button>

          <Button type="submit" color="primary" id="btn-nuevo-miembro">
            Confirmar
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.personal.isOpenModalNuevoMiembro,
  alertNombre: state.personal.alertNombre,
  alertEmail: state.personal.alertEmail,
  validForm: state.personal.validForm,
});

export default connect(mapStateToProps)(ModalNuevoMiembro);

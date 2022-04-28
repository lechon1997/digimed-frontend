import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { OcultarModalNuevoMiembro } from "../actions/personalActions";
import { fetchNuevoEnfermero } from "../actions/personalActions";
import { AlertNombre } from "../actions/personalActions";
import { AlertEmail } from "../actions/personalActions";
import { FormularioValido } from "../actions/personalActions";
import {
  nombreVacioAction,
  emailVacioAction,
  alertEmailAction,
  nombreCorrectoAction,
  limpiarAlertasAction,
} from "../actions/personalActions";

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
  alertaEmail,
  nombreVacio,
  emailVacio,
  nombreCorrecto,
  isOpen,
  alertNombre,
  validForm,
  personal,
  dispatch,
}) => {
  const ocultar_modal = () => {
    dispatch(limpiarAlertasAction());
    dispatch(OcultarModalNuevoMiembro());
  };

  const onSubmitxd = (e) => {
    e.preventDefault();

    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    const nombre = e.target.name.value;
    const email = e.target.email.value;
    const isActive = e.target.estado.checked;

    if (
      nombre.match(formatoNombre) &&
      nombre.length !== 0 &&
      email.length !== 0
    ) {
      dispatch(fetchNuevoEnfermero({ nombre, email, active: isActive }));
    } else {
      console.log("a pedazos...");

      if (nombre.length === 0) {
        dispatch(nombreVacioAction(true));
      } else {
        dispatch(nombreVacioAction(false));
      }

      if (email.length === 0) {
        dispatch(emailVacioAction(true));
      } else {
        dispatch(emailVacioAction(false));
      }
    }
  };

  const onChangeNombre = (e) => {
    const nombre = e.target.value;
    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    if (!nombre.match(formatoNombre)) {
      dispatch(nombreCorrectoAction(true));
    } else {
      dispatch(nombreCorrectoAction(false));
    }

    if (nombre.length === 0) {
      dispatch(nombreCorrectoAction(false));
    }
  };

  return (
    <Modal className="mt-3" isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Ingresar enfermera</h3>
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
          <Alert isOpen={nombreCorrecto} color="danger">
            El nombre no es válido
          </Alert>
          <Alert isOpen={nombreVacio} color="danger">
            Campo nombre incompleto
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
          <Alert isOpen={alertaEmail} color="danger">
            El email ingresado ya existe
          </Alert>
          <Alert isOpen={emailVacio} color="danger">
            Campo email incompleto
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
  validForm: state.personal.validForm,
  personal: state.personal.personal,
  alertaEmail: state.personal.alertEmail,
  nombreVacio: state.personal.nombreVacio,
  emailVacio: state.personal.emailVacio,
  nombreCorrecto: state.personal.nombreCorrecto,
});

export default connect(mapStateToProps)(ModalNuevoMiembro);

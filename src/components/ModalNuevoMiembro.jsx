import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { OcultarModalNuevoMiembro } from "../actions/personalActions";
import { fetchNuevoEnfermero } from "../actions/personalActions";
import { AlertNombre } from "../actions/personalActions";
import { AlertEmail } from "../actions/personalActions";
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
  alertaEmail,
  validForm,
  personal,
  dispatch,
}) => {
  const [emailState, setEmail] = useState(false);
  const [nombreValidoState, setNombreValidoState] = useState(false);
  const [nombreVacio, setNombreVacio] = useState(false);
  const [emailVacio, setEmailVacio] = useState(false);

  const ocultar_modal = () => {
    dispatch(
      FormularioValido({
        value: "",
        showAlert: false,
      })
    );
    setNombreVacio(false);
    setEmail(false);
    setNombreValidoState(false);
    setEmailVacio(false);
    dispatch(OcultarModalNuevoMiembro());
  };

  const onSubmitxd = (e) => {
    e.preventDefault();
    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    const nombre = e.target.name.value;
    const email = e.target.email.value;
    const isActive = e.target.estado.checked;

    if (
      !personal.filter((p) => p.email === email)[0] &&
      nombre.match(formatoNombre) &&
      nombre.length !== 0 &&
      email.length !== 0
    ) {
      dispatch(fetchNuevoEnfermero({ nombre, email, active: isActive }));
      ocultar_modal();
    } else {
      console.log("a pedazos...");
      if (personal.filter((p) => p.email === email)[0]) {
        setEmail(true);
      } else {
        setEmail(false);
      }

      if (nombre.length === 0) {
        setNombreVacio(true);
      } else {
        setNombreVacio(false);
      }

      if (email.length === 0) {
        setEmailVacio(true);
      } else {
        setEmailVacio(false);
      }
    }

    {
      /**
       * if (!emailState && !nombreValidoState && !nombreVacio && !emailVacio) {
      console.log("xdd xD");
    }

    if (email.length === 0) {
      dispatch(
        FormularioValido({
          value: "Email no puede ser vacío",
          showAlert: true,
        })
      );
    } else if (
      alertNombre.isOpen ||
      alertaEmail.isOpen ||
      validForm.showAlert ||
      emailState
    ) {
      return false;
    } else {
      dispatch(
        FormularioValido({
          value: "",
          showAlert: false,
        })
      );
      dispatch(fetchNuevoEnfermero({ nombre, email, active: isActive }));
      ocultar_modal();
    }
     */
    }
  };

  const onChangeNombre = (e) => {
    const nombre = e.target.value;
    const formatoNombre = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    if (!nombre.match(formatoNombre)) {
      //dispatch(AlertNombre({ value: "el nombre no es válido", isOpen: true }));
      setNombreValidoState(true);
    } else {
      setNombreValidoState(false);
    }

    if (nombre.length === 0) {
      setNombreValidoState(false);
    }

    {
      /**
    if (nombre.length === 0) {
      dispatch(AlertNombre({ value: "", isOpen: false }));
    }

    if (nombre.match(formatoNombre) && alertNombre.isOpen) {
      dispatch(AlertNombre({ value: "", isOpen: false }));
    }
     */
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
          <Alert isOpen={nombreValidoState} color="danger">
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
          <Alert isOpen={emailState} color="danger">
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
  alertaEmail: state.personal.alertEmail,
  validForm: state.personal.validForm,
  personal: state.personal.personal,
});

export default connect(mapStateToProps)(ModalNuevoMiembro);

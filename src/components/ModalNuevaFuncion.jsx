import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { OcultarModalNuevaFuncion } from "../actions/funcionActions";
import { AlertNombre } from "../actions/funcionActions";
import { FormularioValido } from "../actions/funcionActions";


import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Alert,
} from "reactstrap";

const ModalNuevaFuncion = ({
  isOpen,
  alertNombre,
  alertDescripcion,
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
    dispatch(OcultarModalNuevaFuncion());
  };
  console.log(validForm);
  const onSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.name.value;
    const descripcion = e.target.descripcion.value;
    const isActive = e.target.estado.checked;

    if (nombre.length === 0) {
      dispatch(
        FormularioValido({
          value: "Nombre no puede ser vacío",
          showAlert: true,
        })
      );
    } else if (descripcion.length === 0) {
      dispatch(
        FormularioValido({
          value: "Descripcion no puede ser vacío",
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
          <h3>Ingresar nueva funcion</h3>
        </div>
      </ModalHeader>

      <form onSubmit={onSubmit}>
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
            <label>Descripcion:</label>
            <input
              className="form-control"
              name="descripcion"
              id="descripcion"
              type="text"
            />
          </FormGroup>
          <Alert isOpen={alertDescripcion.isOpen} color="danger">
            {alertDescripcion.value}
          </Alert>

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

          <Button color="primary" id="btn-nueva-funcion">
            Agregar
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.funcion.isOpenModalNuevaFuncion,
  alertNombre: state.funcion.alertNombre,
  alertDescripcion: state.funcion.alertDescripcion,
  validForm: state.funcion.validForm,
});

export default connect(mapStateToProps)(ModalNuevaFuncion);

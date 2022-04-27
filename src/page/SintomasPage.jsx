import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { agregarSintomas } from "../actions/pacienteActions";
import { limpiar } from "../actions/verifyActions"
import {limpiarRedirectPaciente} from "../actions/pacienteActions.js"
const SintomasPage = ({ dispatch }) => {
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(limpiar())
    dispatch(limpiarRedirectPaciente())
  }, [])

  let params = useParams();
  const fechaHoy = new Date();

  const fechaLinda =
    fechaHoy.getFullYear() +
    "-" +
    (fechaHoy.getMonth() + 1) +
    "-" +
    fechaHoy.getDate();

  const onsubmit = (e) => {
    e.preventDefault();
    const sintomas = e.target.sintomas.value;

    if (sintomas.length === 0) {
      window.alert("Sintoma no puede ser nulo");
    } else {
      dispatch(
        agregarSintomas({
          id: params.id,
          fecha: fechaHoy,
          descripcion: sintomas,
        })
      );
      window.alert("cita ingresada correctamente");
      e.target.sintomas.value = "";
      navigate('/paciente/diagnostico/'+params.id)
    }
  };


  return (
    <div className="formulario-sintomas mt-3 w-50">
      <div className="d-flex justify-content-between">
        <label>Ingresar sintomas del paciente</label>
        <label className="mb-4">Fecha: {fechaLinda}</label>
      </div>
      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <textarea
            name="sintomas"
            className="form-control w-100"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end w-100">
          <button
            className="btn-ingresar2 "
            type="submit"
            id="btn-ingresar-sintomas"
          >
            confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null)(SintomasPage);

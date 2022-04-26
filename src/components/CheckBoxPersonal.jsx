import React from "react";
import { connect } from "react-redux";
import { fetchDisponibilidadEnfermero } from "../actions/personalActions";
const CheckBoxPersonal = ({ enfermero, dispatch }) => {
  const onChangeCheckBox = (e) => {
    dispatch(fetchDisponibilidadEnfermero(enfermero.id));
  };

  return (
    <>
      <input
        className="form-check-input  ms-2"
        name="estado"
        type="checkbox"
        value=""
        onChange={onChangeCheckBox}
        defaultChecked={enfermero.active}
      />
    </>
  );
};

export default connect(null)(CheckBoxPersonal);

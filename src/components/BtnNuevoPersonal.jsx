import React from "react";
import { connect } from "react-redux";
import { MostrarModalNuevoMiembro } from "../actions/personalActions";

const BtnNuevoPersonal = ({ dispatch }) => {
  const mostrar_modal = () => {
    dispatch(MostrarModalNuevoMiembro());
  };

  return (
    <div>
      <button onClick={mostrar_modal} className="btn-nuevo-personal">
        Nuevo miembro
      </button>
    </div>
  );
};

export default connect(null)(BtnNuevoPersonal);

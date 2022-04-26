import React from "react";
import { connect } from "react-redux";
import ModalNuevoMiembro from "../components/ModalNuevoMiembro";
import { CargarPersonal } from "../actions/personalActions";
import ListaDePersonal from "../components/ListaDePersonal";
import BtnNuevoPersonal from "../components/BtnNuevoPersonal";

const ListaDePersonalPage = ({ dispatch }) => {
  dispatch(CargarPersonal());

  return (
    <div className="lista-de-personal-page-contenedor">
      <div className="w-100 d-flex justify-content-end">
        <BtnNuevoPersonal />
      </div>
      <div>
        <ListaDePersonal />
        <ModalNuevoMiembro />
      </div>
    </div>
  );
};

export default connect(null)(ListaDePersonalPage);

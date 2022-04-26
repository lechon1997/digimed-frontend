import React from "react";
import { Link } from "react-router-dom";
import ListaDeFuncionesPage from "../page/ListaDeFuncionesPage";
import ListaDePersonalPage from "../page/ListaDePersonalPage";
import NuevoPacientePage from "../page/NuevoPacientePage";
import VerificarDniPage from "../page/VerificarDniPage"
import CardOption from "./CardOption";
import TituloCardOption from "./TituloCardOption";
import ImagenCardOption from "./ImagenCardOption";
import img1 from "../static/imagenes-cards/saludable.png";
import img2 from "../static/imagenes-cards/doctor.png";
import img3 from "../static/imagenes-cards/lista-de-tareas.png";
const Menu = () => {
  return (
    <div className="container d-flex flex-wrap list-cards-option">
      <Link to="/verificar-dni">
        <CardOption>
          <TituloCardOption titulo={"Nuevo paciente"} />
          <ImagenCardOption img={img1} />
        </CardOption>
      </Link>
      <Link to="/lista-de-personal">
        <CardOption>
          <TituloCardOption titulo={"Lista de personal"} />
          <ImagenCardOption img={img2} />
        </CardOption>
      </Link>
      <Link to="/lista-de-funciones">
        <CardOption>
          <TituloCardOption titulo={"Lista de funciones"} />
          <ImagenCardOption img={img3} />
        </CardOption>
      </Link>
    </div>
  );
};

export default Menu;

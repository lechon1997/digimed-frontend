import React from "react";

const TituloCardOption = ({ titulo }) => {
  return (
    <div className="card-option-contenedor-titulo bg-primary">
      <h3 className="titulo-h3-card-option">{titulo}</h3>
    </div>
  );
};

export default TituloCardOption;

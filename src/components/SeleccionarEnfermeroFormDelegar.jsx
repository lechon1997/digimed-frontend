import React from "react";
import { Table, Alert } from "reactstrap";
import { connect } from "react-redux";
import { seleccionarEnfermera } from "../actions/delegarTareasActions";

const SeleccionarEnfermeroFormDelegar = ({
  enfermeras,
  enfermeraSeleccionada,
  dispatch,
}) => {
  console.log(enfermeras);
  const enfermeraSeleccionadaXd = (e) => {
    dispatch(seleccionarEnfermera(e));
  };
  return (
    <Table className="container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Seleccionar</th>
        </tr>
      </thead>
      <tbody>
        {enfermeras.map((p) => {
          return p.active ? (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.email}</td>
              <td>
                {
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked={
                      enfermeraSeleccionada.seleccionada &&
                      p.id === enfermeraSeleccionada.enfermera.id
                        ? true
                        : false
                    }
                    onClick={(e) => {
                      enfermeraSeleccionadaXd(p);
                    }}
                  ></input>
                }
              </td>
            </tr>
          ) : (
            ""
          );
        })}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  enfermeras: state.delegarTareas.enfermeras,
  enfermeraSeleccionada: state.delegarTareas.enfermeraSeleccionada,
});

export default connect(mapStateToProps)(SeleccionarEnfermeroFormDelegar);

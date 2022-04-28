import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Alert,
} from "reactstrap";

const ListaDeFunciones = () => {
    const funciones = useSelector(state => state.funciones.funciones);
    const navigate = useNavigate();
    const goBackHandler = (e) => {
        e.preventDefault();
        navigate("/lista-de-funciones")

    }


    return (
        <div>
            <Table className="container mt-3 ">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {funciones.map((f) => (
                        <tr key={f.id}>
                            <td>{f.nombre}</td>
                            <td>{f.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <button type="submit" className="btn-ingresar3 mb-3" onClick={goBackHandler}>
                Volver
            </button>
        </div>
    );
};



export default ListaDeFunciones;

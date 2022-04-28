import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {agregarFuncion} from '../actions/funcionActions'

const ModalNuevaFuncion = () => {

    const dispatch= useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const descripcion = e.target.descripcion.value;

        if (!nombre.trim()) {
            window.alert("el campo nombre es obligatorio");
            return false;
        }
        if (!descripcion.trim()) {
            window.alert("el campo descripcion es obligatorio");
            return false;
        }
        if (/^([0-9])*$/.test(nombre)) {
            window.alert("Solo debe haber letras en el campo nombre");
            return false;
        }
        if (/^([0-9])*$/.test(descripcion)) {
            window.alert("Solo debe haber letras en el campo descripcion");
            return false;
        }
        dispatch(agregarFuncion({nombre,descripcion}));
        e.target.nombre.value='';
        e.target.descripcion.value='';
        window.alert("Funcion agregada exitosamente")
    }
    const mostrarHandler = (e) => {
        navigate("/ver-funciones")
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="login shadow ">
                <form
                    onSubmit={submitHandler}
                    className="d-flex flex-column align-items-center"
                >
                    <input
                        type="text"
                        name="nombre"
                        className="input-lindo mb-4"
                        placeholder="Ingrese nombre"
                        id="textNombre"
                        aria-describedby="nombreHelp"
                    />
                    <input
                        type="text"
                        name="descripcion"
                        className="input-lindo mb-4"
                        placeholder="Ingrese descripcion"
                        id="textDescripcion"
                        aria-describedby="descripcionHelp"
                    />
                    <button type="submit" className="btn-ingresar" onSubmit={submitHandler}>
                        Agregar
                    </button>

                </form>
                <div className="d-flex flex-column align-items-center">
                    <button type="text" className="btn-ingresar  mt-3 " onClick={mostrarHandler}>
                        Ver Funciones
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ModalNuevaFuncion
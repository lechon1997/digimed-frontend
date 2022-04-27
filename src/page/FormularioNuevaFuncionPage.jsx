import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { agregarFuncion } from '../actions/funcionActions';

const FormularioNuevaFuncionPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            window.alert("el nombre solo debe contener letras");
            return false;
        }
        if (/^([0-9])*$/.test(descripcion)) {
            window.alert("la descripcion debe contener solo letras");
            return false;
        }


         dispatch(agregarFuncion({nombre,descripcion}));

    }


    return (
        <div className="d-flex justify-content-center mt-5">
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
                        id="exampleInputNombre1"
                        aria-describedby="nombreHelp"
                    />
                    <input
                        type="text"
                        name="descripcion"
                        className="input-lindo mb-4"
                        placeholder="Ingrese descripcion"
                        id="exampleInputNombre1"
                        aria-describedby="descripcionHelp"
                    />
                    <button type="submit" className="btn-ingresar" >
                        Agregar
                    </button>
                </form></div>
        </div>

    )
}

export default FormularioNuevaFuncionPage
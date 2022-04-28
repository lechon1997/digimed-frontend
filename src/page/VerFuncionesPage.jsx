import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from "../actions/funcionActions"
import ListaDeFunciones from '../components/ListaDeFunciones';

const FormularioNuevaFuncionPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.CargarFunciones())
    }, [dispatch])

    return (
        <div className="d-flex justify-content-center mt-5">
            <ListaDeFunciones />
        </div>

    )
}

export default FormularioNuevaFuncionPage
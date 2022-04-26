import React from 'react'
import { useParams } from "react-router-dom";
import FormDiagnostico from '../components/FormDiagnostico';
const DiagnosticoPage = () => {
    let params = useParams();
    console.log(params);
    return (
      <div><FormDiagnostico/></div>
    )
}

export default DiagnosticoPage
//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import LoginPage from "./page/LoginPage";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { connect } from "react-redux";
import { CargandoUsuario } from "./actions/authActions";
import { UsuarioCargado } from "./actions/authActions";

const auth = getAuth(firebaseApp);

function App({ cargando, dispatch }) {
  const [user] = useAuthState(auth);

  //funcion para evitar parpadeo de componentes mientras se carga el usuario
  const cargarUsuario = () => {
    dispatch(UsuarioCargado());
  };
  //dispatch(UsuarioCargado());
  setTimeout(cargarUsuario, 300);

  return (
    <div className="bg-white vh-100">
      {cargando ? (
        ""
      ) : (
        <div>
          <Header user={user} auth={auth} />
          <div className="d-flex justify-content-center">
            {user ? <HomePage /> : <LoginPage />}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cargando: state.auth.cargando_usuario,
});
export default connect(mapStateToProps)(App);

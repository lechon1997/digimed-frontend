import React from "react";
import { Link } from "react-router-dom";
const Header = ({ user, auth }) => {
  return (
    <header className="bg-primary d-flex justify-content-between align-items-center header pe-2">
      <div className="fondo-logo">
        <Link className="navbar-brand" to="/">
          <img className="imagen-xd" src="./digimed.png" />
        </Link>
      </div>
      <div>
        {user && (
          <Link to="/">
            <button
              onClick={() => {
                auth.signOut();
              }}
              className="cerrar-sesion"
            >
              Cerrar sesión
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

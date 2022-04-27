import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss"; // Or the one above.
import "font-awesome/css/font-awesome.css";
// import "tempusdominus-bootstrap/build/css/tempusdominus-bootstrap.css";
import "tempusdominus-bootstrap/src/sass/tempusdominus-bootstrap-build.scss"; // Or the one above.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/Store.jsx";
import "./index.css";
import "./styles/responsive.scss";

//theme
import "primereact/resources/themes/lara-light-cyan/theme.css";

// primeflex
import "/node_modules/primeflex/primeflex.css";

// primeicons
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import store from "./store/RootStore";
import { Provider } from "mobx-react";
import "./styles/index.css";

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./reducers/count"

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

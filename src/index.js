import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
// this import is both development and production if you don't want to use redux-devtools on prodction use the below import
// import {  composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension"
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { reducers } from "./reducer";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

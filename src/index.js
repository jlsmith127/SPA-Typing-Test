import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import timer from "./reducer";

var destination = document.querySelector("#root")
var store = createStore(timer);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        destination
);
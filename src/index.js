import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import middlewareLogger from "./middleware/middleware-logger";
import quoteReducer from "./reducers/QuoteReducer";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  quoteReducer,
  applyMiddleware(middlewareLogger, thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

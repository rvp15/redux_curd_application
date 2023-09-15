import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Pass the store, so all components have access to store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Keep server warm by calling /poke endpoint every 4 minutes
const keepServerWarm = () => {
  fetch('/poke')
    .catch(error => console.error('Error in keep-warm request:', error));
};

setInterval(keepServerWarm, 660000); // 4 minutes
keepServerWarm();

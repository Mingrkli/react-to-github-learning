import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import bootstrap (bootstrap is just a css library that gives our app an modern feel)
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Here we are extending the html vocabulary and that means for this instance is that where ever we have a counter element we'll get the output of the counter component which is what we have created in the counter.jsx */}
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

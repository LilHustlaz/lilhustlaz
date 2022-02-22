import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, NotFound } from "./components";
require("typeface-montserrat");


ReactDOM.render(
  <div id="body">
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<MainPage />} />
      </Routes>
    </Router>

  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();

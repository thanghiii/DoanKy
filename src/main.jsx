import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Giohang from "./Giohang/index.jsx";
import Thanhtoan from "./Thanhtoan/Thanhtoan.jsx";
import Login from "./Login/index.jsx";
import Sigup from "./sigup/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes path="/">
        <Route path="/" element={<App />} />
        <Route path="/Giohang" element={<Giohang />}></Route>
        <Route path="/Thanhtoan" element={<Thanhtoan />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/sigup" element={<Sigup />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

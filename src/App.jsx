import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./routes/login/Login.jsx";
import Register from "./routes/register/Register.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path={"/"}/>
          <Route element={<Register/>} path={"/register"}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

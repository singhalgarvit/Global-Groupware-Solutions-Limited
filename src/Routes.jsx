import React, {useContext} from "react";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import {AuthContext} from "./context/authContext";

function CustomRoutesComponent() {
  const {token} = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <App /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default CustomRoutesComponent;

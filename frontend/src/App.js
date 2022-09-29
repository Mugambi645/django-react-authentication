import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Login from "./views/loginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import HomePage from "./views/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
 <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    
      </Routes>
      </AuthProvider>
    </BrowserRouter>

 </>
  );
}

export default App;

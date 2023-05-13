import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
export const BASE_URL = "https://api.quotable.io";

function App() {
  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);
  return (
    <>
      {" "}
      <Navbar />
      <main style={{ minHeight: "75vh" }}>
        <Routes>
          <Route path="/" element={token ? <Hotels /> : <Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>Nepostojeca stranica</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

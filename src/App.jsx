import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./layouts/Navbar";
import { Ejercicios } from "./pages/Ejercicios";
import { TresEnLinea } from "./pages/TresEnLinea";

export default function MyApp() {
  return (
    <>
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Ejercicios />}
        />

        <Route
          path="/tres-en-linea"
          element={<TresEnLinea />}
        />

      </Routes>

    </BrowserRouter>
    </>
  );
}

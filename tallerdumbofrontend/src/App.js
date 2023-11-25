import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './Components/Login/Login';
import Usuarios from './Components/Usuarios/Usuarios';
import "react-toastify/dist/ReactToastify.css";

/**Llama a la funcion principal*/
function App() {

  /**declaro una variable llamada token, ahi es donde se va ser el archivo*/
  const [token, setToken] = useState(localStorage.getItem("token"));

  /**carga el token para usarse en otras componentes*/
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
      <div>
        <BrowserRouter>
          <Routes>
              {/* la unica ruta aceptable que no necesita token
            si el taller hubiese pedido registrarse o iniciar seccion con el cliente en si
            la ruta "/" puede usarse como el login, debido a que hay opciones */}

            <Route path="/" element={<Login />} />
            <Route path="/Usuarios" element={<Usuarios />} />
              {/*aca van las rutas que tienen token-->*/}
            {token ? (
                <>
                    {/*solamente se necesita la ruta de los usuarios nada más */}
                  <Route path="/Usuarios" element={<Usuarios />} />
                </>

            ) : (
                <>
                    {/*aca las rutas se van reemplazando por otras que no necesitan el token*/}
                  <Route path="/Usuarios" element={<Navigate to="/" replace />} />
                </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
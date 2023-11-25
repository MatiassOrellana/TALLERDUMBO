import React, { useState } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";
import Usuarios from "../Usuarios/Usuarios";

const AgregarUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        rutorDNI: ''
        // Agrega más campos según tus requisitos
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realiza la llamada a la API para agregar el usuario
        axios.post('https://localhost:3000/api/Usuarios', usuario)
            .then((response) => {
                console.log('Usuario agregado con éxito:', response.data);
                // Puedes realizar alguna acción adicional, como redireccionar a la lista de usuarios
            })
            .catch((error) => {
                console.error('Error al agregar usuario:', error);
            });
        <Route path="/Usuarios" element={<Usuarios />} />
    };

    const handleAtras = () => {
        <Route path="/Usuarios" element={<Usuarios />} />
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
            </label>
            <br />
            <label>
                Apellido:
                <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} />
            </label>
            <br />
            <label>
                Correo:
                <input type="email" name="correo" value={usuario.correo} onChange={handleChange} />
            </label>
            <br />
            <label>
                RutOrDNI:
                <input type="text" name="rut" value={usuario.rutorDNI} onChange={handleChange} />
            </label>
            <br />
            {/* Agrega más campos según tus requisitos */}
            <button onClick={() => handleSubmit()}>Agregar</button>
            <button onClick={() => handleAtras()}>Atras</button>
        </form>
    );
};

export default AgregarUsuario;
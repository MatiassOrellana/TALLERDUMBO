import React, { useState } from 'react';
import Usuarios from "../Usuarios/Usuarios";
import {Route} from "react-router-dom";
import axios from 'axios';

const UsuarioSeleccionado = ({ isOpen, onClose, usuario, onEditarUsuario }) => {
    const [editedUsuario, setEditedUsuario] = useState({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        puntosObtenidos: usuario.puntosObtenidos,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUsuario(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realiza la llamada a la API para editar el usuario
        axios.put(`https://localhost:3000/api/Usuarios/${usuario.id}`, editedUsuario)
            .then((response) => {
                console.log('Usuario editado con éxito:', response.data);
                // Puedes realizar alguna acción adicional, como actualizar la lista de usuarios
                onEditarUsuario(usuario.id, editedUsuario);
                onClose();
            })
            .catch((error) => {
                console.error('Error al editar usuario:', error);
            });
        <Route path="/Usuarios" element={<Usuarios />} />
        onClose();
    };

    const handleAtras = () => {
        <Route path="/Usuarios" element={<Usuarios />} />
    };

    return (
        <>
            <div>
                <h2>Detalles del Usuario:</h2>
                <p>Nombre: {usuario.nombre}</p>
                <p>Apellido: {usuario.apellido}</p>
                <p>Correo: {usuario.correo}</p>
                <p>Puntos obtenidos: {usuario.puntosObtenidos}</p>
                {/* Agrega más detalles según las propiedades de tus usuarios */}
            </div>
            {isOpen && (
                <div>
                    <h3>Editar Usuario</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={editedUsuario.nombre} onChange={handleChange} />

                        <label>Apellido:</label>
                        <input type="text" name="apellido" value={editedUsuario.apellido} onChange={handleChange} />

                        <label>Correo:</label>
                        <input type="email" name="correo" value={editedUsuario.nombre} onChange={handleChange} />

                        <label>Puntos obtenidos:</label>
                        <input type="number" name="puntos obtenidos" value={editedUsuario.apellido} onChange={handleChange} />
                        {/* Agrega más campos según las propiedades de tus usuarios */}

                        <button onClick={() => handleSubmit()}>Editar</button>
                        <button onClick={() => handleAtras()}>Atras</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default UsuarioSeleccionado;
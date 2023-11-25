import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from "../Login/Login";
import {Route} from "react-router-dom";
import UsuarioSeleccionado from "../UsuarioSeleccionado/UsuarioSeleccionado";
import AgregarUsuario from "../agregarUsuario/AgregarUsuario";
const Usuarios = () => {
    // Estado para almacenar la lista de usuarios
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Función para realizar la solicitud HTTP GET al servidor
        const fetchUsers = async () => {
            try {
                // Cambia la URL según la configuración de tu servidor
                const response = await axios.get('https://localhost:3000/api/Administrador/usuarios');

                // Actualiza el estado con la lista de usuarios obtenida
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios', error);
            }
        };

        // Llamada a la función para realizar la solicitud al cargar el componente
        fetchUsers();
    }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

    const handleEliminarUsuario = async (id) => {
        try {
            // Lógica para eliminar el usuario con el id proporcionado
            await axios.delete(`https://localhost:3000/api/Administrador/usuarios/${id}`);
            // Actualizar la lista después de eliminar
            const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
            setUsuarios(updatedUsuarios);
        } catch (error) {
            console.error('Error al eliminar el usuario', error);
        }
    };

    const handleEditarUsuario = (id) => {

        <Route path="/UsuarioSeleccionado/:id" element={<UsuarioSeleccionado />} />
        // Lógica para editar el usuario con el id proporcionado
        // Puedes redirigir a una página de edición o mostrar un formulario modal
    };

    const handleAgregarUsuario = () => {

        <Route path="/AgregarUsuario" element={<AgregarUsuario />} />

    };

    const handleCerrarSesión = () => {

        <Route path="/" element={<Login />} />

    };


    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Numero identificación</th>
                    <th>Correo electronico</th>
                    <th>Puntos obtenidos</th>
                    <th>Acciones</th>
                    {/* Agrega más columnas según las propiedades de tus usuarios */}
                </tr>
                </thead>
                <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.rutorDNI}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.puntosObtenidos}</td>
                        <td>
                            <button onClick={() => handleEditarUsuario(usuario.id)}>Editar</button>
                            <button onClick={() => handleEliminarUsuario(usuario.id)}>Eliminar</button>
                        </td>
                        {/* Agrega más celdas según las propiedades de tus usuarios */}
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => handleAgregarUsuario()}>Agregar</button>
            <button onClick={() => handleCerrarSesión()}>Salir</button>
        </div>
    );
};

export default Usuarios;
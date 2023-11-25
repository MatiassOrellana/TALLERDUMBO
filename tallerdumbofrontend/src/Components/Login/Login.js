import React, { useState } from 'react';
import axios from 'axios';
import {Route} from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/Autentificacion/Login', credentials, {
                withCredentials: true,
            });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log('Inicio de sesión exitoso');
                // Redirigir o realizar otras acciones después del inicio de sesión exitoso
            } else {
                console.log('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            console.log('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Usuario:
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
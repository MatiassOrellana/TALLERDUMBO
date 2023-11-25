import * as Yup from "yup";


export const loginSchema = Yup.object().shape({
    UsuarioLogin: Yup.string()
        .required('El usuario es obligatorio.'),
    contraseña: Yup.string()
        .required('La contraseña es obligatoria.'),
});
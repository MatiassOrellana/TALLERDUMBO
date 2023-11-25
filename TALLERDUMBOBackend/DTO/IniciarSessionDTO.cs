namespace TALLERDUMBOBackend.DTO
{
    public class IniciarSessionDTO
    {

        /**Estos atributos son del administrador solamente**/
        /**el usuario del administrador**/
        public string? username { get; set; }

        /**la contraseña del administrador**/
        public string? password { get; set; }

    }
}

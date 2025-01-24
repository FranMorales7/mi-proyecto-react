import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css"; /* Importa estilos de Bootstrap */
import "bootstrap/dist/js/bootstrap.bundle.min.js"; /* Importa scripts de Bootstrap para funcionalidades dinámicas */
import './ContactComponent.css'; /* Estilos personalizados para este componente */

/* Función principal del componente ContactComponent */
function ContactComponent() {

    return (
        /* Sección principal del componente de contacto */
        <div id='contact'> 
            {/* Línea horizontal decorativa que separa esta sección de otras */}
            <hr className='contactSeparator'/> 

            {/* Contenedor principal del contenido de contacto */}
            <div className='divContent'> 
                {/* Texto introductorio para invitar al usuario a contactarte */}
                <p className='getContact'>
                    If you think I could be perfect to be part of your team of professionals, don't doubt to send me an email and I will be happy to make an appointment with you.
                </p>
                <br/>

                {/* Formulario para enviar un correo */}
                <form action="mailto:lopezmoralesfrancisco18@gmail.com" method='POST'>
                    {/* Etiqueta e input para el nombre de la empresa */}
                    <label htmlFor="enterprise">Enterprise's name:  </label>
                    <input type="text" name='enterprise' id='enterprise'/>
                    
                    {/* Etiqueta e input para el nombre de la persona que contacta */}
                    <label htmlFor="person">Your name:  </label>
                    <input type="text" name='person' id='person'/>
            
                    {/* Etiqueta e input para el correo electrónico de contacto */}
                    <label htmlFor="email">Contact e-mail:  </label>
                    <input type="text" name='email' id='email'/>
                    
                    {/* Etiqueta y textarea para detallar el asunto o mensaje */}
                    <label htmlFor="issue">Issue:  </label>
                    <textarea name='issue' id='issue'/>
                    
                    {/* Botón para enviar el formulario al correo electrónico especificado */}
                    <input type="submit" value={"Send to Francisco "} /> 
                </form>
                
            </div>
        </div>
    );
}

export default ContactComponent; /* Exporta el componente para su uso en otras partes de la aplicación */

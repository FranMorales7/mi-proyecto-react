// Importaciones necesarias
import React from 'react'; // Importa la biblioteca React para crear el componente
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap para diseño responsivo
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JavaScript de Bootstrap para componentes interactivos
import "./FooterComponent.css"; // Estilos personalizados para el pie de página
import logo from '../media/logo.png'; // Importa el logo de la carpeta de medios

// Importa íconos de diferentes bibliotecas
import { RiInstagramFill } from "react-icons/ri"; // Ícono de Instagram
import { FaRegCopyright } from "react-icons/fa6"; // Ícono de copyright
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6"; // Íconos de LinkedIn, GitHub y X (Twitter)

function FooterComponent() {
    // Componente funcional que representa el pie de página de la página web

    return (
        <footer className='footer'>
            {/* Enlace al inicio de la página con el logo */}
            <a href="#">
                <img src={logo} alt="" className='logoImage' /> {/* Imagen del logo */}
            </a>
            
            {/* Contenido de redes sociales */}
            <div className='socialContent'>
               <p>Follow me on</p> {/* Texto indicativo */}
                <ul>
                    {/* Lista de redes sociales con enlaces y íconos */}
                    <li>
                        <a href="https://www.linkedin.com/in/francisco-morales-553402220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin /> {/* Ícono de LinkedIn */}
                        </a>
                    </li> /
                    <li>
                        <a href="https://github.com/FranMorales7">
                            <FaSquareGithub /> {/* Ícono de GitHub */}
                        </a>
                    </li> /
                    <li>
                        <a href="https://x.com/FranZ9990">
                            <FaSquareXTwitter /> {/* Ícono de X (Twitter) */}
                        </a>
                    </li> /
                    <li>
                        <a href="https://www.instagram.com/franlmor77">
                            <RiInstagramFill /> {/* Ícono de Instagram */}
                        </a>
                    </li>
                </ul> 
            </div>

            {/* Contenido de derechos de autor */}
            <div className='copyRightContent'>
               <p>
                   <FaRegCopyright /> {/* Ícono de copyright */}
                   Francisco Morales 2025 {/* Texto del copyright */}
               </p>
            </div>
        </footer>
    );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default FooterComponent;

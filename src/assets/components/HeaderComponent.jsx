// Importación de React para crear componentes.
import React from 'react';

// Importación de estilos de Bootstrap para diseño y funcionalidad responsive.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importación de estilos personalizados.
import './HeaderComponent.css';

// Importación del logo utilizado en el componente.
import logo from '../media/logo.png';

// Definición del componente HeaderComponent.
function HeaderComponent(props) {
    // Desestructuración de las props para obtener los enlaces de navegación.
    const { links } = props;

    return (
        // Contenedor principal del encabezado con la clase personalizada y diseño fluido.
        <header className='headStyle container-fluid'>
            {/* Contenedor del logo */}
            <div className='logoContainer'>
                <a href="#">
                    {/* Renderizado del logo con clases personalizadas para estilos */}
                    <img src={logo} alt="" className='logo' />
                </a>
            </div>
            
            {/* Navegación principal */}
            <nav className='navStyle'>
                {/* Lista de navegación usando las clases de Bootstrap */}
                <ul class="nav nav-tabs">
                    {/* Elemento de la lista para cada enlace de navegación */}
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#Beginning">
                            {links.begin} {/* Texto dinámico del enlace (propiedad 'begin') */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#aboutMe">
                            {links.about} {/* Texto dinámico del enlace (propiedad 'about') */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#projects">
                            {links.projects} {/* Texto dinámico del enlace (propiedad 'projects') */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#contact">
                            {links.contact} {/* Texto dinámico del enlace (propiedad 'contact') */}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

// Exportación del componente para ser utilizado en otros archivos.
export default HeaderComponent;

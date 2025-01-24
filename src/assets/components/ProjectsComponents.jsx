// Importación de React y el hook useState para manejar el estado del componente.
import React, { useState } from 'react';

// Importación de estilos de Bootstrap para diseño y funcionalidad responsive.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importación de estilos personalizados.
import "./ProjectsComponents.css";

// Importación de imágenes utilizadas en los proyectos.
import project1 from "../media/ahorcado_game.png";
import project2 from "../media/game_store.png";
import project3 from "../media/blackjack_game.png";

// Componente principal que renderiza los proyectos.
function ProjectsComponents() {
    // Estados para manejar la visibilidad del primer proyecto.
    const [isBubble, setBubble] = useState(true); // Controla si se muestra la burbuja inicial.
    const [isVisible, setVisible] = useState(false); // Controla si se muestra la tarjeta del proyecto.

    // Función para manejar el clic en la burbuja del primer proyecto.
    const handleClick = () => {
        setBubble(false); // Oculta la burbuja.
        setVisible(true); // Muestra la tarjeta del proyecto.
    };

    // Estados para manejar la visibilidad del segundo proyecto.
    const [isBubble2, setBubble2] = useState(true); // Controla si se muestra la burbuja inicial.
    const [isVisible2, setVisible2] = useState(false); // Controla si se muestra la tarjeta del proyecto.

    // Función para manejar el clic en la burbuja del segundo proyecto.
    const handleClick2 = () => {
        setBubble2(false); // Oculta la burbuja.
        setVisible2(true); // Muestra la tarjeta del proyecto.
    };

    // Estados para manejar la visibilidad del tercer proyecto.
    const [isBubble3, setBubble3] = useState(true); // Controla si se muestra la burbuja inicial.
    const [isVisible3, setVisible3] = useState(false); // Controla si se muestra la tarjeta del proyecto.

    // Función para manejar el clic en la burbuja del tercer proyecto.
    const handleClick3 = () => {
        setBubble3(false); // Oculta la burbuja.
        setVisible3(true); // Muestra la tarjeta del proyecto.
    };

    return (
        <div className="container divMain" id='projects'>
            {/* Separador visual para la sección de proyectos */}
            <hr className='projectSeparator' />

            {/* Título de introducción a los proyectos */}
            <div className='pProjects'>
                <p>Here there is a few of my many projects</p>
            </div>

            {/* Contenedor de los proyectos */}
            <div className='contentProjects'>
                {/* Primer proyecto */}
                {isVisible && (
                    <div id='project1' className='divProject' onClick={handleClick}>
                        {/* Tarjeta con detalles del proyecto */}
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project1} class="card-img-top" alt="project 1 image" />
                            <div className="card-body">
                                <h5 className="card-title">"Ahorcado" game</h5>
                                <p className="card-text">
                                    The traditional Spanish's game, "El ahorcado" now with Js, CSS, Html and Json.
                                </p>
                                <a href="https://github.com/FranMorales7/Juego_Ahorcado" className="btn btn-warning">Know more!</a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Burbuja inicial para el primer proyecto */}
                {isBubble && (
                    <a className='contentBubble' href="#project1" onClick={handleClick}>
                        <div className='bubble'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                )}

                {/* Segundo proyecto */}
                {isVisible2 && (
                    <div id='project2' className='divProject2' onClick={handleClick2}>
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project2} class="card-img-top" alt="project 2 image" />
                            <div className="card-body">
                                <h5 className="card-title">Section store</h5>
                                <p className="card-text">
                                    Making of a store section of a WebPage whose data is set on an external API. The section include a filter.
                                </p>
                                <a href="https://github.com/FranMorales7/Store_V.2" className="btn btn-warning">Know more!</a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Burbuja inicial para el segundo proyecto */}
                {isBubble2 && (
                    <a className='contentBubble' href="#project2" onClick={handleClick2}>
                        <div className='bubble2'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                )}

                {/* Tercer proyecto */}
                {isVisible3 && (
                    <div id='project3' className='divProject3' onClick={handleClick3}>
                        <div className="card" style={{ width: "100%" }}>
                            <img src={project3} class="card-img-top" alt="project 3 image" />
                            <div className="card-body">
                                <h5 className="card-title">Blackjack game</h5>
                                <p className="card-text">
                                    The famous game card's make it with Js, HTML and stiling with CSS.
                                </p>
                                <a href="https://github.com/FranMorales7/BlackJack---avanzado" className="btn btn-warning">Know more!</a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Burbuja inicial para el tercer proyecto */}
                {isBubble3 && (
                    <a className='contentBubble' href="#project3" onClick={handleClick3}>
                        <div className='bubble3'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}

// Exportación del componente para su uso en otras partes de la aplicación.
export default ProjectsComponents;

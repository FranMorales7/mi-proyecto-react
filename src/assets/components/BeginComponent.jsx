import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './BeginComponent.css' // Se importa el archivo CSS específico para este componente
import perfil from "../media/perfil.png" // Se importa la imagen del perfil

// Componente funcional BeginComponent
function BeginComponent(){
    return(
        // Contenedor principal de la sección, con un margen superior (mt-5) usando clases de Bootstrap
        <div class='container-fluid mt-5' id='Beginning'>
            {/* Fila de Bootstrap (row) que contendrá dos columnas */}
            <div class='row mi'>
                {/* Columna 1: Contenido textual (nombre, título y rol) alineado a la izquierda */}
                <div class='d-flex justify-content-start col-6' className='mainStyle'>
                    <p className='intro'>Francisco</p> {/* Nombre de la persona */}
                    <p className='intro_2'>Morales</p> {/* Apellido de la persona */}
                    <p><small className='subName'>Web Developer</small></p> {/* Título profesional */}
                </div>
                {/* Columna 2: Imagen del perfil alineada a la derecha */}
                <div class='d-flex justify-content-end col-6'>
                    <img src={perfil} alt="Perfil" /> {/* Imagen del perfil importada */}
                </div>
            </div>

            {/* Información adicional sobre Francisco */}
            <div className='info'>
                {/* Descripción sobre Francisco */}
                <p>I'm Francisco a newly graduated web developer with a solid understanding of the main programming languages and web technologies.</p> 
                <p>My ability to learn quickly allows me to easily adapt to new projects and challenges. I consider myself a collaborative person, always willing to work as part of a team and contribute ideas to optimize workflow.</p> 
                <p>My focus is always on finding innovative and efficient solutions to solve problems, ensuring that each project meets its objectives successfully.</p> 
            </div>
        </div>
    );
}

export default BeginComponent;

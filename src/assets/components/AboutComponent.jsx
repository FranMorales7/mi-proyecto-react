import React from 'react'; // Importa la librería React para poder usar JSX y construir el componente
import './AboutComponent.css'; // Importa el archivo CSS para los estilos del componente

function AboutComponent(){
    return (
        // Contenedor principal de la sección "About Me" (Acerca de mí)
        <div class='container' id='aboutMe'>
            {/* Línea separadora (se utilizará para separar visualmente la sección */}
            <hr className='separator'/>
            
            {/* Contenedor principal que agrupa la información sobre el usuario */}
            <div class='row-col' className='about'>
                
                {/* Sección de información personal */}
                <div className='info_About'>
                    <h3><strong>Francisco Javier López Morales</strong></h3> {/* Nombre completo con formato negrita */}
                    <p>📍 Dúrcal, Granada, Spain</p> {/* Ubicación */}
                    <p>📞 +34 642 740 304</p> {/* Número de teléfono */}
                    <p>📧 lopezmoralesfrancisco18@gmail.com</p> {/* Correo electrónico */}
                    {/* Enlace a su GitHub (aunque el enlace está vacío, debería incluir un texto de anclaje) */}
                    <p>💻 <a href="https://github.com/FranMorales7" target="_blank" rel="noopener noreferrer">https://github.com/FranMorales7</a></p>  
                </div>
            
                {/* Sección de resumen profesional */}
                <div className='info_About-2'>
                    <h3><strong>Professional Summary</strong></h3> {/* Título para el resumen */}
                    {/* Descripción del perfil profesional */}
                    <p>Motivated and detail-oriented Web Developer with 1 year of hands-on experience building dynamic and user-focused web applications.</p>
                    <p>Skilled in front-end and back-end development with expertise in Java, JavaScript, PHP, HTML, and CSS.</p>
                    <p>Adept at collaborating in team environments, solving complex problems, and delivering clean, scalable code.</p>
                    <p>Fluent in English (B2) and equipped with a valid driving license.</p>
                </div>
            
                {/* Sección de habilidades */}
                <div className='info_About-2'>
                    <h3><strong>Skills</strong></h3> {/* Título de las habilidades */}
                    {/* Listado de habilidades en programación y herramientas */}
                    <li>Programming Languages: Java, JavaScript, PHP, HTML, CSS</li> 
                    <li>Frameworks & Tools: REACT, Node, Laravel, Bootstrap, Tailwind</li>
                    <li>Version Control: Git, GitHub</li> 
                    <li>Database Management: MySQL, GraphQL</li>
                    <li>Soft Skills: Problem-solving, teamwork, attention to detail, and adaptability</li>
                </div>
            
                {/* Sección de experiencia profesional */}
                <div className='info_About-2'>
                    <h3><strong>Professional Experience</strong></h3> {/* Título para la experiencia profesional */}
                    <p><strong>Junior Web Developer</strong></p> {/* Título del puesto */}
                    <p><i>ECOPE</i> - Granada, Spain</p> {/* Nombre de la empresa */}
                    <p><i>March 2024 - June 2024</i></p> {/* Fechas de empleo */}
                    <p><i>February 2025 - July 2025</i></p> {/* Fechas de empleo */}
                    {/* Lista de logros o tareas realizadas en el puesto */}
                    <li>Designed and developed responsive websites with clean, maintainable code using HTML, CSS, and JavaScript.</li>
                    <li>Built dynamic back-end functionality using PHP and integrated it with GraphQL databases.</li>
                    <li>Contributed to the development of an internal application using Java, enhancing team productivity by 15%.</li>
                    <li>Collaborated with designers and other developers to ensure seamless user experiences.</li>
                    <li>Participated in code reviews and implemented feedback to optimize performance.</li>
                </div>
            
                {/* Sección de educación */}
                <div className='info_About-2'>
                    <h3><strong>Education</strong></h3> {/* Título de la educación */}
                    <p><strong>Technical Degree in Web Development</strong></p> {/* Título educativo */}
                    <p><i>I.E.S. Alonso Cano - Granada, Spain</i></p> {/* Nombre de la institución educativa */}
                    <p><i>Graduation Year: 2025</i></p> {/* Año de graduación */}
                    <li>Focused on full-stack development, database management, and web application deployment.</li> {/* Descripción de la formación */}
                </div>
            
                {/* Sección de idiomas */}
                <div className='info_About-2'>
                    <h3><strong>Languages</strong></h3> {/* Título de idiomas */}
                    <li>Spanish: Native</li> {/* Idioma nativo */}
                    <li>English: B2</li> {/* Nivel de inglés */}
                </div>
            
                {/* Sección de información adicional */}
                <div className='info_About-2'>
                    <h3><strong>Additional Information</strong></h3> {/* Título de información adicional */}
                    <li>Date of Birth: 12/12/2002</li> {/* Fecha de nacimiento */}
                    <li>Driving license: Class B (valid)</li> {/* Licencia de conducir */}
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;

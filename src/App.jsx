import React from 'react';
import './App.css';
import HeaderComponent from './assets/components/HeaderComponent';
import BeginComponent from './assets/components/BeginComponent';
import AboutComponent from './assets/components/AboutComponent';
import ProjectsComponents from './assets/components/ProjectsComponents';
import ContactComponent from './assets/components/ContactComponent';
import FooterComponent from './assets/components/FooterComponent';


function App() {
  const links = {
    begin:'Beginning',
    about: 'About me',
    projects: 'Projects',
    contact: 'Contact with me!'
  }

  return (
    <>
    <HeaderComponent links={links}/>
    <BeginComponent/>
    <AboutComponent/>
    <ProjectsComponents/>
    <ContactComponent/>
    <FooterComponent/>
    </>
  )
}

export default App
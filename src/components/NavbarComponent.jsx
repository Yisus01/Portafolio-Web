import React, { useEffect } from 'react';
// import './NavbarComponent.css'; // Asumiendo que tienes estilos CSS para la clase 'active'

const NavbarComponent = () => {
  useEffect(() => {
    const hamburgerMenu = document.getElementById('navbarresponsive-menu');
    const navLinks = document.getElementById('nav-links');

    const toggleMenu = () => {
      hamburgerMenu.classList.toggle('active');
      navLinks.classList.toggle('active');
    };

    hamburgerMenu.addEventListener('click', toggleMenu);

    // Limpieza del efecto para evitar fugas de memoria
    return () => {
      hamburgerMenu.removeEventListener('click', toggleMenu);
    };
  }, []);
};

export default NavbarComponent;

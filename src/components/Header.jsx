export default function Header() {
  return (
    <>
      <header>
        <div>
          <h1>Portafolio</h1>
        </div>

        <nav>
          <ul>
            <a href="../components/Header.jsx">Inicio</a>
            <a href="#h2s">Proyectos</a>
            <a href="#h2ss">Acerca de mí</a>
            <a href="#h2sssss">Contacto</a>
          </ul>

          <div className="navbarresponsive">

            <div className="navbarresponsive-menu" id="navbarresponsive-menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <ul className="nav-links" id="nav-links">
                <li><a href="google.com">Inicio</a>Inicio</li>
                <li><a href="google.com">Proyectos</a>Proyectos</li>
                <li><a href="google.com">Acerca de mí</a>Acerca de mí</li>
                <li><a href="www.google.com">Contacto</a>Contacto</li>
              </ul>

            </div>

          </div>
          

          

          
        </nav>
      </header>
    </>
  );
}

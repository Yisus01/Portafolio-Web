import foto from "../assets/img/foto.png.png";
import barber from "../assets/img/labarber.png";
import blog from "../assets/img/blog.png";
import veterinaria from "../assets/img/veterinaria.png";
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html-5.png";
import css3 from "../assets/img/css.png";
import pc from "../assets/img/hero-devices.svg";
import yo from "../assets/img/male-programmer-upper-body-svgrepo-com.svg"
import blogreact from "../assets/img/blogreact.png"
export default function Main() {
  return (
    <>
      <main>

        <div className="maingrid">
          <div>
            <div className="maingrid-izquierda">
              <h2>Jesús Alejandro Pino</h2>
              <h1>
                DESARROLLADOR <br />
                FRONT-END JR
              </h1>
              <p>
                Con más de 1 año de experiencia en la creación de experiencias
                web atractivas y funcionales. Buen nivel en tecnologías front-end,
                incluyendo HTML5, CSS3, JavaScript y frameworks como React.
                Capaz de traducir diseños creativos en código
                interactivo y optimizar la velocidad y el rendimiento del sitio
                web.
              </p>
              <div className="maingrid-izquierda-enlaces">
                <a href="https://wa.me/+56927021192?Hola!,%20quiero%20m%C3%A1s%20informacion%20sobre%20sus%20servicios%20de%20programador%20web">Hablemos</a>
                <a href="https://drive.google.com/file/d/1PhIr4j0rZWT0n4eKyFxUC34Jk1FKfggJ/view?usp=sharing" target="_blank">Ver Cúrriculum</a>
              </div>
              <div className="maingrid-izquierda-linkedin">
                <p>
                  Echa un vistaso a mi{" "}
                  <a href="https://www.linkedin.com/in/jes%C3%BAsdiez/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="maingrid-derecha">
            <div className="maingrid-derecha-img">
              <img src={foto}/>
            </div>
          </div>
        </div>
        <hr />

        <div className="h2s" id="h2s">
          <h2>Proyectos</h2>
        </div>
        
        <div className="uwu">
        <section className="gridproyectos" id="gridproyectos">

          <div className="gridproyectos-item">
            <img src={barber} alt="" />
            <h3>La Barberia</h3>
            <p>Enfocado en mostrar los servicios ofrecidos </p>
            <h3>Tecnologías Usadas</h3>
            <div className="gridproyectos-item-imgs">

              <img src={js}alt=""/>
              <img src={html} alt=""/>
              <img src={css3} alt=""/>

            </div>
            <div className="gridproyectos-item-enlace">
              <a href="https://yisus01.github.io/LaBarber/">Ver Proyecto</a>

            </div>
          </div>

          <div className="gridproyectos-item">
            <img src={blog} alt="" />
            <h3>Blog de Videojuegos</h3>
            <p>Enfocado a dar noticias, reviews y más "En Desarrollo " </p>
            <h3>Tecnologías Usadas</h3>
            <div className="gridproyectos-item-imgs">
              <img src={html} alt=""/>
              <img src={css3} alt=""/>

            </div>
            <div className="gridproyectos-item-enlace">
              <a href="https://yisus01.github.io/Blog-Games/">Ver Proyecto</a>

            </div>
          </div>

          <div className="gridproyectos-item">
            <img src={blogreact} alt="" />
            <h3>Blog de Videojuegos 2.0</h3>
            <p>Enfocado a dar noticias, reviews y más. </p>
            <h3>Tecnologías Usadas</h3>
            <div className="gridproyectos-item-imgs">
              <img src={react} alt=""/>
              <img src={js}alt=""/>
              <img src={html} alt=""/>
              <img src={css3} alt=""/>

            </div>
            <div className="gridproyectos-item-enlace">
              <a href="https://yisus01.github.io/AgendarCitas/">Ver Proyecto</a>

            </div>
          </div>

        </section>

        </div>

        <div className="h2ss" id="h2ss">
          <h2>Tecnologias</h2>
        </div>

        <section>
          <div>
            <div className="tecnologiasimg" id="tecnologiasimg">
              <div>
                <img src={html} alt=""/>
                <p>Html</p>
              </div>

              <div>
                <img src={css3} alt=""/>
                <p>css3</p>
              </div>

              <div>
                <img src={js} alt=""/>
                <p>JavaScript</p>
              </div>

              <div>
                <img src={react} alt=""/>
                <p>React</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h2sss">
          <h2>Estudios</h2>
        </div>
        
        <section >
          <div className="owo">
            <div className="estudios" id="estudios">
              <ul>

                <li>
                  <p>Ingenieria en Informatica | Duoc UC.</p>
                  <p>Maipú, Región metropolitana de Chile.</p>
                  <p>03/2020 | 06/2024</p>
                </li>

                <li className="awa">
                  <p>Curso de Udemy | Desarrollo Web</p>
                  <p>Tecnologias a aprender: HTML, CSS, JavaScript, PHP y MySQL.</p>
                  <p>2023 | 2023</p>
                </li>

                <li>
                  <p>Curso de Udemy | React y TypeScript</p>
                  <p>Tecnologias a aprender: React, TypeScript, Next.js, Hooks y State.</p>
                  <p> 2024 - Actualidad</p>
                </li>
              </ul>

            </div>

            <div>
              <img src={pc} alt="" />
            </div>
          </div>
        </section>

        <div className="h2ssss">
          <h2>Sobre Mí</h2>
        </div>

        <section>
          <div>
            <div className="sobremi">

              <div className="sobremi-izquierda">
                <img src={yo} alt="" />
              </div>

              <div className="sobremi-derecha">
                <p>Soy un profesional del desarrollo de software, especializado en el desarrollo web front-end. Desde que comencé mis estudios en programación, descubrí mi interés por crear interfaces web intuitivas y atractivas. Cada día me dedico a aprender y practicar nuevas tecnologías para seguir mejorando mis habilidades. Me considero una persona responsable, dinámica y creativa, con una gran capacidad de adaptación y un constante deseo de trabajar y aprender. Tengo iniciativa para resolver problemas y disfruto enfrentando nuevos desafíos en el campo de la tecnología. En el futuro, planeo expandir mis conocimientos y dominar una variedad aún mayor de herramientas y técnicas en el desarrollo web.</p>
              </div>

            </div>
          </div>
        </section>

        <div className="h2sssss" id="h2sssss">
          <h2>Contacto</h2>
        </div>
        
      </main>
    </>
  );
}

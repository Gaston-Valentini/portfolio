import style from "./Projects.module.css";
import { FaRocket } from "react-icons/fa";

export default function Projects() {
    return (
        <section className={style.container} id="projects">
            <div className={style.title}>
                <h2 className={style.titleText}>PROYECTOS</h2>
                <div className={style.titleLogo}>
                    <hr />
                    <FaRocket className={style.titleLogoIcon} />
                    <hr />
                </div>
            </div>
            <p className={style.text}>
                A continuación se encuentran los enlaces a algunos de mis proyectos personales, los cuales han sido desarrollados a lo largo de mi carrera como desarrollador web. Se observan tanto proyectos Front-end como proyectos Full-stack. Acceda a mi{" "}
                <a href="https://github.com/Gaston-Valentini" className={style.textLink}>
                    GitHub
                </a>{" "}
                personal si desea conocer la totalidad de mis trabajos.
            </p>
            <div className={style.gallery}>
                <div className={`${style.galleryCard} ${style.one}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageOne}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Gameboy</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.two}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageFour}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>SportSync (red social)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, MongoDB, Node.js
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.three}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageSix}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>INK-WORLD (gestor de citas)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, TypeORM, MySQL
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.four}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageTwo}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Neofood (landing page)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y Bootstrap
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.five}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageFive}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Calculadora</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.six}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageThree}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Mastermind (videojuego)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
            </div>
            <a href="https://github.com/Gaston-Valentini" className={style.more}>
                Ver más
            </a>
        </section>
    );
}
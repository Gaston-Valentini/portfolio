import style from "./Projects.module.css";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                A continuación se encuentran los enlaces a algunos de mis proyectos como freelance, los cuales han sido desarrollados a lo largo de mi carrera como desarrollador web. Se observan tanto proyectos Frontend como proyectos Full-Stack. Acceda a mi{" "}
                <a href="https://github.com/Gaston-Valentini" target="_blank" className={style.textLink}>
                    GitHub
                </a>{" "}
                personal si desea conocer la totalidad de mis trabajos.
            </p>
            <div className={style.gallery}>
                <div className={`${style.galleryCard} ${style.one}`}>
                    <Link to="/project/1" className={`${style.galleryCardImage} ${style.imageOne}`}></Link>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Abril Valentini (Portfolio Web)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Node, Express, Google API
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.two}`}>
                    <Link to="/project/2" className={`${style.galleryCardImage} ${style.imageTwo}`}></Link>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Benilaser (Clínica de Estética)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Node, Express, Google API
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.three}`}>
                    <Link to="project/3" className={`${style.galleryCardImage} ${style.imageSix}`}></Link>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Barbershob (Barbería)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, MongoDB, Node.js
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.four}`}>
                    <Link to="/project/4" className={`${style.galleryCardImage} ${style.imageFour}`}></Link>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Segunda Línea (Restaurante)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Node, Express, Google API
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.five}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageFive}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Proyecto 5</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, MongoDB, Node.js
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.six}`}>
                    <a href="https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg" target="_blank" className={`${style.galleryCardImage} ${style.imageThree}`}></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Proyecto 6</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, MongoDB, Node.js
                        </p>
                    </div>
                </div>
            </div>
            <a href="https://github.com/Gaston-Valentini" target="_blank" className={style.more}>
                Ver más
            </a>
        </section>
    );
}

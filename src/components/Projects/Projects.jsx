import style from "./Projects.module.css";

export default function Projects() {
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                <hr />
                <h2>PROYECTOS</h2>
            </h2>
            <p className={style.text}>
                A continuación se encuentran los enlaces a algunos de mis proyectos personales, los cuales han sido desarrollados
                a lo largo de mi carrera como desarrollador web. Se observan tanto proyectos Front-end como proyectos Full-stack.
                Acceda a mi{" "}
                <a href="https://github.com/Gaston-Valentini" className={style.textLink}>
                    GitHub
                </a>{" "}
                personal si desea conocer la totalida de mis trabajos.
            </p>
            <div className={style.gallery}>
                <div className={`${style.galleryCard} ${style.one}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/proyect2-videoConsole"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageOne}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Gameboy</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.two}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/proyect1-neofood"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageTwo}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Neofood (landing page)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y Bootstrap
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.three}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/proyect3-masterMind"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageThree}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Mastermind (videojuego)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.four}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/bfsd-final-project"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageFour}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>SportSync (red social)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, MongoDB, Node.js
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.five}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/calculatorJS"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageFive}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Calculadora</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML, CSS y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.six}`}>
                    <a
                        href="https://github.com/Gaston-Valentini/proyect5-ink-world"
                        target="_blank"
                        className={`${style.galleryCardImage} ${style.imageSix}`}
                    ></a>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>INK-WORLD (gestor de citas)</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> React, Express, TypeORM, MySQL
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

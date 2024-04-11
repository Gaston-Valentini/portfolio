import style from "./About.module.css";
import photo from "../../assets/images/about.jpg";
import { FaUser } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.data}>
                <div className={style.dataImage}>
                    <img src={photo} alt="profilePhoto" />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoTitle}>
                        <FaUser className={style.dataInfoTitleIcon} />
                        <p className={style.dataInfoTitleText}>SOBRE MI</p>
                    </div>
                    <p className={style.dataInfoBio}>
                        Mi nombre es Gastón Valentini, y soy un apasionado no solo de la tecnología, sino del desarrollo y construcción de soluciones informáticas, con el fin de mejorar la calidad de vida de las personas y crear negocios digitales de alto impacto.
                        <br />
                        <br />
                        Comencé mis estudios de manera autodidacta en 2020 a través de internet, y durante más de 3 años aprendí mucho de lo que hoy en día sé hacer, hasta que decidí dar un impulso aún mayor a mi carrera, por lo cual me inscribí en un bootcamp de Desarrollo Web Full Stack en{" "}
                        <a href="https://geekshubsacademy.com/producto/full-stack-developer/" target="_blank">
                            GeeksHubs Academy
                        </a>{" "}
                        , graduámdome del mismo en diciembre del 2023.
                        <br />
                        <br />
                        Disfruto mucho de otras actividades como hacer deporte, relacionarme con personas, leer y actividades de emprendimiento.
                        <br />
                        <br />
                        ¡Gracias por visitar mi página, y espero que disfrutes de mi contenido! No dudes en ponerte en contacto conmigo si lo deseas :)
                    </p>
                    <div className={style.dataInfoButtons}>
                        <a href="https://github.com/Gaston-Valentini" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={style.dataInfoButtonsButton} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

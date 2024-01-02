import style from "./Technologies.module.css";
import { MdOutlineScreenRotation } from "react-icons/md";
import { FaReact, FaDatabase, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";

export default function Technologies() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <hr />
                <h2>TECNOLOGIAS</h2>
            </div>
            <div className={style.content}>
                <div className={style.contentTechnologies}>
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>FRONTEND</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>HTML</li>
                            <li className={style.contentTechnologiesSectionListElement}>CSS</li>
                            <li className={style.contentTechnologiesSectionListElement}>Bootstrap</li>
                            <li className={style.contentTechnologiesSectionListElement}>LESS</li>
                            <li className={style.contentTechnologiesSectionListElement}>JavaScript</li>
                            <li className={style.contentTechnologiesSectionListElement}>TypeScript</li>
                            <li className={style.contentTechnologiesSectionListElement}>jQuery</li>
                            <li className={style.contentTechnologiesSectionListElement}>React</li>
                            <li className={style.contentTechnologiesSectionListElement}>Redux</li>
                        </ul>
                    </div>
                    <hr />
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>BACKEND</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>Node.js</li>
                            <li className={style.contentTechnologiesSectionListElement}>Express</li>
                            <li className={style.contentTechnologiesSectionListElement}>MongoDB</li>
                            <li className={style.contentTechnologiesSectionListElement}>MySQL</li>
                            <li className={style.contentTechnologiesSectionListElement}>SQL</li>
                            <li className={style.contentTechnologiesSectionListElement}>PHP</li>
                            <li className={style.contentTechnologiesSectionListElement}>Laravel</li>
                        </ul>
                    </div>
                    <hr />
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>HERRAMIENTAS</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>Git</li>
                            <li className={style.contentTechnologiesSectionListElement}>GitHub</li>
                            <li className={style.contentTechnologiesSectionListElement}>Postman</li>
                            <li className={style.contentTechnologiesSectionListElement}>Docker</li>
                            <li className={style.contentTechnologiesSectionListElement}>Deploy</li>
                        </ul>
                    </div>
                </div>
                <div className={style.contentSkills}>
                    <p className={style.contentSkillsTitle}>El dominio de estas tecnologías me permite...</p>
                    <div className={style.contentSkillsCards}>
                        <div className={style.contentSkillsCardsCard}>
                            <MdOutlineScreenRotation className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Responsive Design</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Maquetación de sitios web con un diseño moderno y elegante adaptado a todas las{" "}
                                <span>resoluciones</span> de pantalla
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <FaReact className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Single Page Aplication</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Desarrollo de páginas web SPA gracias a la implmentación de <span>React</span> como freamwork de
                                frontend
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <IoLogoJavascript className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Full JavaScript</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Utilización de <span>JavaScript</span> como único lenguaje de programación gracias a la
                                utilización de Express en el desarrollo del servidor
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <FaDatabase className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>SQL y NoSQL</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Diseño tanto de bases de datos <span>relacionales</span> con MySQL como{" "}
                                <span>no relacionales </span> con MongoDB
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <GoShieldCheck className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Protección de datos</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Encriptación de información con librerías como <span>bcrypt</span> y generación de{" "}
                                <span>tokens</span> de seguridad JWT
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <FaServer className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Diseño MVC</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Desarrollo del servidor basado en la <span>arquitectura</span> Modelo Vista Controlador
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

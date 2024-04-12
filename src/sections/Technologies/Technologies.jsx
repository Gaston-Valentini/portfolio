import style from "./Technologies.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineScreenRotation } from "react-icons/md";
import { FaHtml5, FaCss3, FaBootstrap, FaLess, FaReact, FaNode, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaDocker, FaAws, FaDatabase, FaServer } from "react-icons/fa";
import { SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { DiJqueryLogo, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileSqlDuotone } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

export default function Technologies() {
    return (
        <section className={style.container} id="technologies">
            <div className={style.title}>
                <h2 className={style.titleText}>TECNOLOGÍAS</h2>
                <div className={style.titleLogo}>
                    <hr />
                    <HiSquare3Stack3D className={style.titleLogoIcon} />
                    <hr />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.contentTechnologies}>
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>FRONTEND</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaHtml5 className={style.contentTechnologiesSectionListElementIcon} /> <span>HTML</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaCss3 className={style.contentTechnologiesSectionListElementIcon} /> <span>CSS</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaBootstrap className={style.contentTechnologiesSectionListElementIcon} /> <span>Bootstrap</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaLess className={style.contentTechnologiesSectionListElementIcon} /> <span>LESS</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <IoLogoJavascript className={style.contentTechnologiesSectionListElementIcon} /> <span>JavaScript</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <SiTypescript className={style.contentTechnologiesSectionListElementIcon} /> <span>TypeScript</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <DiJqueryLogo className={style.contentTechnologiesSectionListElementIcon} /> <span>jQuery</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaReact className={style.contentTechnologiesSectionListElementIcon} /> <span>React</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <SiRedux className={style.contentTechnologiesSectionListElementIcon} /> <span>Redux</span>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>BACKEND</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaNode className={style.contentTechnologiesSectionListElementIcon} /> <span>Node.js</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <SiExpress className={style.contentTechnologiesSectionListElementIcon} /> <span>Express</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <SiMongodb className={style.contentTechnologiesSectionListElementIcon} /> <span>MongoDB</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <DiMysql className={style.contentTechnologiesSectionListElementIcon} /> <span>MySQL</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <PiFileSqlDuotone className={style.contentTechnologiesSectionListElementIcon} /> <span>SQL</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaPhp className={style.contentTechnologiesSectionListElementIcon} /> <span>PHP</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaLaravel className={style.contentTechnologiesSectionListElementIcon} /> <span>Laravel</span>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className={style.contentTechnologiesSection}>
                        <p className={style.contentTechnologiesSectionTitle}>HERRAMIENTAS</p>
                        <ul className={style.contentTechnologiesSectionList}>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaGitAlt className={style.contentTechnologiesSectionListElementIcon} /> <span>Git</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaGithub className={style.contentTechnologiesSectionListElementIcon} /> <span>GitHub</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <SiPostman className={style.contentTechnologiesSectionListElementIcon} /> <span>Postman</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaDocker className={style.contentTechnologiesSectionListElementIcon} /> <span>Docker</span>
                            </li>
                            <li className={style.contentTechnologiesSectionListElement}>
                                <FaAws className={style.contentTechnologiesSectionListElementIcon} />
                                <span>Deploy</span>
                            </li>
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
                                Maquetación de sitios web con un diseño moderno y elegante adaptado a todas las <span>resoluciones</span> de pantalla
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <FaReact className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Single Page Aplication</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Desarrollo de páginas web SPA gracias a la implmentación de <span>React</span> como freamwork de frontend
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <IoLogoJavascript className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Full JavaScript</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Utilización de <span>JavaScript</span> como único lenguaje de programación gracias a la utilización de Express en el desarrollo del servidor
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <FaDatabase className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>SQL y NoSQL</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Diseño tanto de bases de datos <span>relacionales</span> con MySQL como <span>no relacionales </span> con MongoDB
                            </p>
                        </div>
                        <div className={style.contentSkillsCardsCard}>
                            <GoShieldCheck className={style.contentSkillsCardsCardIcon} />
                            <p className={style.contentSkillsCardsCardTitle}>Protección de datos</p>
                            <p className={style.contentSkillsCardsCardText}>
                                Encriptación de información con librerías como <span>bcrypt</span> y generación de <span>tokens</span> de seguridad JWT
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

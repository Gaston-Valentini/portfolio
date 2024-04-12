import style from "./ProjectCard.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { FaLaptop, FaServer } from "react-icons/fa";

export default function ProjectCard() {
    const { id } = useParams();
    const project = projectsData.find((project) => project.id === parseInt(id));

    if (project) {
        return (
            <section className={style.container}>
                <div className={style.content}>
                    <div className={style.title}>
                        <p className={style.titleText}>{project.title}</p>
                        <a href={project.deploy} target="_blank" className={style.titleDeploy}>
                            Aplicación desplegada en este enlace <FaExternalLinkAlt />{" "}
                        </a>
                    </div>
                    <div className={style.description}>
                        <p className={style.descriptionTitle}>Descripción</p>
                        <p className={style.descriptionText}>{project.description}</p>
                    </div>
                    <div className={style.technologies}>
                        <div className={style.technologiesTitle}>Tecnologías utilizadas</div>
                        <ul className={style.technologiesList}>
                            {project.technologies.map((e) => (
                                <li key={e.id} className={style.technologiesListElement}>
                                    <div className={style.technologiesListElementTitle}>
                                        <p>{e.name}</p>
                                        <img src={e.image} />
                                    </div>
                                    <p className={style.technologiesListElementDescription}>{e.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.deploy}>
                        <a href={project.deploy.client} className={style.deployService}>
                            <FaLaptop className={style.deployServiceIcon} />
                            <p className={style.deployServiceText}>Repositorio del cliente</p>
                        </a>
                        <a href={project.deploy.server} className={style.deployService}>
                            <FaServer className={style.deployServiceIcon} />
                            <p className={style.deployServiceText}>Repositorio del servidor</p>
                        </a>
                    </div>
                </div>
            </section>
        );
    } else {
        return <section>Not found</section>;
    }
}
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const onBars = () => {
        setShowLinks(!showLinks);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = -50;
            const offsetPosition = element.offsetTop + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className={style.container}>
            <h1 className={style.logo}>GASTON</h1>
            <div className={style.bars}>
                <FaBars className={style.barsIcon} onClick={onBars} />
            </div>
            <ul className={`${style.links} ${showLinks ? style.linksOpen : ""}`}>
                <li className={style.linksLink}>
                    <Link
                        to="/"
                        onClick={() => {
                            onBars();
                            scrollToSection("header");
                        }}
                    >
                        Inicio
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link
                        to="/"
                        onClick={() => {
                            onBars();
                            scrollToSection("about");
                        }}
                    >
                        Sobre mi
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link
                        to="/"
                        onClick={() => {
                            onBars();
                            scrollToSection("projects");
                        }}
                    >
                        Proyectos
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link
                        to="/"
                        onClick={() => {
                            onBars();
                            scrollToSection("technologies");
                        }}
                    >
                        Tecnologías
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link
                        to="/"
                        onClick={() => {
                            onBars();
                            scrollToSection("contact");
                        }}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

import style from "./Navbar.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const onBars = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className={style.container}>
            <h1 className={style.logo}>GASTON</h1>
            <div className={style.bars}>
                <FaBars className={style.barsIcon} onClick={onBars} />
            </div>
            <ul className={`${style.links} ${showLinks ? style.linksOpen : ""}`}>
                <li className={style.linksLink}>
                    <a href="#" onClick={onBars}>
                        Inicio
                    </a>
                </li>
                <li className={style.linksLink}>
                    <a href="#" onClick={onBars}>
                        Sobre mi
                    </a>
                </li>
                <li className={style.linksLink}>
                    <a href="#" onClick={onBars}>
                        Proyectos
                    </a>
                </li>
                <li className={style.linksLink}>
                    <a href="#" onClick={onBars}>
                        Tecnologías
                    </a>
                </li>
                <li className={style.linksLink}>
                    <a href="#" onClick={onBars}>
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
}

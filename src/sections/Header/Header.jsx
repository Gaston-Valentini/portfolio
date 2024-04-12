import style from "./Header.module.css";
import cv from "../../assets/files/CV.pdf";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.overlay}>
                <div className={style.info}>
                    <p className={style.infoHello}>Hola, mi nombre es...</p>
                    <h2 className={style.infoName}>Gastón Valentini</h2>
                    <h1 className={style.infoOccupation}>
                        <span>___ </span>Full Stack Web Developer
                    </h1>
                    <a className={style.infoDownload} href={cv} download="Gastón-Valentini-CV.pdf">
                        Descargar CV
                    </a>
                </div>
            </div>
        </header>
    );
}

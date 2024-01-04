import style from "./Header.module.css";
import cv from "../../assets/files/CV.pdf";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.background}>
                <div className={style.info}>
                    <h2 className={style.infoHello}>Hola, mi nombre es...</h2>
                    <h1 className={style.infoName}>Gastón Valentini</h1>
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

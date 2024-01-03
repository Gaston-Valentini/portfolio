import style from "./Header.module.css";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.info}>
                <h2 className={style.infoHello}>Hola, mi nombre es...</h2>
                <h1 className={style.infoName}>Gastón Valentini</h1>
                <h1 className={style.infoOccupation}>
                    <span>___ </span>Full Stack Web Developer
                </h1>
                <button className={style.infoDownload}>Descargar CV</button>
            </div>
        </header>
    );
}

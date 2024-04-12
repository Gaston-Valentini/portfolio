import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className={style.container}>
            <div className={style.message}>Error 404 - Ruta no encontrada</div>
            <Link to="/" className={style.redirect}>
                Volver al inicio
            </Link>
        </section>
    );
}

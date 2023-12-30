import style from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataImage}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoTitle}>
                        <hr />
                        <h2>SOBRE MI</h2>
                    </div>
                    <p className={style.dataInfoBio}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolor id dolores velit
                        reprehenderit. Eveniet, obcaecati porro iste ad voluptate minima voluptatibus, totam atque, sint
                        itaque quam cumque deserunt a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                        accusamus, illo ex voluptate labore facilis ipsam rem non? Atque in incidunt itaque! Quod sequi,
                        illum voluptates earum numquam libero fuga? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nam laborum eveniet architecto provident vel quisquam ea minima itaque. Expedita eaque
                        dolorem hic ad ipsa vero assumenda amet quibusdam numquam atque!
                    </p>
                    <div className={style.dataInfoButtons}>
                        <a href="https://github.com/Gaston-Valentini" target="blank">
                            <FaGithub className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="https://www.linkedin.com/in/gastonvalentini/" target="blank">
                            <FaLinkedin className={style.dataInfoButtonsButton} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

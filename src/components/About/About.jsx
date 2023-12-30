import style from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function About() {
    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataImage}>
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="profilePhoto"
                    />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoTitle}>
                        <hr />
                        <h2>SOBRE MI</h2>
                    </div>
                    <p className={style.dataInfoBio}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi numquam tempora cum deleniti. Fugit
                        illo mollitia illum laudantium quo quae debitis ipsa optio enim delectus. Esse eligendi vel culpa! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores non ducimus adipisci iusto, ut dicta
                        sapiente repellat quod mollitia libero animi, eveniet architecto sunt expedita, distinctio nam illo quos.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsa molestiae accusamus eum obcaecati
                        minima minus aliquid architecto. Earum vero vitae, explicabo ipsa tenetur aperiam. Voluptas magnam quasi
                        ducimus expedita?
                    </p>
                    <div className={style.dataInfoButtons}>
                        <a href="https://github.com/Gaston-Valentini" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="#">
                            <IoIosMail className={style.dataInfoButtonsButton} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

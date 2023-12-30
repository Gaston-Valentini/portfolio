import style from "./Projects.module.css";

export default function Projects() {
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                <hr />
                <h2>PROYECTOS</h2>
            </h2>
            <p className={style.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias unde animi. Blanditiis modi possimus vel
                voluptatum beatae, doloremque eos unde, quasi, pariatur magni quae repellendus vero perspiciatis asperiores
                consequatur.
            </p>
            <div className={style.gallery}>
                <div className={`${style.galleryCard} ${style.one}`}>
                    <div className={`${style.galleryCardImage} ${style.imageOne}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.two}`}>
                    <div className={`${style.galleryCardImage} ${style.imageTwo}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.three}`}>
                    <div className={`${style.galleryCardImage} ${style.imageThree}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.four}`}>
                    <div className={`${style.galleryCardImage} ${style.imageFour}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.five}`}>
                    <div className={`${style.galleryCardImage} ${style.imageFive}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
                <div className={`${style.galleryCard} ${style.six}`}>
                    <div className={`${style.galleryCardImage} ${style.imageSix}`}></div>
                    <div className={style.galleryCardData}>
                        <p className={style.galleryCardDataTitle}>Título del proyecto</p>
                        <p className={style.galleryCardDataTechnologies}>
                            <span>Tecnologías:</span> HTML5, CSS3 y JavaScript
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

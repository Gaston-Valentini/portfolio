import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import google from "../assets/images/google.png";
import vespVintageTours from "../assets/images/project-vespa-vintage-tours.png";
import benilaser from "../assets/images/project-benilaser.png";
import abrilValentini from "../assets/images/project-abril-valentini.png";
import segundaLinea from "../assets/images/project-segunda-linea.png";

export const projectsData = [
    {
        id: 1,
        title: "Vespa Vintage Tours",
        deploy: "https://www.vespavintagetours.com",
        description: (
            <p>
                Vespa Vintage Tours, una empresa de excursiones, en la cual se ofrece a los clientes diferentes rutas de viaje que serán recorridas en
                las clásicas motocicletas Vespa. Se trata de un trabajo freelance cuyo objetivo es proporcionar a los clientes información detallada
                sobre las diferentes rutas, información para el viaje, facilidades de contacto y más.
            </p>
        ),
        image: vespVintageTours,
        technologies: [
            {
                id: 1,
                name: "React",
                image: react,
            },
            {
                id: 2,
                name: "Node",
                image: node,
            },
            {
                id: 3,
                name: "Express",
                image: express,
            },
            {
                id: 4,
                name: "Google API",
                image: google,
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/vespa-vintage-tours-client",
        },
    },
    {
        id: 2,
        title: "Benilaser",
        deploy: "https://www.benilaser.es",
        description: (
            <p>
                Benilaser es un proyecto freelance desarrollado por cuenta propia, el cual se trata de la página web de una clínica de eliminación
                láser ubicada en Benidorm, España.
                <br />
                <br />
                Se trata de una landing page en la cual se detalla información pertinente a la clínica como la tecnología que utilizan, reseñas de los
                clientes, servicios que brindan, tarifas y bonos, detalles del procedimiento, preguntas frecuentes, datos y formulario de contacto,
                redes sociales y otros detalles.
                <br />
                <br />
                Además, como a todos los proyectos que involucran la API de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    Google Places
                </a>
                , tuve que desarrollar un pequeño servidor para hacer las peticiones a esta API, y que a su vez sirva esta información al cliente y
                así evitar problemas de CORS.
            </p>
        ),
        image: benilaser,
        technologies: [
            {
                id: 1,
                name: "React",
                image: react,
            },
            {
                id: 2,
                name: "Node",
                image: node,
            },
            {
                id: 3,
                name: "Express",
                image: express,
            },
            {
                id: 4,
                name: "Google API",
                image: google,
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/benilaser-client",
            server: "https://github.com/Gaston-Valentini/benilaser-server",
        },
    },
    {
        id: 3,
        title: "Abril Valentini (Portafolio Web)",
        deploy: "https://www.abrilvalentini.com",
        description: (
            <p>
                Este proyecto se trata del portafolio web personal de mi prima{" "}
                <a href="https://www.linkedin.com/in/abril-valentini-1a8166292/" target="_blank">
                    Abril Valentini
                </a>
                . Desarrollado con el objetivo de lucir su información personal, sus proyectos desarrollados a lo largo de su carrera, habilidades
                adquiridas y facilitar diversa información de contacto a los visitantes.
                <br />
                <br />
            </p>
        ),
        image: abrilValentini,
        technologies: [
            {
                id: 1,
                name: "React",
                image: react,
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/portfolio-abril",
        },
    },
    {
        id: 4,
        title: "Segunda Línea",
        deploy: "https://www.segundalineagastrobar.es",
        description: (
            <p>
                Este proyecto consiste en el desarrollo de la página web de Segunda Línea, un restaurante ubicado precisamente en segunda línea de
                playa en Benidorm, Alicante, España. Se trata de un trabajo freelance cuyo objetivo es proporcionar a los clientes información
                detallada sobre el establecimiento, como el menú, los platos estrella, imágenes del local, así como datos de contacto y horarios de
                atención.
                <br />
                <br />
                Además, como a todos los proyectos que involucran la API de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    Google Places
                </a>
                , tuve que desarrollar un pequeño servidor para hacer las peticiones a esta API, y que a su vez sirva esta información al cliente y
                así evitar problemas de CORS.
            </p>
        ),
        image: segundaLinea,
        technologies: [
            {
                id: 1,
                name: "React",
                image: react,
            },
            {
                id: 2,
                name: "Node",
                image: node,
            },
            {
                id: 3,
                name: "Express",
                image: express,
            },
            {
                id: 4,
                name: "Google API",
                image: google,
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/segunda-linea-client",
            server: "https://github.com/Gaston-Valentini/segunda-linea-server",
        },
    },
];

import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import google from "../assets/images/google.png";
import segundaLinea from "../assets/images/project-segunda-linea.png";
import benilaser from "../assets/images/project-benilaser.png";
import barbershop from "../assets/images/project-barbershop.png";
import abrilValentini from "../assets/images/project-abril-valentini.png";

export const projectsData = [
    {
        id: 1,
        title: "Abril Valentini (Portafolio Web)",
        deploy: "https://www.abrilvalentini.com",
        description: (
            <p>
                Este proyecto se trata del portafolio web personal de mi prima{" "}
                <a href="https://www.linkedin.com/in/abril-valentini-1a8166292/" target="_blank">
                    Abril Valentini
                </a>
                . Desarrollado con el objetivo de lucir su información personal, sus proyectos desarrollados a lo largo de su carrera, habilidades adquiridas y facilitar diversa información de contacto a los visitantes.
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
        id: 2,
        title: "Benilaser",
        deploy: "https://www.benilaser.es",
        description: (
            <p>
                Benilaser es un proyecto freelance desarrollado por cuenta propia, el cual se trata de la página web de una clínica de eliminación láser ubicada en Benidorm, España.
                <br />
                <br />
                Se trata de una landing page en la cual se detalla información pertinente a la clínica como la tecnología que utilizan, reseñas de los clientes, servicios que brindan, tarifas y bonos, detalles del procedimiento, preguntas frecuentes, datos y formulario de contacto, redes sociales y otros detalles.
                <br />
                <br />
                Además, como a todos los proyectos que involucran la API de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    Google Places
                </a>
                , tuve que desarrollar un pequeño servidor para hacer las peticiones a esta API, y que a su vez sirva esta información al cliente y así evitar problemas de CORS.
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
        title: "Barbershop",
        deploy: "https://barbershop-client-theta.vercel.app/",
        description: (
            <p>
                Barbershop es un proyecto personal desarrollado con el fin de mostrar mis habilidades y conocimientos, tanto a reclutadores, desarrolladores y potenciales clientes.
                <br />
                <br />
                Se trata de una landing page sobre una barbería ficticia, en la cual se pueden apreciar diferentes elementos de interés integrados como, la{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    API de Google Places
                </a>{" "}
                para hacer peticiones de reseñas de usuarios reales, un carrusel de la biblioteca{" "}
                <a href="https://www.npmjs.com/package/react-slick" target="blank">
                    react-slick
                </a>
                , un mapa dinámico de Google Maps, contenido multimedia generado con la inteligencia artificial de{" "}
                <a href="https://leonardo.ai/" target="blank">
                    Leoinardo.Ai
                </a>
                , configuración de variables de entorno y despliegue de ambos servicios en{" "}
                <a href="https://vercel.com" target="blank">
                    Vercel
                </a>
                .
                <br />
                <br />
                Además, como a todos los proyectos que involucran la API de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    Google Places
                </a>
                , tuve que desarrollar un pequeño servidor para hacer las peticiones a esta API, y que a su vez sirva esta información al cliente y así evitar problemas de CORS.
            </p>
        ),
        image: barbershop,
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
            client: "https://github.com/Gaston-Valentini/barbershop-client",
            server: "https://github.com/Gaston-Valentini/barbershop-server",
        },
    },
    {
        id: 4,
        title: "Segunda Línea",
        deploy: "https://www.segundalineagastrobar.es",
        description: (
            <p>
                Segunda Línea es otro de mis proyectos como freelance, tratándose de la página web de un restaurante ubicado precisamente en la segunda línea de la playa Poniente en Benidorm.
                <br />
                <br />
                Este proyecto se integra de un frontend, en el que se muestran diferentes elementos relacionados con el restaurante, como un menú, un carrusel de fotos desarrollado por mí, un carrusel de reseñas desarrollado también por mí y utilizando las reseñas de Google, información de contacto junto con un pequeño formulario conectado a <a href="https://www.emailjs.com/">EmailJS</a>, entre otras cosas.
                <br />
                <br />
                Además, como a todos los proyectos que involucran la API de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview?hl=es-419" target="blank">
                    Google Places
                </a>
                , tuve que desarrollar un pequeño servidor para hacer las peticiones a esta API, y que a su vez sirva esta información al cliente y así evitar problemas de CORS.
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

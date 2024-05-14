import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import google from "../assets/images/google.png";
import segundaLinea from "../assets/images/proyect-segunda-linea.png";
import benilaser from "../assets/images/proyect-benilaser.png";
import barbershop from "../assets/images/proyect-barbershop.png";

export const projectsData = [
    {
        id: 1,
        title: "Segunda Línea",
        deploy: "https://www.segundalineagastrobar.es",
        description: (
            <p>
                Segunda Línea es otro de mis proyectos como freelancer, tratándose de la página web de un restaurante ubicado precisamente en la segunda lína de la playa Poniente en Benidorm.
                <br />
                <br />
                Este proyecto se integra de un frontend, en el que se muestran diferentes elementos relacionados con el restaurante, como un menú, un carrusel de fotos desarrollado por mí, un carrusel de reseñas desarrollado también por mí y utlizando las reseñas de Google, información de contacto junto con un pequeño formulario conectado a <a href="https://www.emailjs.com/">EmailJS</a>, entre otras cosas.
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
                Barbershop es un proyecto personal desarrollado con el fin de mostrar mis habilidades y conociminentos, tanto a reclutadores, desarrolladores y potenciales clientes.
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
                , un mapa dinámico de Google Maps, contenido multimiedia generado con la inteligencia artificial de{" "}
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
];

import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";

export const projectsData = [
    {
        id: 1,
        title: "Barbershop",
        deploy: "https://barbershop-client-theta.vercel.app/",
        description: (
            <p>
                Barbershop se trata de una landing page ficticia dedicada a una barbería, destacando la aplicación de tecnologías de punta como lo son React para la interfaz de usuario y Node.js y Express para el servidor, ofreciendo así una experiencia sofisticada y completa a los usuarios.
                <br />
                <br />
                Que vuelve interesante a mi aplicación??🤔 Los puntos que me gustaría destacar son los siguientes:
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>💻 Diseño Moderno y Responsivo</span>
                <br />
                La landing page presenta un diseño moderno y elegante, completamente responsivo y adaptado a diversas resoluciones de pantalla. La estética refinada busca ofrecer una experiencia visual pulcra y atractiva para los usuarios.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>📑 Integración con Places API de Google</span>
                <br />
                Implementé el servicio de Places API de Google para obtener reseñas del establecimiento ficticio (tomé prestadas las reseñas de un restaurante con su consentimiento). Para solventar los problemas de CORS al realizar la petición desde React, establecí un servidor intermedio mediante Express como "CORS Proxy".
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🗺 Servicio de Google Maps</span>
                <br />
                La ubicación del establecimiento ficticio se presenta a través de un mapa interactivo gracias a la implementación del servicio de Google Maps (como es un local ficticio la ubicación la configuré en Mendoza, Argentina). Esta funcionalidad no solo aporta un componente visual atractivo, sino que también mejora la experiencia del usuario al proporcionar información geográfica relevante.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🖼 Slider Dinámico con react-slick</span>
                <br />
                Se incorporaron dos sliders dinámicos mediante la biblioteca "react-slick", ofreciendo una presentación visualmente atractiva y funcional del contenido. Esto contribuye a mejorar la interactividad y la navegación dentro de la landing page.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🤖 Contenido Multimedia Generado con Inteligencia Artificial</span>
                <br />
                La inclusión de contenido multimedia generado con inteligencia artificial, como imágenes y textos, añade un elemento distintivo a la propuesta. Este enfoque innovador busca personalizar y diferenciar la experiencia del usuario.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>⚙ Configuración de Variables de Entorno para Proteger Información Sensible</span>
                <br />
                En aras de la seguridad, implementé una rigurosa configuración de variables de entorno para salvaguardar información sensible. Al externalizar y proteger datos como claves de API y configuraciones específicas, garantizo la confidencialidad de la información crítica.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🚀 Despliegue de servicios</span>
                <br />
                Utilicé el servicio gratuito que ofrece{" "}
                <a href="https://vercel.com/" target="_blank">
                    Vercel
                </a>{" "}
                para desplegar tanto el servidor como la interfaz de usuario de mi proyecto.
            </p>
        ),
        technologies: [
            {
                id: 1,
                name: "React",
                image: react,
                description: "Como piedra angular del desarrollo frontend, React ha sido instrumental en la creación de una experiencia de usuario fluida y atractiva para la landing page. Su arquitectura basada en componentes me ha permitido diseñar una interfaz modular y fácilmente escalable, siguiendo las mejores prácticas de desarrollo. Además, su enfoque en el desarrollo de aplicaciones de una sola página (SPA) ha optimizado la velocidad y la eficiencia del sitio.",
            },
            {
                id: 2,
                name: "Node",
                image: node,
                description: "Al adoptar Node.js en el backend, he creado un entorno de desarrollo coherente y eficiente en toda la aplicación. Node.js me ha proporcionado la capacidad de ejecutar código JavaScript en el servidor, lo que simplifica enormemente la sincronización entre el frontend y el backend. Esto ha sido fundamental para mantener una base de código uniforme y fácilmente mantenible, permitiéndome implementar nuevas características de manera rápida y efectiva.",
            },
            {
                id: 3,
                name: "Express",
                image: express,
                description: "En el corazón del servidor backend, Express ha sido fundamental para la configuración y gestión de rutas, la implementación de middleware y la creación de API REST full. Su enfoque minimalista y su potente conjunto de características me ha permitido desarrollar un backend robusto y altamente escalable.",
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/barbershop-client",
            server: "https://github.com/Gaston-Valentini/barbershop-server",
        },
    },
];

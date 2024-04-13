import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import google from "../assets/images/google.png";

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
                <span style={{ color: "white", fontWeight: "600" }}>💻 Diseño moderno y responsivo</span>
                <br />
                La landing page presenta un diseño moderno y elegante, completamente responsivo y adaptado a diversas resoluciones de pantalla. La estética refinada busca ofrecer una experiencia visual pulcra y atractiva para los usuarios.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>📍 Integración con Places API de Google</span>
                <br />
                Implementé el servicio de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service?hl=es-419" target="_blank">
                    Places API de Google
                </a>{" "}
                para obtener reseñas del establecimiento ficticio (tomé prestadas las reseñas de un restaurante con su consentimiento). Para solventar los problemas de CORS al realizar la petición desde React, establecí un servidor intermedio mediante Express como "CORS Proxy".
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🗺️ Servicio de Google Maps</span>
                <br />
                La ubicación del establecimiento ficticio se presenta a través de un mapa interactivo gracias a la implementación del servicio de Google Maps (como es un local ficticio la ubicación la configuré en Buenos Aires, Argentina). Esta funcionalidad no solo aporta un componente visual atractivo, sino que también mejora la experiencia del usuario al proporcionar información geográfica relevante.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>➡️ Slider dinámico con react-slick</span>
                <br />
                Se incorporaron dos sliders dinámicos mediante la biblioteca{" "}
                <a href="https://www.npmjs.com/package/react-slick" target="_blank">
                    react-slick
                </a>
                , ofreciendo una presentación visualmente atractiva y funcional del contenido. Esto contribuye a mejorar la interactividad y la navegación dentro de la landing page.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🤖 Contenido Multimedia Generado con Inteligencia Artificial</span>
                <br />
                La inclusión de contenido multimedia generado con inteligencia artificial, como imágenes (
                <a href="https://leonardo.ai/" target="_blank">
                    Leonardo.ai
                </a>
                ) y textos (
                <a href="https://chat.openai.com/" target="_blank">
                    ChatGPT
                </a>
                ), añade un elemento distintivo a la propuesta. Este enfoque innovador busca personalizar y diferenciar la experiencia del usuario.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>⚙️ Configuración de variables de entorno para proteger información sensible</span>
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
            {
                id: 4,
                name: "Google API",
                image: google,
                description: "Para agregar información a nuestra web como lo son la ubicación utilizando un mapa interactivo, y las reseñas de clientes, he utilizado los servicios que ofrece Google, tanto para mapas como para lugares.",
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/barbershop-client",
            server: "https://github.com/Gaston-Valentini/barbershop-server",
        },
    },
    {
        id: 2,
        title: "Benilaser",
        deploy: "https://www.benilaser.es",
        description: (
            <p>
                Benilaser es un proyecto freelance desarrollado por cuenta propia, el cual se trata de la página web de una clínica de eliminación láser ubicada eb Benidorm, España.
                <br />
                <br />
                Debido a que el trabajo fue realizado para un cliente real, no está construida con motivo de aprendizaje, pero hay ciertos elementos que me parecen interesantes destacar de essta aplicación.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>💻 Diseño moderno y responsivo</span>
                <br />
                La página web presenta un diseño moderno y elegante, completamente responsivo y adaptado a diversas resoluciones de pantalla. La estética refinada busca ofrecer una experiencia visual pulcra y atractiva para los usuarios.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>📍 Integración con Places API de Google</span>
                <br />
                Implementé el servicio de{" "}
                <a href="https://developers.google.com/maps/documentation/places/web-service?hl=es-419" target="_blank">
                    Places API de Google
                </a>{" "}
                para obtener las reseñas de la clínica hechas por clientes reales. Para solventar los problemas de CORS al realizar la petición desde React, establecí un servidor intermedio mediante Express como "CORS Proxy".
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🗺️ Servicio de Google Maps</span>
                <br />
                Se ve representada la ubicación de la clínica mediante un mapa interactivo gracias a la implementación del servicio de Google Maps. Esta funcionalidad no solo aporta un componente visual atractivo, sino que también mejora la experiencia del usuario al proporcionar información geográfica relevante.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>➡️ Slider dinámico con react-slick</span>
                <br />
                Se incorporó un slider dinámico para presentar las reseñas de los usuarios en google maps, utilizando la biblioteca de npm{" "}
                <a href="https://www.npmjs.com/package/react-slick" target="_blank">
                    react-slick
                </a>{" "}
                . Este componente genera un aspecto visual atractivo para los usuarios.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>💬 Envío de mensaje</span>
                <br />
                Se agregó un botón fijo en la pantalla que permanezca ahí en todo momento, con el objetivo de que el usuario tenga al alcance el contacto directo de la clínica vía whatsapp.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>⚙️ Configuración de variables de entorno para proteger información sensible</span>
                <br />
                En aras de la seguridad, implementé una rigurosa configuración de variables de entorno para salvaguardar información sensible. Al externalizar y proteger datos como claves de API y configuraciones específicas, garantizo la confidencialidad de la información crítica.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>✉️ Envío de formulario con EmailJS</span>
                <br />
                Se configuró un formulario de contacto en el cual se realiza el envío de un email al dueño de la clínica con los datos de este formulario. Se utilizó el servicio que proporciona{" "}
                <a href="https://www.emailjs.com/" target="_blank">
                    EmailJS
                </a>{" "}
                para este trabajo.
                <br />
                <br />
                <span style={{ color: "white", fontWeight: "600" }}>🚀 Despliegue de servicios</span>
                <br />
                Utilicé el servicio gratuito que ofrece{" "}
                <a href="https://vercel.com/" target="_blank">
                    Vercel
                </a>{" "}
                para desplegar tanto el servidor como la interfaz de usuario de este proyecto.
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
            {
                id: 4,
                name: "Google API",
                image: google,
                description: "Para agregar información a nuestra web como lo son la ubicación utilizando un mapa interactivo, y las reseñas de clientes, he utilizado los servicios que ofrece Google, tanto para mapas como para lugares.",
            },
        ],
        repositories: {
            client: "https://github.com/Gaston-Valentini/benilaser-client",
            server: "https://github.com/Gaston-Valentini/benilaser-client",
        },
    },
];

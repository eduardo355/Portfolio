import { ActiveDark } from "../store/DarkMode";

const Projects = () => {
    const { stateDark } = ActiveDark((state) => ({
        stateDark: state.stateDark,
    }));

    const sectionStyles = {
        padding: "20px",
        marginTop: "10rem",
        backgroundColor: stateDark ? "black" : "transparent",
        color: stateDark ? "white" : "black",
    };

    const containerCardStyles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
    };

    const cardStyles = {
        flex: "1",
        border: `1px solid ${stateDark ? "white" : "rgb(229, 229, 229)"}`,
        padding: "2rem",
        marginTop: "2rem",
        borderRadius: "5px",
        backgroundColor: stateDark ? "rgb(36, 36, 36)" : "white",
        color: stateDark ? "white" : "black",
    };

    const titleStyles = {
        fontSize: "22px",
        marginBottom: "10px",
        fontWeight: '700'
    };

    const descriptionStyles = {
        color: stateDark ? "lightgray" : "gray",
    };

    const imageStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        marginTop: "1rem",
    };

    const buttonStyles = {
        marginTop: "0.5rem",
        textAlign: "center",
    };

    const linkStyles = {
        color: stateDark ? "gray" : "black",
        textDecoration: "none",
    };

    return (
        <section id="Projects" style={sectionStyles}>
            <br />
            <br />
            <br />
            <br />
            <h2>Proyectos Personales</h2>
            <div className="ContainerCard" style={containerCardStyles}>

                <div className="card" style={cardStyles}>
                    <div className="tittle" style={titleStyles}>
                        CALCULADORA
                    </div>
                    <div className="description" style={descriptionStyles}>
                        Desarrollé una calculadora interactiva utilizando 
                        las tecnologías modernas de React y Vite. Esta calculadora 
                        no solo realiza operaciones matemáticas básicas como suma, 
                        resta, multiplicación y división, sino que también destaca 
                        por su diseño intuitivo y eficiencia en el desarrollo.
                    </div>
                    <div className="img" style={imageStyles}>
                        <img src="../CALCULATOR.png" alt="Imagen" height={400} width={800} />
                    </div>
                    <div className="btn" style={buttonStyles}>
                        <a
                            href="https://calculator-v1-sigma.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            style={linkStyles}
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <div className="tittle" style={titleStyles}>
                        POKE - API
                    </div>
                    <div className="description" style={descriptionStyles}>
                        Desarrollé una aplicación web de PokeDex utilizando Vite y la
                        PokeAPI para obtener datos de Pokémon. La aplicación ofrece una
                        experiencia de usuario fluida al explorar y buscar Pokémon, con un
                        diseño moderno y carga dinámica. Los usuarios pueden acceder
                        fácilmente a información detallada de los Pokémon en una interfaz
                        sencilla y receptiva.
                    </div>
                    <div className="img" style={imageStyles}>
                        <img src="../pokeApi.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className="btn" style={buttonStyles}>
                        <a
                            href="https://main--majestic-elf-59f6cd.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            style={linkStyles}
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <div className="tittle" style={titleStyles}>
                        TODO
                    </div>
                    <div className="description" style={descriptionStyles}>
                        Cree una sencilla aplicación TODO utilizando HTML y JavaScript. Los
                        usuarios pueden agregar, marcar como completadas y eliminar tareas.
                        La interfaz es intuitiva, permitiendo una gestión eficiente de
                        tareas pendientes. La aplicación se destaca por su simplicidad y
                        facilidad de uso, brindando una solución rápida para organizar
                        tareas diarias.
                    </div>
                    <div className="img" style={imageStyles}>
                        <img src="../TODO.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className="btn" style={buttonStyles}>
                        <a
                            href="https://majestic-lily-339b37.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            style={linkStyles}
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <div className="tittle" style={titleStyles}>
                        TRADUCTOR
                    </div>
                    <div className="description" style={descriptionStyles}>
                        Desarrollé una aplicación de traducción utilizando React y Vite,
                        integrando la API de Traductor de Google mediante RapidAPI.
                        Permite a los usuarios ingresar texto en un idioma y obtener
                        traducciones rápidas en tiempo real. Esta aplicación destaca
                        mi habilidad para trabajar con tecnologías modernas y APIs
                        externas para crear soluciones prácticas y eficientes.
                    </div>
                    <div className="img" style={imageStyles}>
                        <img src="../Translate.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className="btn" style={buttonStyles}>
                        <a
                            href="https://translate-v1.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            style={linkStyles}
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <div className="tittle" style={titleStyles}>
                        RICK AND MORTY - API
                    </div>
                    <div className="description" style={descriptionStyles}>
                        Rick and Morty Explorer es una aplicación web desarrollada
                        con React y Vite que permite a los usuarios explorar información
                        sobre los personajes de la famosa serie de televisión
                        Rick and Morty. La aplicación utiliza la API pública de Rick
                        and Morty para obtener datos actualizados sobre los personajes.
                    </div>
                    <div className="img" style={imageStyles}>
                        <img src="../RickAndMorty.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className="btn" style={buttonStyles}>
                        <a
                            href="https://rick-and-morty-api-liart.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            style={linkStyles}
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;


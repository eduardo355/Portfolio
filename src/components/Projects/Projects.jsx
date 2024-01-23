
const Projects = () => {

    return (
        <section id="Projects" className=" p-5 mt-40 bg-transparen">
            <br />
            <br />
            <br />
            <br />
            <h2 className=" text-2xl font-bold mb-4 dark:text-white">Proyectos Personales</h2>
            <div className=" flex flex-col mb-4 justify-center" >

                <div className=" p-3 border border-gray-500 rounded-md mb-8">
                    <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white">
                        CALCULADORA
                    </div>
                    <div className=" text-gray-500 dark:text-white">
                        Desarrollé una calculadora interactiva utilizando 
                        las tecnologías modernas de React y Vite. Esta calculadora 
                        no solo realiza operaciones matemáticas básicas como suma, 
                        resta, multiplicación y división, sino que también destaca 
                        por su diseño intuitivo y eficiencia en el desarrollo.
                    </div>
                    <div className=" flex items-center justify-center p-4" >
                        <img src="../CALCULATOR.png" alt="Imagen" height={400} width={800} />
                    </div>
                    <div className=" text-center" >
                        <a
                            href="https://calculator-v1-sigma.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" text-gray-500 hover:text-black hover:dark:text-white"
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className=" p-3 border border-gray-500 rounded-md mb-8">
                    <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white" >
                        POKE - API
                    </div>
                    <div className=" text-gray-500 dark:text-white">
                        Desarrollé una aplicación web de PokeDex utilizando Vite y la
                        PokeAPI para obtener datos de Pokémon. La aplicación ofrece una
                        experiencia de usuario fluida al explorar y buscar Pokémon, con un
                        diseño moderno y carga dinámica. Los usuarios pueden acceder
                        fácilmente a información detallada de los Pokémon en una interfaz
                        sencilla y receptiva.
                    </div>
                    <div className=" flex items-center justify-center p-4">
                        <img src="../pokeApi.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className=" text-center" >
                        <a
                            href="https://main--majestic-elf-59f6cd.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" text-gray-500 hover:text-black hover:dark:text-white"
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className=" p-3 border border-gray-500 rounded-md mb-8">
                    <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white" >
                        TODO
                    </div>
                    <div className=" text-gray-500 dark:text-white">
                        Cree una sencilla aplicación TODO utilizando HTML y JavaScript. Los
                        usuarios pueden agregar, marcar como completadas y eliminar tareas.
                        La interfaz es intuitiva, permitiendo una gestión eficiente de
                        tareas pendientes. La aplicación se destaca por su simplicidad y
                        facilidad de uso, brindando una solución rápida para organizar
                        tareas diarias.
                    </div>
                    <div className=" flex items-center justify-center p-4">
                        <img src="../TODO.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className=" text-center" >
                        <a
                            href="https://majestic-lily-339b37.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" text-gray-500 hover:text-black hover:dark:text-white"
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className=" p-3 border border-gray-500 rounded-md mb-8">
                    <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white"  >
                        TRADUCTOR
                    </div>
                    <div className=" text-gray-500 dark:text-white">
                        Desarrollé una aplicación de traducción utilizando React y Vite,
                        integrando la API de Traductor de Google mediante RapidAPI.
                        Permite a los usuarios ingresar texto en un idioma y obtener
                        traducciones rápidas en tiempo real. Esta aplicación destaca
                        mi habilidad para trabajar con tecnologías modernas y APIs
                        externas para crear soluciones prácticas y eficientes.
                    </div>
                    <div className=" flex items-center justify-center p-4">
                        <img src="../Translate.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className=" text-center" >
                        <a
                            href="https://translate-v1.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" text-gray-500 hover:text-black hover:dark:text-white"
                        >
                            Ver proyecto
                        </a>
                    </div>
                </div>

                <div className=" p-3 border border-gray-500 rounded-md mb-8">
                    <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white" >
                        RICK AND MORTY - API
                    </div>
                    <div className=" text-gray-500 dark:text-white">
                        Rick and Morty Explorer es una aplicación web desarrollada
                        con React y Vite que permite a los usuarios explorar información
                        sobre los personajes de la famosa serie de televisión
                        Rick and Morty. La aplicación utiliza la API pública de Rick
                        and Morty para obtener datos actualizados sobre los personajes.
                    </div>
                    <div className=" flex items-center justify-center p-4">
                        <img src="../RickAndMorty.png" alt="Imagen" height={300} width={600} />
                    </div>
                    <div className=" text-center">
                        <a
                            href="https://rick-and-morty-api-liart.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" text-gray-500 hover:text-black hover:dark:text-white"
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


import { PROJECTS } from "./Projects";
const Projects = () => {

    return (
        <section id="Projects" className=" p-5 mt-40 bg-transparen">
            <br />
            <br />
            <h2 className=" text-2xl font-bold mb-4 dark:text-white">Proyectos Personales</h2>
            <div className=" flex flex-col mb-4 justify-center" >

                {PROJECTS.map((projecto) => {
                        return(
                            <div key={projecto.id} className=" p-3 border border-gray-500 rounded-md mb-8">
                                <div className="text-2xl mb-3 font-bold text-gray-500 dark:text-white" >
                                    {projecto.name}
                                </div>
                                <div className=" text-gray-500 text-balance text-center text-xl max-sm:text-base">
                                    {projecto.descripcion}
                                </div>
                                <div className=" flex items-center justify-center p-4">
                                    <img src={projecto.img} alt="Imagen" width={700} />
                                </div>
                                <div className=" flex justify-center gap-6 ">
                                    <a
                                        href={projecto.urlPage}
                                        target="_blank"
                                        rel="noreferrer"
                                        className=" text-gray-500 hover:text-black hover:dark:text-white"
                                    >
                                        Ver proyecto
                                    </a>
                                    <a
                                        href={projecto.git}
                                        target="_blank"
                                        rel="noreferrer"
                                        className=" text-gray-500 hover:text-black hover:dark:text-white"
                                    >
                                        Ver Codigo
                                    </a>
                                </div>
                            </div>
                    )})
                }

            </div>
        </section>
    );
};

export default Projects;


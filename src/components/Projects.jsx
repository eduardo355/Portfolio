import '../css/Projects.css'

const Projects = () => {
    return (
        <section id='Projects'>
            <br /><br />
            <h2>Proyectos</h2>
            <div className='ContainerCard'>
                <div className="card">
                    <div className="tittle">Poke Api</div>
                    <div className="description">Desarrollé una aplicación web de PokeDex utilizando Vite y la PokeAPI para obtener datos de Pokémon. La aplicación ofrece una experiencia de usuario fluida al explorar y buscar Pokémon, con un diseño moderno y carga dinámica. Los usuarios pueden acceder fácilmente a información detallada de los Pokémon en una interfaz sencilla y receptiva.</div>
                    <div className="img">
                        <img src="../pokeApi.png" alt="Imagen" height={300} width={500}/>
                    </div>
                    <div className="btn">
                        <a href="https://main--majestic-elf-59f6cd.netlify.app/" target='_blank' rel='noreferrer'>Ver proyecto</a>
                    </div>
                </div>

                <div className="card">
                    <div className="tittle">TODO</div>
                    <div className="description">Cree una sencilla aplicación TODO utilizando HTML y JavaScript. Los usuarios pueden agregar, marcar como completadas y eliminar tareas. La interfaz es intuitiva, permitiendo una gestión eficiente de tareas pendientes. La aplicación se destaca por su simplicidad y facilidad de uso, brindando una solución rápida para organizar tareas diarias.</div>
                    <div className="img">
                        <img src="../TODO.png" alt="Imagen" height={300} width={500}/>
                    </div>
                    <div className="btn">
                        <a href="https://majestic-lily-339b37.netlify.app/" target='_blank' rel='noreferrer'>Ver proyecto</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
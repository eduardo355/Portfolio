
import '../assets/css/AboutMe.css'
const AboutMe = () => {
    return (
        <section id='about'>
            <br /><br />
            <h2>Sobre mi</h2>
            <div className="ContainerAbout">
                <img src="./Perfil.jpeg" width={250} alt="Foto de perfil" />
                <p>Estudiante comprometido de Ingeniería en Tecnología del Software, enfocado en la exploración 
                    y comprensión profunda de la programación. Mi trayectoria académica se fusiona con una 
                    pasión por abordar desafíos y resolver problemas mediante el código. Busco oportunidades 
                    para crecer y colaborar en entornos que fomenten la innovación y el desarrollo tecnológico.</p>
            </div>  
        </section>
    )
}

export default AboutMe
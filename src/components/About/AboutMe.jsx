import { ActiveDark } from '../store/DarkMode';

const AboutMe = () => {
  const { stateDark } = ActiveDark((state) => ({
    stateDark: state.stateDark,
  }));

  const sectionStyles = {
    padding: '20px',
    backgroundColor: stateDark ? 'black' : 'transparent',
    color: stateDark ? 'white' : 'black',
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    textAlign: 'center',
  };

  const paragraphStyles = {
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto',
    color: stateDark ? 'white' : 'gray',
  };

  const imageStyles = {
    borderRadius: '50%',
    maxWidth: '100%',
  };

  return (
    <section id='about' style={sectionStyles}>
      <br />
      <br />
      <br />
      <br />
      <h2>Sobre mi</h2>
      <div className="ContainerAbout" style={containerStyles}>
        <img src="./Perfil.png" width={250} alt="Foto de perfil" style={imageStyles} />
        <p style={paragraphStyles}>
          Estudiante comprometido de Ingeniería en Tecnología del Software, enfocado en la exploración y
          comprensión profunda de la programación. Mi trayectoria académica se fusiona con una pasión por
          abordar desafíos y resolver problemas mediante el código. Busco oportunidades para crecer y
          colaborar en entornos que fomenten la innovación y el desarrollo tecnológico.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

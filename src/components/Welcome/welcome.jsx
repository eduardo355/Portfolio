import { ActiveDark } from '../store/DarkMode';

const Welcome = () => {
  const { stateDark } = ActiveDark((state) => ({
    stateDark: state.stateDark
  }));

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '44vh',
    textAlign: 'center',
    paddingBottom: '17vh'
  };

  const spanStyles = {
    fontSize: '3vw',
    lineHeight: 1.5,
    color: stateDark ? '#fff' : 'gray',
  };

  const pStyles = {
    maxWidth: '80%',
    fontSize: '1.5vw',
    lineHeight: 1.5,
    color: stateDark ? '#fff' : 'gray',
  };

  return (
    <div id='Home' style={containerStyles}>
      <span style={spanStyles}>Bienvenido mi nombre es <strong style={{ color: '#44749d' }}>Eduardo Tovar</strong></span>
      <p style={pStyles}>Un programador e ingeniero apasionado dedicado a crear soluciones innovadoras y eficientes.</p>
    </div>
  );
};

export default Welcome;



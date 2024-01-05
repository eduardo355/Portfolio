// Welcome.js
import './WelcomeLight.css'; // Estilos por defecto para el modo de luz
import './WelcomeDark.css';  // Estilos adicionales para el modo oscuro
import { ActiveDark } from '../store/DarkMode';

const Welcome = () => {
  const { stateDark } = ActiveDark((state) => ({
    stateDark: state.stateDark,
  }));

  return (
    <div id='Home' className="ContainerWelcome">
      <span>Bienvenido mi nombre es <strong>Eduardo Tovar</strong></span>
      <p>Un programador e ingeniero apasionado dedicado a crear soluciones innovadoras y eficientes.</p>
    </div>
  );
};

export default Welcome;


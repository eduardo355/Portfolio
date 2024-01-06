
import './Nav.css';
import { ActiveDark } from '../store/DarkMode';

const Nav = () => {
  const { stateDark } = ActiveDark((state) => ({
    stateDark: state.stateDark
  }));
  const { optionDark } = ActiveDark();

  const navStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '15px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: stateDark ? 'black' : 'white', // Cambia el fondo en modo oscuro
  };

  const linkStyles = {
    cursor: 'pointer',
    color: stateDark ? 'white' : 'gray', // Ajusta el color del texto según el modo
    textDecoration: 'none',
  };

  const hoverStyles = {
    color: stateDark ? 'white' : 'black', // Ajusta el color al pasar el mouse según el modo
  };

  return (
    <div style={navStyles}>
      <a href='#Home' style={linkStyles} onMouseEnter={() => stateDark && hoverStyles}>
        Inicio
      </a>
      <a href='#Projects' style={linkStyles} onMouseEnter={() => stateDark && hoverStyles}>
        Proyectos
      </a>
      <a href='#skills' style={linkStyles} onMouseEnter={() => stateDark && hoverStyles}>
        Habilidades
      </a>
      <a href='#about' style={linkStyles} onMouseEnter={() => stateDark && hoverStyles}>
        Sobre mi
      </a>
      <a href='#Contact' style={linkStyles} onMouseEnter={() => stateDark && hoverStyles}>
        Contactame
      </a>
      <div className='checkbox-wrapper-55'>
        <label className='rocker rocker-small'>
          <input type='checkbox' name='' id='' onChange={() => optionDark(!stateDark)} />
          <span className='switch-left'>Yes</span>
          <span className='switch-right'>No</span>
        </label>
      </div>
    </div>
  );
};

export default Nav;

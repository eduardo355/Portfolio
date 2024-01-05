
import './Nav.css'
import { ActiveDark } from './store/DarkMode'

const Nav = () => {

    const { stateDark } = ActiveDark((state) => ({
        stateDark: state.stateDark
      }))
      const { optionDark } = ActiveDark()
    
      console.log(stateDark);
    return (
        <nav>
                <a href='#Home'>Inicio</a>
                <a href='#Projects'>Proyectos</a>
                <a href='#skills'>Habilidades</a>
                <a href='#about'>Sobre mi</a>
                <a href='#Contact'>Contactame</a>
                <div className="checkbox-wrapper-55">
                    <label className="rocker rocker-small">
                    <input type="checkbox" name="" id="" onChange={() => optionDark(!stateDark)}/>
                    <span className="switch-left">Yes</span>
                    <span className="switch-right">No</span>
                    </label>
                </div>
        </nav>
    )
}

export default Nav
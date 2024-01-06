import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/welcome';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import AboutMe from './components/About/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import './main.css';
import Footer from './components/Footer';
import { ActiveDark } from './components/store/DarkMode';

function App() {
  const { stateDark } = ActiveDark((state) => ({
    stateDark: state.stateDark
  }));

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: stateDark ? 'black' : 'white',
    margin: 'auto', 
    padding: '20px',
    width: '60vw', 
  };


  return (
    <main style={{ backgroundColor: stateDark ? 'black' : 'transparent' }}>
      <div className="container" style={{ ...containerStyles }}>
        <Nav />
        <Welcome />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}

export default App;



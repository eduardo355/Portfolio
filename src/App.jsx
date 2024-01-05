
import Nav from './components/Nav'
import Welcome from './components/Welcome/welcome'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import './main.css'
import Footer from './components/Footer'
function App() {


  return (
    <main>
      <div className="container">
        <Nav />
        <Welcome />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </main>
  )
}

export default App

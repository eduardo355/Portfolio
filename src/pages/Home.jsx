import Nav from '../components/Nav/Nav'
import Welcome from '../components/Welcome/welcome'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import AboutMe from '../components/About/AboutMe'
import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer'
import { ExperienceLaboral } from '../components/experienceLaboral/ExperienceLaboral'

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 max-sm:w-full relative">
        <div className="h-screen">
          <Nav />
          <Welcome />
        </div>
        <ExperienceLaboral />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default Home

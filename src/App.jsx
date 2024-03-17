import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/welcome';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import AboutMe from './components/About/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer';
import '@fontsource-variable/jetbrains-mono';

function App() {



  return (
    <main className=' bg-transparent dark:bg-black'>
      <div className="container flex flex-col items-center justify-center m-auto p-5m w-2/3 max-sm:w-full" >
        <div className='h-screen'>
        <Nav />
        <Welcome />
        </div>
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



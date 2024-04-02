
import Menu from '../Icons/Menu';
import './Nav.css';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [menu, setMenu] = useState(true)
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div 
    className='fixed top-0 left-0 right-0 bg-white dark:bg-black'>
      <button className='p-2' onClick={() => setMenu(!menu)}>
        <Menu />
      </button>
        
        <nav className={`flex flex-col ${menu ? 'max-sm:hidden' : ''} sm:flex-row sm:items-center sm:justify-center sm:gap-7`}>
          <a href='#Home' onClick={() => setMenu(!menu)} className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Inicio
          </a>
          <a href='#Projects' onClick={() => setMenu(!menu)} className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Proyectos
          </a>
          <a href='#skills' onClick={() => setMenu(!menu)} className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Habilidades
          </a>
          <a href='#about ' onClick={() => setMenu(!menu)} className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Sobre mi
          </a>
          <a href='#Contact' onClick={() => setMenu(!menu)} className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Contactame
          </a>
          <div className="flex items-center justify-center flex-row-reverse gap-4">
            <div className="checkbox-wrapper-54">
              <label className="switch">
                <input type="checkbox" checked={theme === 'dark'} onChange={() => handleChangeTheme()} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Nav;


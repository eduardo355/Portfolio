
import './Nav.css';
import { useEffect, useState } from 'react';

const Nav = () => {
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
    <div className='flex flex-col sm:flex-row justify-center items-center gap-5 p-4 fixed top-0 left-0 right-0 w-full bg-white dark:bg-black max-sm:flex-col max-sm:w-svw max-sm:hidden'>
        <>
          <a href='#Home' className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Inicio
          </a>
          <a href='#Projects' className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Proyectos
          </a>
          <a href='#skills' className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Habilidades
          </a>
          <a href='#about' className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
            Sobre mi
          </a>
          <a href='#Contact' className='text-gray-500 text-lg hover:text-black hover:dark:text-white'>
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
        </>
    </div>
  );
};

export default Nav;


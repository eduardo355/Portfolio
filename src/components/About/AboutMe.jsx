
const AboutMe = () => {

  return (
    <section id='about' className=' p-5'>
      <br />
      <br />
      <h2 className='text-2xl font-bold dark:text-white'>Sobre Mi</h2>
      <div className=" flex flex-col items-center gap-4 p-4 text-center" >
        <img src="./Perfil.png" className=" rounded-full" width={250} alt="Foto de perfil" />
        <p className=' text-xl w-[600px] text-gray-500 max-sm:w-full text-balance'>
          Estudiante comprometido de Ingeniería en Tecnología del Software, enfocado en la exploración y
          comprensión profunda de la programación. Mi trayectoria académica se fusiona con una pasión por
          abordar desafíos y resolver problemas mediante el código. Busco oportunidades para crecer y
          colaborar en entornos que fomenten la innovación y el desarrollo tecnológico.
        </p>
      </div>
    </section>
  )
}

export default AboutMe

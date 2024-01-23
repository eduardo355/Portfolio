
const ContactMe = () => {

    return (
        <section id='Contact' className="p-5 w-2/3 dark:text-white max-sm:w-full">
            <br />
            <br />
            <br />
            <br />
            <h2 className="text-2xl font-bold dark:text-white">Contactame</h2>
            <div className=" flex items-center justify-center p-4">
                <form method="POST" action="https://formsubmit.co/tovareduardo75@gmail.com" className=" flex flex-col w-3/4 max-sm:w-11/12">
                    <input type="text" name='name' placeholder="Nombre" className=" w-full p-4 text-base mb-4 rounded-md border border-gray-400 focus:outline-none"/>
                    <input type="email" name='email' placeholder="Correo" className="w-full p-4 text-base mb-4 rounded-md border border-gray-400 focus:outline-none" />
                    <textarea name='message' cols="30" rows="5" placeholder="Mensaje" className=" p-4 text-base mb-4 rounded-md border border-gray-400 resize-y"></textarea>
                    <button className=" bg-transparent border-none text-base font-bold text-gray-500">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;

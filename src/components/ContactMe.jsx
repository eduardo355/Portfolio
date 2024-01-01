import '../css/ContactMe.css'


const ContactMe = () => {

    return (
        <section id='Contact'>
            <br /><br />
            <h2>Contactame</h2>
            <div className="ContainerContacto">
                <form method="POST" action="https://formsubmit.co/tovareduardo75@gmail.com">
                    <input type="text" name='name' placeholder="Nombre"/>
                    <input type="email" name='email' placeholder="Correo"  />
                    <textarea 
                    name='message'
                    cols="30" 
                    rows="5" 
                    placeholder="Mensaje"
                    ></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactMe
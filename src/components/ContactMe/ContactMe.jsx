import { ActiveDark } from "../store/DarkMode";

const ContactMe = () => {
    const { stateDark } = ActiveDark((state) => ({
        stateDark: state.stateDark
    }));

    const sectionStyles = {
        padding: '20px',
        backgroundColor: stateDark ? 'black' : 'transparent',
        color: stateDark ? 'white' : 'black',
    };

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        width: '100%',
    };

    const inputStyles = {
        width: '100%',
        padding: '1rem',
        fontSize: '17px',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: `0.5px solid ${stateDark ? 'gray' : 'black'}`,
        boxSizing: 'border-box',
    };

    const textareaStyles = {
        width: '100%',
        padding: '1rem',
        fontSize: '17px',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: `0.5px solid ${stateDark ? 'gray' : 'black'}`,
        boxSizing: 'border-box',
        resize: 'vertical',
    };

    const buttonStyles = {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: stateDark ? 'white' : 'black',
    };

    return (
        <section id='Contact' style={sectionStyles}>
            <br />
            <br />
            <br />
            <br />
            <h2>Contactame</h2>
            <div className="ContainerContacto" style={containerStyles}>
                <form method="POST" action="https://formsubmit.co/tovareduardo75@gmail.com" style={formStyles}>
                    <input type="text" name='name' placeholder="Nombre" style={inputStyles} />
                    <input type="email" name='email' placeholder="Correo" style={inputStyles} />
                    <textarea name='message' cols="30" rows="5" placeholder="Mensaje" style={textareaStyles}></textarea>
                    <button style={buttonStyles}>Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;

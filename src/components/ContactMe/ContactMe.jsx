import { useRef } from 'react'
import { sendEmail } from './sendEmail'

const ContactMe = () => {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      const formDataObject = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }
      const result = await sendEmail(formDataObject)
      if (result === 1) {
        alert('Email sent successfully!')
      } else {
        alert('Failed to send email.')
      }
    }
  }

  return (
    <section id="Contact" className="p-5 dark:text-white max-sm:w-full">
      <h2 className="text-3xl font-bold dark:text-white">Contactame</h2>
      <div className="flex items-center justify-center p-4">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col max-sm:w-11/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full p-4 text-base mb-4 rounded-md border border-gray-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            className="w-full p-4 text-base mb-4 rounded-md border border-gray-400 focus:outline-none"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Mensaje"
            className="p-4 text-base mb-4 rounded-md border border-gray-400 resize-y"
          ></textarea>
          <button className="bg-transparent border-none text-base font-bold text-gray-500">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe

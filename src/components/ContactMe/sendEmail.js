import emailJS from '@emailjs/browser'

export const sendEmail = async (formData) => {
  const { name, email, message } = formData

  const data = {
    name,
    email,
    message,
  }

  try {
    await emailJS.send(
      'service_hy1v22n',
      'template_64l2szi',
      data,
      'dELDgsbLnO6JD0AvR'
    )
    return 1
  } catch (error) {
    console.error('Error sending email:', error)
    return 2
  }
}

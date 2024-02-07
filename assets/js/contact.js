/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_h0uku8a', 'template_dj3i0fr', '#contact-form','9kiKNDu_MdwSufD3D')
        .then(() => {
            //show send message
            contactMessage.textContent = 'Got your message, thank you so much ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear Input Fields

            contactForm.reset()
        }, () => {
            //Show Error Message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)
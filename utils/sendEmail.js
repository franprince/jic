import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ nombre, mensaje, presupuesto, producto }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
                to: [
                    {
                      email: 'mul.julieta@gmail.com'
                    }
                  ],
                  subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'mul.julieta@gmail.com',
          },
          content: [
            {
              type: 'text/html',
              value: `<b>Nombre</b>: ${nombre}<br>
              <b>Mensaje</b>: ${mensaje}<br>
              <b>Producto</b>: ${producto}<br>
              <b>Presupuesto</b>: ${presupuesto}`
            }
          ]
        })
    });
}

export { sendEmail };
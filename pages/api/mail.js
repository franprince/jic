// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  const body = JSON.parse(req.body)

  const message = `
  Name: ${body.name}\r\n
  Message: ${body.message}\r\n
  Producto: ${body.producto}\r\n
  Presupuesto: ${body.presupuesto}`

  const data = {
    to: 'mul.julieta@gmail.com',
    from: 'mul.julieta@gmail.com',
    subject: 'Nuevo Mensaje en JIC',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data)
  res.status(200).json({ status: "Ok" })
}

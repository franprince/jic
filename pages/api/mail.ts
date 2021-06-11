// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const mail = require('@sendgrid/mail')
// mail.setApiKey(process.env.SENDGRID_API_KEY)

// export default (req, res) => {
//   const body = JSON.parse(req.body)

//   const message = `
//   Name: ${body.name}\r\n
//   Message: ${body.message}\r\n
//   Producto: ${body.producto}\r\n
//   Presupuesto: ${body.presupuesto}`

//   const data = {
//     to: 'mul.julieta@gmail.com',
//     from: 'mul.julieta@gmail.com',
//     subject: 'Nuevo Mensaje en JIC',
//     text: message,
//     html: message.replace(/\r\n/g, '<br>')
//   }

//   mail.send(data)
//   res.status(200).json({ status: "Ok" })
// }

import { NextApiRequest, NextApiResponse  } from 'next';

import { sendEmail } from '../../utils/sendEmail.js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { nombre, mensaje, presupuesto, producto } = req.body;
      await sendEmail({ nombre, mensaje, presupuesto, producto });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
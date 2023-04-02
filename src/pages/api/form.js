import { trans, mailOptions } from "../../../config/nodeMailer"

export default async (req, res) => {
    const {navn, tlf, email, txt} = req.body
    if(!navn || !tlf ||!email || !txt){
        return res.status(400).json({ message: "Fejl"})
    }
    
    const html = `
    <h3>Fra: ${navn}<h3>
    <p>Tlf: ${tlf}</p>
    <p>E-mail: ${email}</p>
    <p>${txt}</p>
    `
    await trans.sendMail({
        ...mailOptions,
        subject: "New message",
        text: "This is a test",
        html: html
    })
    return res.status(200).json({success: true})

  }
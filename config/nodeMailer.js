import nodemailer from "nodemailer"

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS
export const trans = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass
    }
})

export const mailOptions = {
    from: email,
    to: "info@saldi.dk"
}
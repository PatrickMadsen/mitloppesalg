import { IncomingForm } from 'formidable'

const mv = require('mv')

export const config = {
    api: {
      bodyParser: false
    }
  }

export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            let oldPath = files.file.filepath
            let newPath = `./public/${files.file.originalFilename}`
            mv(oldPath, newPath, (err) => {
            })
            res.status(200).json({ fields, files })
        })
    })
}
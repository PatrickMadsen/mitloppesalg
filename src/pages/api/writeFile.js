const fs = require("fs")

export default (req, res) => {
    fs.writeFileSync("./db/loppemarkeder.json", JSON.stringify(req.body))
    return res.status(200).json({message: "File updated"})
}
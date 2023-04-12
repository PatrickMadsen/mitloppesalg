const fs = require('fs');

export default (req, res) => {
    fs.unlink("./public" + req.body, (err) => {
        console.log(req.body)
        if (err) {
            throw err
        }
    })
}
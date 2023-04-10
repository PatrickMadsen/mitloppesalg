export default async (req, res) => {
    const {username, password} = req.body
    if(username === process.env.USERNAME && password === process.env.PASSWORD){
        return res.status(200).json({succes: true})
    }
    return res.status(400).json({succes: false})
}
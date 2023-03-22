import connectionDB from "../database.js";

export default async function ClientsControllers(req, res){
    const {name, address, phone} = req.body;

    try {

        await connectionDB.query('INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)',
        [name, address, phone]
        )
        return res.sendStatus(201)
        
    } catch(err){
        return res.send(err).Status(500)
    }
}

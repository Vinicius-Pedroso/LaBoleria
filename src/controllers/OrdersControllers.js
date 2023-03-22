import connectionDB from "../database.js";

export default async function OrdersControllers(req, res){
    const {clientId, cakeId , quantity, totalPrice} = req.body;
    const dateNow = now()

    try {

        await connectionDB.query('INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1, $2, $3, $4, $5)',
        [clientId, cakeId, quantity, dateNow, totalPrice]
        )
        return res.sendStatus(201)
        
    } catch(err){
        return res.send(err).Status(500)
    }
}
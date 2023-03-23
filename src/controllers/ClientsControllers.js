import connectionDB from "../database.js";

export async function ClientsControllers(req, res){
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

export async function ClientOrdersControllers (req, res){
    const {clientId} = req.params.id;

    try {

        const clientOrders = connectionDB.query(`
        SELECT 
        id AS orderId, 
        quantity, 
        createdAt, 
        totalPrice 
        FROM orders LEFT JOIN name AS cakeName ON orders.cakeId = cakes.id
        WHERE clientId = $1`
        [clientId]
        );

        return res.send(clientOrders).Status(201)
    }catch (err){
        return res.send(err).Status(500)
    }

}
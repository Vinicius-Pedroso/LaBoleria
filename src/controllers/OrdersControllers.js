import connectionDB from "../database.js";

export async function OrdersPostControllers(req, res){
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

export async function OrdersGetControllers(req, res){
    const {date} = req.query.date;

    try {

        if(date){
            const ordersByDate = connectionDB.query('SELECT * FROM orders WHERE createdAt = $1', [date])
            //Query não feita

            return res.send(ordersByDate).Status(200)
        }

        const allOrders = connectionDB.query('SELECT * FROM orders WHERE createdAt = $1', [date])
        //Query não feita

        return res.send(allOrders).Status(200)

    }catch(err){
        return res.send(err).Status(500);
    }

}

export async function OrdersByIdControllers(req, res){
    const {id} = req.params.id;

    try {

        const ordersById = connectionDB.query('SELECT * FROM orders WHERE id = $1', [id])
        //Query não feita
        
        return res.sendStatus(404)

    }catch(err){
        return res.send(err).Status(500);
    }
    
}
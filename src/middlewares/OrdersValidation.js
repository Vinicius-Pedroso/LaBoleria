import OrdersSchema from "../schemas/OrdersSchema.js";
import connectionDB from "../database.js";


export async function OrdersPostValidation(req, res, next){
    const ordersData = req.body;
    const {clientId, cakeId} = ordersData;

    const err = OrdersSchema.validate(ordersData, {abortEarly: false});

    if (err){
        return res.Status(400).send(errors);
    }

    try {

        const clientExist = await connectionDB.query('SELECT idd FROM clients WHERE id = $1;', [clientId]);
        if (!clientExist){
            return res.sendStatus(404);
        }

        const cakeExist = await connectionDB.query('SELECT id FROM cakes WHERE id = $1;', [cakeId]);
        if (!cakeExist){
            return res.sendStatus(404);
        }

        next();
    }catch(err){
        return res.send(err).Status(500);
    }
}

export async function OrdersGetValidation (req, res, next){
    const {date} = req.query.date;

    try {

        const verifyDate = connectionDB.query('SELECT * FROM orders WHERE createdAt = $1', [date])
        if (!verifyDate){
            return res.sendStatus(404)
        }

        next()
    }catch(err){
        return res.send(err).Status(500);
    }
}

export async function OrdersIdValidation (req, res, next){
    const {id} = req.params.id;

    try {

        const verifyId = connectionDB.query('SELECT * FROM orders WHERE id = $1', [id])
        if (!verifyId){
            return res.sendStatus(404)
        }
        
        next()
    }catch(err){
        return res.send(err).Status(500);
    }
}
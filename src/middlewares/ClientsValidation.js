import clientSchema from "../schemas/ClientsSchema.js";
import connectionDB from "../database.js";


export async function ClientPostValidation(req, res, next){
    const clientData = req.body;
    const {phone} = clientData

    const err = clientSchema.validate(clientData, {abortEarly: false});

    if (err){
        return res.send(err).status(400);
    }

    try {

        const phoneExist = await connectionDB.query('SELECT phone FROM clients WHERE phone = $1;', [phone]);
        if (phoneExist){
            return res.sendStatus(409);
        }

        next();
    }catch(err){
        return res.send(err).status(500);
    }
}

export async function ClientOrdersValidation(req, res, next){
    const {clientId} = req.params.id;

    try {
        const clientExist = await connectionDB.query('SELECT * FROM clients WHERE id = $1', [clientId])
        if(!clientExist){
            return res.sendStatus(404)
        }

        next()

    }catch(err){
        return res.send(err).status(404)
    }
}
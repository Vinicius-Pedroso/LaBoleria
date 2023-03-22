import clientSchema from "../schemas/ClientsSchema.js";
import connectionDB from "../database.js";


export default async function ClientValidation(req, res, next){
    const clientData = req.body;
    const {phone} = clientData

    const err = clientSchema.validate(clientData, {abortEarly: false});

    if (err){
        const errors = err.details.map((detail) => detail.message);
        return res.Status(400).send(errors);
    }

    try {

        const phoneExist = await connectionDB.query('SELECT phone FROM clients WHERE phone = $1;', [phone]);
        if (phoneExist){
            return res.sendStatus(409);
        }

        next();
    }catch(err){
        return res.send(err).Status(500);
    }
}
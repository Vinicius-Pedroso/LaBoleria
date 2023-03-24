import cakeSchema from "../schemas/CakesSchema.js";
import connectionDB from "../database.js";


export async function CakesPostValidation(req, res, next){
    
    const cakeData = req.body;
    const {name, image} = cakeData;

    const err = cakeSchema.validate(cakeData, {abortEarly: false});

    if (err){
        const errors = err.details.map((detail) => detail.message);
        if(image){
            return res.Status(422).send(errors);
        }
        return res.Status(400).send(errors);
    }
    //erro 400
    try {

        const nameExist = await connectionDB.query('SELECT name FROM cakes WHERE name = $1;', [name]);
        if (nameExist){
            return res.sendStatus(409);
        }

        next();
    }catch(err){
        return res.send(err).Status(500);
    }
}
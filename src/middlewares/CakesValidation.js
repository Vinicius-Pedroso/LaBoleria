import cakeSchema from "../schemas/CakesSchema.js";
import connectionDB from "../database.js";


export async function CakesPostValidation(req, res, next){

    console.log("entrou no cake validation")
    
    const cakeData = req.body;
    const {name, image} = cakeData;

    const err = cakeSchema.validate(cakeData, {abortEarly: false});

    if (err){
        console.log(err)
        if(!image){
            console.log("erro na imagem")
            return res.status(422).send(err);
        }
        return res.status(400).send(err);
    }
    try {

        const nameExist = await connectionDB.query('SELECT name FROM cakes WHERE name = $1;', [name]);
        if (nameExist){
            return res.sendStatus(409);
        }

        next();
    }catch(err){
        return res.send(err).status(500);
    }
}
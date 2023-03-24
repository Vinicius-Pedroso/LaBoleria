import cakeSchema from "../schemas/CakesSchema.js";
import connectionDB from "../database.js";


export async function CakesPostValidation(schema){

    const cakeData = req.body;
    const {name, image} = cakeData;

    // console.log(cakeData)

    const error = cakeSchema.validate(cakeData, {abortEarly: false});
    console.log(error)

    if (error){
        if(!image){
            // console.log("erro na imagem")
            return res.status(422).send(error);
        }
        return res.status(400).send(error);
    }
    try {

        // console.log("entrou no try")
        const nameExist = await connectionDB.query('SELECT name FROM cakes WHERE name = $1;', [name]);
        if (nameExist){
            return res.sendStatus(409);
        }

        next();
    }catch(err){
        return res.send(err).status(500);
    }
}
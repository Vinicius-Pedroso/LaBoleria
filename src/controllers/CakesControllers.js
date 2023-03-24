import connectionDB from "../database.js";

export async function CakesPostControllers(req, res){
    const {name, price, description, image} = req.body;

    try {

        await connectionDB.query('INSERT INTO cakes (name, price, description, image) VALUES ($1, $2, $3, $4)',
        [name, price, description, image]
        )
        return res.sendStatus(201)
        
    } catch(err){
        return res.send(err).status(500)
    }
}

import joi from 'joi';

const cakeSchema = joi.object({
    name: string().min(2).required(),
    price: number().positive().required(),
    description: string(),
    image: string().required().uri()
})

export default cakeSchema;

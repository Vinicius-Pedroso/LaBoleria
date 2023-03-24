import Joi from 'joi';

const cakeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().precision(2).positive().greater(0).required(),
    description: Joi.string(),
    image: Joi.string().required().uri()
})

export default cakeSchema;

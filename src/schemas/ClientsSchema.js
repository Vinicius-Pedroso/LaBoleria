import Joi from 'joi';

const ClientSchema = Joi.object({
    name: Joi.string().min(3).required(),
    addredd: Joi.string().min(3).required(),
    phone: Joi.string().min(10).max(11).required()
});

export default ClientSchema;
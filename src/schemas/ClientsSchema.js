import joi from 'joi';

const ClientSchema = joi.object({
    name: joi.string().min(3).required(),
    addredd: joi.string().min(3).required(),
    phone: joi.string().min(10).max(11).required()
});

export default ClientSchema;
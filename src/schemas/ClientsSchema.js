import joi from 'joi';

const ClientSchema = joi.object({
    name: string().min(3).required(),
    addredd: string().min(3).required(),
    phone: string().min(10).Max(11).required()
});

export default ClientSchema;
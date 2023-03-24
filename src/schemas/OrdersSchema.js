import joi from 'joi';

const OrderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().integer().min(1).max(4)
})

export default OrderSchema;
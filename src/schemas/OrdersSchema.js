import joi from 'joi';

const OrderSchema = joi.object({
    clientId: number().required(),
    cakeId: number().required(),
    quantity: number().integer().min(1).max(4)
})

export default OrderSchema;
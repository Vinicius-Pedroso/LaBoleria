import Joi from 'joi';

const OrderSchema = Joi.object({
    clientId: Joi.number().required(),
    cakeId: Joi.number().required(),
    quantity: Joi.number().integer().min(1).max(4).required(),
    totalPrice: Joi.number().precision(2).positive().greater(0).required()
})

export default OrderSchema;
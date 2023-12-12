import Joi from "joi";

export const authUser = Joi.object ({
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3)
})
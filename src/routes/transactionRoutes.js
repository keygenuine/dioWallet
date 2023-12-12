import transactionController from '../controllers/transactionController.js'
import {Router} from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createTransaction } from '../schemas/validation/createTransaction.js'
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";

const transactionRouter = Router()
transactionRouter.use(authMiddleware)

transactionRouter.post(
    '/transaction', 
    validationSchemaMiddleware(createTransaction),
    transactionController.create
)
transactionRouter.get(
    '/transactions',
    transactionController.findAllByUser
)


transactionRouter.delete(
    '/deletar',
    transactionController.deleteTransaction
    )
transactionRouter.patch(
    '/edit',
    transactionController.editTransaction
)
    

export default transactionRouter
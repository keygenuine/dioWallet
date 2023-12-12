
import transactionRepository from "../repositories/transactionRepository.js";
import user from "../schemas/user.js";

async function create (body, id){
    if (!id) throw new Error("User id is required");

    return await transactionRepository.create({...body,userId:id})
}

async function findAllByUser (id) {
    if (!id) throw new Error("User id is required");
    return await transactionRepository.findAllByUser(id)
}

async function deleteTransaction (description, userId){
    if (Object.entries(description).length == 0) throw new Error ("Description not found");    
    return await transactionRepository.deleteTransaction(description.description, userId)
}

async function editTransaction(idTransaction,newValue) {
    if (!idTransaction || !newValue) throw new Error("'TransactionId' and 'newValue' required")
    return await transactionRepository.editTransaction(idTransaction, newValue)
}

export default {create, findAllByUser,deleteTransaction, editTransaction}
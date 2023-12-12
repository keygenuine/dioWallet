import transactionSchema from "../schemas/transaction.js";

async function create(data) {
    return transactionSchema.create(data)

}  

async function findAllByUser (id) {    
    return await transactionSchema.find({userId: id})
}

async function deleteTransaction(description, userId){
    let id = []
    const transactions = await transactionSchema.find({userId})
    transactions.forEach(transactions=>transactions.description == description? id.push(transactions._id ): '')
    if (id[0]==undefined) throw new Error ("Transaction not Found")
    return await transactionSchema.deleteOne({_id: id})    
}

async function editTransaction(idTransaction, newValue){
    const filter = {_id : idTransaction}
    const update = {value: newValue}
    return transactionSchema.findOneAndUpdate(filter, update)
}
export default {create, findAllByUser, deleteTransaction,editTransaction}
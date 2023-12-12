import transactionService from "../services/transactionService.js";


async function create (req, res) {
    const body = req.body;
    const { _id: id } = res.locals.user
    try{
     const transaction = await transactionService.create(body, id);
     return res.status(201).send(transaction);
    }catch (err) {
     res.status(409).send(err.message);
    }
}

async function findAllByUser(req,res) {
    const {_id: id} = res.locals.user;
    
    try{
        const transactions = await transactionService.findAllByUser(id)
        return res.send(transactions)
    }catch (err) {
        return res.status(404).send(err.message)
    } 
}
async function deleteTransaction(req,res) {
    const userId = res.locals.user._id
    const description = req.body // deleta pela descrição
    try{
        const deleted = await transactionService.deleteTransaction(description, userId)
        res.send('Transaction Deleted Succesfully')
    } catch (err) {
        return res.status(404).send(err.message)
    }
}

async function editTransaction (req, res){
    let idTransaction = req.body.id // edita pelo id da transação
    let newValue = req.body.newValue
    try{
        const editTransaction = await transactionService.editTransaction(idTransaction, newValue)
        res.send(editTransaction)
    }catch(err){
        return res.status(404).send(err.message)
    }
}




export default {create, findAllByUser, deleteTransaction, editTransaction}
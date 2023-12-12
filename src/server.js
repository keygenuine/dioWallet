import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";
import transaction from "./schemas/transaction.js";
import transactionRouter from "./routes/transactionRoutes.js";

const app = express();

connectDb();
app.use(json());
// app.post('/banheiro', (req, res)=>{
//     req.body
//     // service
//     // repository
//     // banco
//     res.send('faça suas necessidades ou nao')
// })

app.use(authRouter);
app.use(transactionRouter);
const port = process.env.PORT;
app.listen(port, ()=>console.log(`server listening on port ${port}`));


import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import CakesRouter from './routes/CakesRoutes.js';
import ClientsRouter from './routes/ClientsRoutes.js';
import RouterOrders from './routes/OrdersRoutes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(CakesRouter);
app.use(ClientsRouter);
app.use(RouterOrders);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
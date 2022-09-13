import express from 'express';
import 'dotenv/config';

import userRoute from './infrastructure/routes/user.route';
import dbInit from './infrastructure/db/mongo';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(userRoute);

dbInit().then();

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
});
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URI = `${process.env.MONGO_URI}`;

const dbInit = async () => {
    await connect(URI)
};

export default dbInit;


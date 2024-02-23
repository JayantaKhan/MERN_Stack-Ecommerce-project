import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-gxmebcs-shard-00-00.5mb4vwc.mongodb.net:27017,ac-gxmebcs-shard-00-01.5mb4vwc.mongodb.net:27017,ac-gxmebcs-shard-00-02.5mb4vwc.mongodb.net:27017/MERN-STACK?ssl=true&replicaSet=atlas-12jbag-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;

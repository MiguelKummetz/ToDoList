import mongoose from 'mongoose';

// import dotenv from 'dotenv'
// dotenv.config()

import express from 'express';
const app = express();

app.use(express.json());

// app.use(logger)

const MONGO_DB_URI = 'mongodb+srv://ami:1234@cluster0.kyprtz4.mongodb.net/?retryWrites=true&w=majority';
const PORT = 3001;

export const createServer = async() => {
    try {
        await mongoose.connect(MONGO_DB_URI);
        console.log('Conected to database');
        const server = app.listen(PORT, () => {
            console.log(`Server conected to port ${PORT}`);
        });
        return server;
    } catch (error) {
        console.log('Failed to connectto database', error);
    }
};
createServer();

app.get('/', (request, response) => {
    response.send('<h1>Database conected</h1>');
});
app.use((request, response) => {
    response.status(404).json({
        error: 'Path not found'
    });
});

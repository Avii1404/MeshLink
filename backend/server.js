import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/post.routes.js'; 
import userRoutes from './routes/user.routes.js'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads")); 


const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://abhi14032004_db_user:b3OL162duefvtoao@meshlink.pxw5pzq.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=MeshLink"
    )
    app.listen(9090, () => {
        console.log("Server is running on port 9090");
    })
}

start();
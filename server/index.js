import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postsRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", entended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", entended: true}));
app.use(cors());

dotenv.config();

app.use('/posts', postsRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server is running on: ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
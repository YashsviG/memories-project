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

app.get('/', (req, res) => {
    res.send('Hello to memories API');
})
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT || 5000, () => console.log(`Server is running on: ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
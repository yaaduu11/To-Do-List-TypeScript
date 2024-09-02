import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import route from './route';

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'ejs')

app.use('/', route)

mongoose.connect("mongodb://localhost:27017/todo_list")
    .then(()=> console.log('connected to MongoDB'))
    .catch((error) => console.log("failed to connect", error))

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${3000}`)
})
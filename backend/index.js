const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aman:aman@cluster0-bmpmn.mongodb.net/todo-app?retryWrites=true&w=majority')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api',require('./routes/index'))


const port = process.env.PORT || 5000


app.listen(port)
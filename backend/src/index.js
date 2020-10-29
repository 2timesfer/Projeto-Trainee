const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://trainee:trainee@cluster0.fdaua.mongodb.net/trainee?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./routes/auth')
const app = express()



port = process.env.port || 8000


app.use(authRoutes)
//app.use(express.json())


mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify : false
}).then( () => console.log('DB Connected'))
.catch((e) => console.log(e))


app.listen(port, () => {
    console.log('Server is running')
})
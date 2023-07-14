const express= require('express')
const route= require('./routes/route')
const { default: mongoose } = require('mongoose')

require('dotenv').config()
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI)
.then( () => console.log("mongodb is connected") )
.catch( (error) => console.log(error.message) )

app.use('/', route)

app.listen(process.env.PORT, () => {
    console.log(`express is running on PORT ${process.env.PORT}`)
})
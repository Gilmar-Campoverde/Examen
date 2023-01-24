const express=require('express')
const cors = require('cors')
const morgan = require('morgan')
const app=express()

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'))
app.use("/api/usuarios", require('./routes/usuarios.routes'))


 module.exports = app;

const mongoose = require('mongoose');

mongoose
.connect("mongodb://localhost:27017/exam",{
     useUnifiedTopology: true,
     useNewUrlParser:true,})
.then(db => console.log('Db is connected'))
.catch((err) => console.error(err));

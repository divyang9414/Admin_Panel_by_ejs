const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017')

db.on('connected', (err)=>{
    if(err){
        console.log('database is successfully NOT connected..!!');
        return false;
    }
    console.log('database is successfully connected..!!');
})

module.exports = db;
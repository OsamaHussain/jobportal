const mongoose = require('mongoose');

const db_connect = async ()=>{
    try {
        await mongoose.connect(process.env.mongo_uri, {
            useNewUrlParser: true
        });
        console.log("Database Successfully Connected!");
    } catch(error){
        console.log("Database Connection Failed!");
    }
}

module.exports = db_connect;
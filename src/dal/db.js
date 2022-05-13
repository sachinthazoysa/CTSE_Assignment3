const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const client = mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    
    err => {
        if(err){
            console.log(err);
            console.log("Something went wrong")
            process.exit(-1);
        }
        console.log("Successfully connected to the database")
    });

module.exports = client;    

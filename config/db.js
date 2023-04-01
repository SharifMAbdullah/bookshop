const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('MongoDB atlas connected...');
    }catch(err){
        console.log(err.message);
        process.exitCode = 1;
    }
};

module.exports = connectDB;
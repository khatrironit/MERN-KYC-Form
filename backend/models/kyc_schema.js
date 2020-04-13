const mongoose  = require('mongoose');

const kyc_schema = new mongoose.Schema({
    Name : {
        type:String,
        required:true
    },
    Address : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    Phone : {
        type:String,
        required:true
    },
    Aadhar : {
        type:String,
        required:true
    },
    Pan : {
        type:String,
        required:true
    },
    Image : {
        type:String,
        required:true
    }
});

const Kyc_collection = mongoose.model('Kyc_collection',kyc_schema);

module.exports = Kyc_collection;
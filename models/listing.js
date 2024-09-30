const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    image: {
        url:String,
        filename:String,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    itemsGiven: {
        type: Number,
        default: 0,
    },
    itemsRecieved: {
        type: Number,
        default: 0,
    },
    phone: {
        type: Number,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    }
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;

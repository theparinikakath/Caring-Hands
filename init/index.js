const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/donation";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
    await initDB();
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "66f90b0fc28b11c6b0d1d747" // Replace with the actual owner's ID
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

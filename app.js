if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore=require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const Listing = require("./models/listing.js"); // Listing model
const User = require("./models/user.js"); // User model
const listings = require("./routes/listing.js"); // Listings route
const userRouter = require("./routes/user.js"); // User route

// MongoDB connection
//const MONGO_URL = "mongodb://127.0.0.1:27017/donation";
const dbUrl=process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("connected to DB");
}
main().catch((err) => {
    console.log(err);
});

// Middleware configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
});
store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE!",err);
})
// Session configuration
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport configuration for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash messages middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes configuration
app.use("/listings", listings); 
app.use("/", userRouter); 

// Catch-all route for page not found (404)
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(err.status || 500).render('error', { message: "Something went wrong!", err });
});

// Server setup
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

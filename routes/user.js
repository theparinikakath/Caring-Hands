const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// Signup Route
router
    .route("/signup")
    .get(userController.renderSignupForm)   // Render the signup form
    .post(userController.signup);           // Handle the signup form submission

// Login Route
router
    .route("/login")
    .get(userController.renderLoginForm)    // Render the login form
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",      // Redirect to login if authentication fails
            failureFlash: true              // Display a failure message
        }),
        userController.login                // Handle successful login
    );

// Logout Route
router.get("/logout", userController.logout); // Handle logout

module.exports = router;

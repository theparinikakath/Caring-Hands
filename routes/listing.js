const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const ExpressError = require("../utils/ExpressError.js");
const listingController=require("../controllers/listing.js");
const multer = require("multer");
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage});


router
.route("/")
.get( wrapAsync(listingController.index))
.post( isLoggedIn,  
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
);


// Error in finding a listing
router.get('/', async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render('listings/index', { allListings });
    } catch (e) {
        req.flash('error', 'Something went wrong!');
        res.redirect('/listings');
    }
});

// New route - Renders form for new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, 
    isOwner, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingController.updateListing))
.delete( isLoggedIn, isOwner, wrapAsync(listingController.deleteListing)
);

// Edit route - Renders edit form for a listing
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;

const Listing = require("./models/listing");
const { listingSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.validateListing = (req, res, next) => {
    // Validate the request body against the Joi schema
    const { error } = listingSchema.validate(req.body);

    // If there's an error, throw an ExpressError with a custom message
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to access this page");
        return res.redirect('/login');
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Use async to enable await inside the middleware
module.exports.isOwner = async (req, res, next) => {
    try {
        let { id } = req.params;

        // Await the result of finding the listing by its ID
        let listing = await Listing.findById(id);

        // Check if the listing exists
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        // Check if the current user is the owner of the listing
        if (!listing.owner._id.equals(req.user._id)) {
            req.flash("error", "You are not the owner of this listing");
            return res.redirect(`/listings/${id}`);
        }

        // If the user is the owner, proceed to the next middleware
        next();
    } catch (error) {
        // Handle unexpected errors and pass them to the error handler middleware
        next(error);
    }
};

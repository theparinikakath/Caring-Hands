const Joi = require('joi');

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().min(18).required(), // Age should be a number, with a minimum value of 18
    location: Joi.string().required(),
    itemsGiven: Joi.number().min(1).required(),
    itemsReceived: Joi.number().allow("", null),
    phone: Joi.string().min(10).required(), // Phone should be a string with a minimum length of 10
  }).required(),
});

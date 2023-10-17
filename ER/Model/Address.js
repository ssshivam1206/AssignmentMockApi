const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street_address: String,
  city: String,
  Country: String,
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;

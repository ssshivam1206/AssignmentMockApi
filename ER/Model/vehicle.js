const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: String,
  model_number: String,
  plate_number: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;

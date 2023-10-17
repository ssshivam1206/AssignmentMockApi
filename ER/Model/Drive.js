const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  Distance:String,
  drive_date: Date,
});

const Drive = mongoose.model('Drive', driveSchema);

module.exports = Drive;

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  Name: String,
  Salary: String,
  person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;

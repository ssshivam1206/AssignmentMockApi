const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Name: String,
  student_Number: String,
  person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

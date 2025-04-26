const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    reg:{ type: String, required: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    section: { type: String, required: true },
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    dob: { type: Date, required: true },
    boardingPoint: { type: String, required: true },
    contactNumber: { type: String, required: true },
    parentNumber: { type: String, required: true },
    regulation: { type: String, required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Classes",required: true },
  });
  module.exports = mongoose.model('Student', studentSchema);

const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  salary: {
    type: Number,
    required: [true, "Please provide salary"],
  },
  location: {
    type: String,
    required: [true, "Please provide Location"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

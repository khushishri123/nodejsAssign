// this file will contain all the handler functions
const Employee = require(`${__dirname}/../models/employeeModel`);

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    console.log("Added successfully");
    res.status(201).json({
      status: "success",
      newEmployee: { newEmployee },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: `${err}`,
    });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      status: "success",
      employees: { employees },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: `${err}`,
    });
  }
};

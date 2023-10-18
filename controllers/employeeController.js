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

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json({
      status: "success",
      employee: { employee },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: `${err}`,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      employee: { employee },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: `${err}`,
    });
  }
};

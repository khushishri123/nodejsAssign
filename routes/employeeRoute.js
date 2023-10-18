const employeeController = require(`${__dirname}/../controllers/employeeController`);
const express = require("express");
const router = express.Router();
router.use(express.json());

router
  .route("/")
  .post(employeeController.createEmployee)
  .get(employeeController.getAllEmployees);

router
  .route("/:id")
  .get(employeeController.getEmployee)
  .patch(employeeController.updateEmployee).delete(employeeController.deleteEmployee);

module.exports = router;

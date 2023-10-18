const employeeController = require(`${__dirname}/../controllers/employeeController`);
const express = require("express");
const router = express.Router();
router.use(express.json());

router.route("/").post(employeeController.createEmployee);

module.exports = router;

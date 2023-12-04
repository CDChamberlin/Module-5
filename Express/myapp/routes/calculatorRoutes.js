const express = require("express");
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();

router.get("/add", (req, res) => {
  console.log(req.query)
  calculatorController.addNumbers(req,res)
});

module.exports = router;
const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/products", (req, res) => {
  storeController.getProductList(req, res);
});

module.exports = router;

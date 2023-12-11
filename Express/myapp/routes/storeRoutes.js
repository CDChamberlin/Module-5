const express = require("express");
const router = express.Router();


router.get("/products", (req, res) =>{
    storeController(req, res)
})

module.exports = router
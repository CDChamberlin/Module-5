const axios = require("axios");
const { response } = require("express");

const getProductList = (req, res) => {
  try {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => res.status(200).json(response.data));
  } catch (error) {
    res.status(500).json({ result: "External server error, " + error.message });
  }
};
module.exports = { getProductList };

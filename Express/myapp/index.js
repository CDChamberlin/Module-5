const express = require("express");
const app = express();
const port = 3000;
const secondPort = 3001;
app.use(express.json());

const calculatorRoutes = require("./routes/calculatorRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerConfig.js");

//Fake E-commerce Store Routes
const storeRoutes = require("./routes/storeRoutes.js");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes);

app.use("/products", storeRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.listen(secondPort, () => {
  console.log(`Example app listening at http://localhost:${secondPort}`);
});

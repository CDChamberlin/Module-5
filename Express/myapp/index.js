const express = require("express");
const app = express();
const port = 3000;
const secondPort = 3001;
app.use(express.json())
//const testRoutes = require("./routes/myTestRoutes");
//const authRouter = require("./routes/authRoute");
const calculatorRoutes = require("./routes/calculatorRoutes");
// const userRoutes = require('./routes/userRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swaggerConfig.js')

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)
// app.get('/', (req, res) => {
//     res.send('Hello World From Express!')
// })
app.use("/", express.static("public"));
// app.use("/testRoutes", testRoutes);
// app.use("/auth", authRouter);
app.use("/calculator", calculatorRoutes);
// app.use("/users", userRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.listen(secondPort, () => {
    console.log(`Example app listening at http://localhost:${secondPort}`);
  });
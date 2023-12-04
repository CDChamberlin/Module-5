const Calculator = require('../libraries/calculator') 

let myCalc = new Calculator()
const addNumbers = (req, res) =>{
    let number1 = parseFloat(req.query.num1)
  let number2 = parseFloat(req.query.num2)
  console.log(number1, number2);

  let sum = myCalc.add(number1, number2)
//   console.log(number1, number2, sum)
  
//   res.status(200)  //200 means good response, 201 means created/updated, 404 = not found
//   res.json({result: sum});
    res.status(200).json({result: sum})
}

module.exports = {
    addNumbers
}
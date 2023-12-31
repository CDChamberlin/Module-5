const Calculator = require('../libraries/calculator') 

let myCalc = new Calculator()

const addNumbers = (req, res) =>{
    let number1 = parseFloat(req.query.num1)
  let number2 = parseFloat(req.query.num2)
  console.log(number1, number2);

  let sum = myCalc.add(number1, number2)

    res.status(200).json({result: sum})
}
const subtractNumbers = (req, res) =>{
    let number1 = parseFloat(req.query.num1)
  let number2 = parseFloat(req.query.num2)
  console.log(number1, number2);

  let difference = myCalc.subtract(number1, number2)

    res.status(200).json({result: difference})
}
const multiplyNumbers = (req, res) =>{
    let number1 = parseFloat(req.query.num1)
  let number2 = parseFloat(req.query.num2)
  console.log(number1, number2);

  let product = myCalc.multiply(number1, number2)

    res.status(200).json({result: product})
}
const divideNumbers = (req, res) =>{
    let number1 = parseFloat(req.query.num1)
  let number2 = parseFloat(req.query.num2)
  console.log(number1, number2);

  let quotient = myCalc.divide(number1, number2)

    res.status(200).json({result: quotient})
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}
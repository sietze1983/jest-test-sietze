function multiply(num1, num2) {
    console.log("INPUT", num1, num2);
    const result = num1 * num2;
    console.log("RESULT", result)
    return result;
}
const result = multiply(2, 5);
//WRITE ME

module.exports = {
    multiply: multiply,
}
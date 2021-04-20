const multiply = require('./index').multiply;

test('multiply() function should return the multiplication of 2 numbers', () => {
    //ARRANGE
    const num1 = 4;
    const num2 = 3;


    //ACT
    const result = multiply(num1, num2);


    //ASSERT
    expect(result).toBe(12);
});
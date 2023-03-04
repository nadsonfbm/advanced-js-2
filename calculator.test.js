test('calculator object correctly adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 5)).toBe(3);
});
  
test('calculator object correctly subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(10, 5)).toBe(5);
});
  
test('calculator object correctly multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(4, -2)).toBe(-8);
});
  
test('calculator object correctly divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(10, -2)).toBe(-5);
});
  
test('calculator object throws error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow();
});
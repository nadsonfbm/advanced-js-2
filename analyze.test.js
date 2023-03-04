test('analyzeArray function correctly handles arrays with negative numbers', () => {
    expect(analyzeArray([-3, -2, -1, 0, 1, 2, 3])).toEqual({
      average: 0,
      min: -3,
      max: 3,
      length: 7,
    });
  
    expect(analyzeArray([-10, -5, 0, 5, 10])).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 5,
    });
});
  
test('analyzeArray function correctly handles arrays with decimal numbers', () => {
    expect(analyzeArray([1.5, 2.5, 3.5, 4.5, 5.5])).toEqual({
        average: 3.5,
        min: 1.5,
        max: 5.5,
        length: 5,
    });
  
    expect(analyzeArray([0.1, 0.2, 0.3, 0.4, 0.5])).toEqual({
        average: 0.3,
        min: 0.1,
        max: 0.5,
        length: 5,
    });
});
  
test('analyzeArray function correctly handles arrays with duplicate numbers', () => {
    expect(analyzeArray([1, 2, 3, 3, 4, 4, 5, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 8,
    });
  
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 7,
    });
  });
test('caesarCipher function shifts a string by a given amount', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
    expect(caesarCipher('world', 13)).toBe('jbeyq');
    expect(caesarCipher('abcXYZ', 3)).toBe('defABC');
});
  
test('caesarCipher function wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
  
test('caesarCipher function keeps the same case', () => {
    expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
    expect(caesarCipher('WORLD', 2)).toBe('YQTNF');
});
  
test('caesarCipher function handles punctuation', () => {
    expect(caesarCipher('Hello, world!', 5)).toBe('Mjqqt, btwqi!');
});
  
test('caesarCipher function throws error for non-string input', () => {
    expect(() => caesarCipher(null, 5)).toThrow();
    expect(() => caesarCipher(undefined, 5)).toThrow();
    expect(() => caesarCipher(123, 5)).toThrow();
});
  
test('caesarCipher function handles negative shift amount', () => {
    expect(caesarCipher('hello', -1)).toBe('gdkkn');
});
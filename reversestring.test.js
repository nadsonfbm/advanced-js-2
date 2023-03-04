test('reverses a string', () => {
    expect(reverseString('giant')).toBe('tanig');
    expect(reverseString('city')).toBe('ytic');
});

test("returns the input string reversed when input has punctuation", () => {
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
  });

test('reverseString function returns empty string for empty input', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString function throws error for non-string input', () => {
    expect(() => reverseString(null)).toThrow();
    expect(() => reverseString(undefined)).toThrow();
    expect(() => reverseString(123)).toThrow();
});
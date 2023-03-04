test('capitalize function capitalizes first letter of string', () => {
    expect(capitalize('good morning')).toBe('Good morning');
    expect(capitalize('world')).toBe('World');
});
  
test('capitalize function returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
});

test("returns the input string with first letter capitalized when input is an uppercase string", () => {
    expect(capitalize("BALL")).toBe("BALL");
});

test("returns the input string with first letter capitalized and rest of the string unchanged when input has mixed case", () => {
    expect(capitalize("gOoD MoRnInG")).toBe("GOoD MoRnInG");
});

test('capitalize function throws error for non-string input', () => {
    expect(() => capitalize(null)).toThrow();
    expect(() => capitalize(undefined)).toThrow();
    expect(() => capitalize(8419581651)).toThrow();
});
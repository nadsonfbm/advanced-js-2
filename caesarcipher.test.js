describe('caesarCipher', () => {
    test('throws an error when the first argument is not a string', () => {
      expect(() => caesarCipher(123, 1)).toThrow('Argument must be a string');
    });
  
    test('returns an empty string when passed an empty string', () => {
      expect(caesarCipher('', 1)).toBe('');
    });
  
    test('shifts the characters in the string by the specified amount', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
      expect(caesarCipher('ABC', 1)).toBe('BCD');
      expect(caesarCipher('xyz', 5)).toBe('cde');
      expect(caesarCipher('XYZ', 5)).toBe('CDE');
    });
  
    test('wraps around when shifting beyond the end of the alphabet', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
      expect(caesarCipher('XYZ', 3)).toBe('ABC');
      expect(caesarCipher('xyz', 28)).toBe('zab');
      expect(caesarCipher('XYZ', 28)).toBe('ZAB');
    });
  
    test('handles non-alphabetic characters', () => {
      expect(caesarCipher('123', 1)).toBe('123');
      expect(caesarCipher('!@#', 1)).toBe('!@#');
      expect(caesarCipher('abc123!@#', 1)).toBe('bcd123!@#');
    });
  });
function caesarCipher(str, shift) {
    if (typeof str !== 'string') {
      throw new Error('Argument must be a string');
    }
  
    const shiftAmount = shift % 26;
  
    function shiftChar(char) {
      const code = char.charCodeAt();
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
      } else {
        return char;
      }
    }
  
    return str.split('').map(shiftChar).join('');
  }
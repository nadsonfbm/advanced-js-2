function reverseString(str) {
    if (typeof str !== 'string') {
      throw new Error('Argument must be a string');
    }
  
    return str.split('').reverse().join('');
  }
function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Argument must be an array');
    }
  
    if (arr.length === 0) {
      return {
        average: 0,
        min: undefined,
        max: undefined,
        length: 0,
      };
    }
  
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average: avg,
      min: min,
      max: max,
      length: arr.length,
    };
  }
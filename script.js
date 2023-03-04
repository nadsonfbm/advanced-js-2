// 1. A capitalize function that takes a string and returns it with the first character capitalized.

describe("capitalize", () => {

    it("returns an empty string when input is an empty string", () => {
      expect(capitalize("")).toEqual("");
    });
  
    it("returns the input string with first letter capitalized when input is a lowercase string", () => {
      expect(capitalize("hello")).toEqual("Hello");
    });
  
    it("returns the input string with first letter capitalized when input is an uppercase string", () => {
      expect(capitalize("WORLD")).toEqual("WORLD");
    });
  
    it("returns the input string with first letter capitalized and rest of the string unchanged when input has mixed case", () => {
      expect(capitalize("gOoD MoRnInG")).toEqual("GOoD MoRnInG");
    });
  
    it("returns the input string with first letter capitalized and rest of the string unchanged when input has punctuation or whitespace", () => {
      expect(capitalize("  hello world!")).toEqual("  Hello world!");
      expect(capitalize("good-morning")).toEqual("Good-morning");
      expect(capitalize("what's up?")).toEqual("What's up?");
    });
  
    it("returns null when input is null", () => {
      expect(capitalize(null)).toBeNull();
    });
  
  });

// 2. A reverseString function that takes a string and returns it reversed.

describe("reverseString", () => {

    let reverseString;
  
    beforeEach(() => {
      reverseString = str => str.split("").reverse().join("");
    });
  
    it("returns an empty string when input is an empty string", () => {
      expect(reverseString("")).toEqual("");
    });
  
    it("returns the input string reversed when input is a string of even length", () => {
      expect(reverseString("hello")).toEqual("olleh");
    });
  
    it("returns the input string reversed when input is a string of odd length", () => {
      expect(reverseString("world")).toEqual("dlrow");
    });
  
    it("returns the input string reversed when input has whitespace", () => {
      expect(reverseString("hello world")).toEqual("dlrow olleh");
    });
  
    it("returns the input string reversed when input has punctuation", () => {
      expect(reverseString("hello, world!")).toEqual("!dlrow ,olleh");
    });
  
    it("returns the input string reversed when input has non-ASCII characters", () => {
      expect(reverseString("héllø wørld")).toEqual("dlrøw ølléh");
    });
  
    it("returns the input string reversed when input has only one character", () => {
      expect(reverseString("a")).toEqual("a");
    });
  
    it("returns the input string reversed when input has only whitespace characters", () => {
      expect(reverseString("   ")).toEqual("   ");
    });
  
    it("returns the input string reversed when input has repeating characters", () => {
      expect(reverseString("aaaaaaaaaa")).toEqual("aaaaaaaaaa");
    });
  
    it("returns null when input is null", () => {
      expect(reverseString(null)).toBeNull();
    });
  
  });

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

describe("calculator", () => {

    let calculator;
  
    beforeEach(() => {
      calculator = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => b === 0 ? null : a / b,
        multiply: (a, b) => a * b
      };
    });
  
    it("returns the correct result when adding two positive numbers", () => {
      expect(calculator.add(2, 3)).toEqual(5);
    });
  
    it("returns the correct result when adding two negative numbers", () => {
      expect(calculator.add(-2, -3)).toEqual(-5);
    });
  
    it("returns the correct result when subtracting two positive numbers", () => {
      expect(calculator.subtract(5, 2)).toEqual(3);
    });
  
    it("returns the correct result when subtracting two negative numbers", () => {
      expect(calculator.subtract(-5, -2)).toEqual(-3);
    });
  
    it("returns the correct result when dividing two numbers", () => {
      expect(calculator.divide(10, 2)).toEqual(5);
    });
  
    it("returns null when dividing by zero", () => {
      expect(calculator.divide(10, 0)).toBeNull();
    });
  
    it("returns the correct result when multiplying two positive numbers", () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
    });
  
    it("returns the correct result when multiplying two negative numbers", () => {
      expect(calculator.multiply(-2, -3)).toEqual(6);
    });
  
    it("returns the correct result when one input is a string", () => {
      expect(calculator.add("2", 3)).toEqual("23");
    });
  
    it("returns the correct result when one input is Infinity", () => {
      expect(calculator.multiply(2, Infinity)).toEqual(Infinity);
    });
  
    it("returns the correct result when one input is a very large number", () => {
      expect(calculator.add(1000000000, 1000000000)).toEqual(2000000000);
    });
  
    it("returns the correct result when one input is a very small number", () => {
      expect(calculator.divide(0.000001, 0.000001)).toEqual(1);
    });

    it("returns the correct result when one input is a decimal number", () => {
        expect(calculator.multiply(0.1, 0.2)).toEqual(0.02);
    });
    it("returns the correct result when adding two decimal numbers", () => {
        expect(calculator.add(0.1, 0.2)).toEqual(0.30000000000000004);
    });
    
    it("returns the correct result when subtracting two decimal numbers", () => {
        expect(calculator.subtract(0.3, 0.1)).toEqual(0.19999999999999998);
    });

    it("returns the correct result when dividing two decimal numbers", () => {
        expect(calculator.divide(0.2, 0.1)).toEqual(2);
    });

    it("returns the correct result when multiplying two decimal numbers", () => {
        expect(calculator.multiply(0.1, 0.2)).toEqual(0.02);
    });

    it("returns the correct result when dividing a positive number by a negative number", () => {
        expect(calculator.divide(10, -2)).toEqual(-5);
    });

    it("returns the correct result when dividing a negative number by a positive number", () => {
        expect(calculator.divide(-10, 2)).toEqual(-5);
    });

    it("returns the correct result when dividing a negative number by a negative number", () => {
        expect(calculator.divide(-10, -2)).toEqual(5);
    });
});

// 4. A caesarCipher function that takes a string and returns it with each character “shifted”.

describe("caesarCipher", () => {

    let caesarCipher;
  
    beforeEach(() => {
      caesarCipher = (str, shift) => {
        return str
          .split("")
          .map(char => {
            if (char.match(/[a-z]/i)) {
              const code = char.charCodeAt(0);
              if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
              } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
              }
            }
            return char;
          })
          .join("");
      };
    });
  
    it("returns an empty string when input is an empty string", () => {
      expect(caesarCipher("", 3)).toEqual("");
    });
  
    it("returns the input string shifted by 3 characters", () => {
      expect(caesarCipher("hello world", 3)).toEqual("khoor zruog");
    });
  
    it("returns the input string shifted by 26 characters (i.e. no shift at all)", () => {
      expect(caesarCipher("hello world", 26)).toEqual("hello world");
    });
  
    it("returns the input string shifted by -3 characters", () => {
      expect(caesarCipher("hello world", -3)).toEqual("ebiil tloia");
    });
  
    it("wraps from z to a when shifting past the end of the alphabet", () => {
      expect(caesarCipher("xyz", 3)).toEqual("abc");
    });
  
    it("wraps from a to z when shifting past the beginning of the alphabet", () => {
      expect(caesarCipher("abc", -3)).toEqual("xyz");
    });
  
    it("keeps the same case for uppercase letters", () => {
      expect(caesarCipher("Hello World", 3)).toEqual("Khoor Zruog");
    });
  
    it("keeps the same case for lowercase letters", () => {
      expect(caesarCipher("hello world", 3)).toEqual("khoor zruog");
    });
  
    it("keeps the same case for punctuation", () => {
      expect(caesarCipher("hello, world!", 3)).toEqual("khoor, zruog!");
    });
  
  });

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

describe("analyzeArray", () => {

    let analyzeArray;
  
    beforeEach(() => {
      analyzeArray = arr => {
        if (arr.length === 0) {
          return null;
        }
        const sum = arr.reduce((acc, curr) => acc + curr);
        const avg = sum / arr.length;
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return { avg, min, max, length: arr.length };
      };
    });
  
    it("returns null when input array is empty", () => {
      expect(analyzeArray([])).toBeNull();
    });
  
    it("returns the correct object with average, min, max, and length properties", () => {
      expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        avg: 3,
        min: 1,
        max: 5,
        length: 5
      });
    });
  
    it("returns the correct object with average, min, max, and length properties when all numbers are the same", () => {
      expect(analyzeArray([5, 5, 5, 5, 5])).toEqual({
        avg: 5,
        min: 5,
        max: 5,
        length: 5
      });
    });
  
    it("returns the correct object with average, min, max, and length properties when all numbers are negative", () => {
      expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
        avg: -3,
        min: -5,
        max: -1,
        length: 5
      });
    });
  
  });
  
const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1500;
    actual = sum(1000, 500);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 3;
    actual = sum(0, 3);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 500;
    actual = subtract(1000, 500);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -5;
    actual = subtract(-10, -5);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 3;
    actual = subtract(3, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 500000;
    actual = multiply(1000, 500);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 3);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide (6, 3);
    expect(actual).toBe(expected);
  });

  test('can divide  two large positive numbers', () => { 
    expected = 500;
    actual = divide (1000, 2);
    expect(actual).toBe(expected);
  });

  test('can divide  two negative numbers', () => {
    expected = 2;
    actual = divide (-6, -3);
    expect(actual).toBe(expected);
  });

  test('can divide  zero', () => {
    expected = 0;
    actual = divide (0, 3);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can find reminder when dividing two positive numbers', () => {
    expected = 1;
    actual = modulus (15, 2);
    expect(actual).toBe(expected);
  });

  test('can find reminder when dividing two negative numbers', () => {
    expected = -0;
    actual = modulus (-10, -2);
    expect(actual).toBe(expected);
  });

  test('can find reminder when dividing by zero', () => {
    expected = NaN;
    actual = modulus (15, 0);
    expect(actual).toBe(expected);
  });

  test('can find reminder when dividing to large positive numbers', () => {
    expected = 1;
    actual = modulus (1000000, 3);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('is even', () => {
    expected = "is even!";
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('is not even', () => {
    expected = "not even!";
    actual = even(3);
    expect(actual).toBe(expected);
  });

  test('is zero even', () => {
    expected = "is even!";
    actual = even(0);
    expect(actual).toBe(expected);
  });

  test('negative number is even', () => {
    expected = "is even!";
    actual = even(-2);
    expect(actual).toBe(expected);
  });

  test('is decimal number even', () => {
    expected = "not even!";
    actual = even(2.8);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('is odd', () => {
    expected = "is odd!";
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('is not odd', () => {
    expected = "not odd!";
    actual = odd(10);
    expect(actual).toBe(expected);
  });

  test('is zero odd', () => {
    expected = "not odd!";
    actual = odd(0);
    expect(actual).toBe(expected);
  });

});

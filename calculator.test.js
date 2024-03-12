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

});

describe('even', () => {

  // test('is even', () => {
  //   expected = "2, is even";
  //   actual = even(2);
  //   expect(actual).toBe(expected);
  // });

});

describe('odd', () => {

});

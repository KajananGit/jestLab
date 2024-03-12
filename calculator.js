const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulus = (a, b) => a % b;

const even = function(a){
    if (a % 2 == 0){
        return `is even!`;
    } else {
        return `not even!`;
    }
};

const odd = function(a) {
    if (a % 2 != 0){
        return `is odd!`;
    } else {
        return `not odd!`;
    };
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};

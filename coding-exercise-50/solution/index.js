function allEvens(arr) {
  return arr.every(function (num) {
    return num % 2 === 0;
  });
}

// Another approach:
const allEvens = function (arr) {
  return arr.every(num => num % 2 === 0);
}

// Concise full arrow function syntax approach:
const allEvens = arr => arr.every(num => num % 2 === 0);
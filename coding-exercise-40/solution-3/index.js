// Using the JavaScript ternary operator syntax
function lastElement(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : null;
}

// Another approach:
// arr.length will be 'truthy' if it's not 0, so we can write this:
function lastElement(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}
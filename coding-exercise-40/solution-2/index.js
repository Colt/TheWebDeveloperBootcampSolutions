function lastElement(arr) {
  if (!arr.length) {
    return null;
  }
  return arr[arr.length - 1];
}

// Or we can write it like this:
function lastElement(arr) {
  if (!arr.length) return null;
  return arr[arr.length - 1];
}

// Another approach:
function lastElement(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return null;
}

function lastElement(arr) {
  if (arr.length > 0) return arr[arr.length - 1];
  return null;
}
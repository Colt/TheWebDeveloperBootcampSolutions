function validUserNames(arr) {
  const filteredArr = arr.filter(function (name) {
    return name.length < 10;
  });
  return filteredArr;
}

// Another approach:
function validUserNames(arr) {
  return arr.filter(name => name.length < 10);
}

// Concise full arrow function syntax approach:
const validUserNames = usernames => usernames.filter(usr => usr.length < 10);
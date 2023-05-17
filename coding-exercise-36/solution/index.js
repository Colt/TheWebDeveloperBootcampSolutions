function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

// Solution with a for loop:
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}
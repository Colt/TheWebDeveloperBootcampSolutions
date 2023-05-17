const heading = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function () {
  if (!this.value) {
    heading.innerText = `Enter Your Username`;
  } else {
    heading.innerText = `Welcome, ${this.value}`;
  }
});
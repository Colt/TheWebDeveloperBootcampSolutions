const heading = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function () {
  if (!this.value) {
    return heading.innerText = `Enter Your Username`
  }
  heading.innerText = `Welcome, ${input.value}`;
});
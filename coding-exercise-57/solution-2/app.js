// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll('li')

for (let li of lis) {
  if (li.classList.contains('highlight')) {
    li.classList.remove('highlight');
  } else {
    li.classList.add('highlight');
  }
}
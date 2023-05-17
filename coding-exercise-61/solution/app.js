const form = document.querySelector('form');
const ul = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const qty = form.elements.qty.value;
  const product = form.elements.product.value;
  const li = document.createElement('li');
  li.innerText = `${qty} ${product}`;
  ul.appendChild(li);
  form.reset();
});
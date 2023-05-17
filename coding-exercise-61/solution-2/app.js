const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const productInput = form.elements.product;
  const quantityInput = form.elements.qty;
  addElement(productInput.value, quantityInput.value);
  productInput.value = '';
  quantityInput.value = '';
});

const addElement = (product, qty) => {
  const li = document.createElement('li');
  li.innerText = `${qty} ${product}`;
  list.appendChild(li);
}
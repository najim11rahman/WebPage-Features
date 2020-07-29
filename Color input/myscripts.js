let p = document.querySelector('p');
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', () => {
  p.style.backgroundColor = input.value;
  p.innerHTML = input.value;
  p.style.color = 'white';
})
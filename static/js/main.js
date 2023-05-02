const form = document.querySelector('form');
const input = document.querySelector('input[name="task"]');
const list = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const task = input.value.trim();
  if (task === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);

  input.value = '';
});

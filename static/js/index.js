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

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  input.value = '';
});
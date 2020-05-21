const field = document.querySelector('#username');

button.addEventListener('click', (event) => {
    localStorage.setItem('username', field.value);
})


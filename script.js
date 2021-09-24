document.querySelector('#changeFont').addEventListener("submit", (e) => {
    // Stop default behvior when submit form
    e.preventDefault();

    // Target Input Element and erase once done
    let inputElement = document.querySelector('form input[type=number]');
    let value = inputElement.value;
    inputElement.value = '';

    // Change font size of the whole application
    document.querySelector('body').style.fontSize = value + 'px';
});
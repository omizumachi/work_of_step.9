document.addEventListener('DOMContentLoaded', (event) => {
    const inputEmail = document.querySelector('#input-email');
    const inputPassword = document.querySelector('#input-password');
    const button = document.querySelector('#saveBtn');

    if (localStorage.getItem('email')) {
        inputEmail.value = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
        inputPassword.value = localStorage.getItem('password');
    }

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const inputEmailValue = inputEmail.value;
        const inputPasswordValue = inputPassword.value;
        localStorage.setItem('email', inputEmailValue);
        localStorage.setItem('password', inputPasswordValue);
        console.log('Email and Password saved to localStorage');
    });
});
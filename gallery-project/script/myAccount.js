const windowForm = document.getElementById('register-form');
const registerNow = document.getElementById('register-now');
const backLogin = document.getElementById('login-now');
const loginSubmit = document.querySelector('.container');
const registerSubmit = document.getElementById('register-form');

registerNow.addEventListener('click', (e) => {
    e.preventDefault();
    windowForm.classList.add('register-form-active');
})
backLogin.addEventListener('click', (e) => {
    e.preventDefault();
    windowForm.classList.remove('register-form-active');
})
loginSubmit.addEventListener("submit", loginUser);
registerSubmit.addEventListener("submit", registerUser)

function loginUser() {
    const userName = document.getElementById('login-name').value;
    const values = JSON.parse(localStorage.getItem(userName));
    if (!values) {
        alert(`The user : ${userName} does not Exist!!`)
    } else {
        const userPass = document.getElementById('login-pass').value;
        if (values.password == userPass) {
            alert(`Your Login was succesfully ${userName}`);
            window.location.assign("index.html");
        }
        else {
            alert(`Your Password is Incorrect ${userName}`);
        }
    }
}

function registerUser() {
    const userName = document.getElementById('register-name').value;
    user = {
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-pass').value
    }
    localStorage.setItem(userName, JSON.stringify(user));
    windowForm.classList.remove('register-form-active');
    alert(`Welcome to Shoes Store ${userName}`)
}
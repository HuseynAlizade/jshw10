const mail = document.getElementById('mail');
const password = document.getElementById('pass');
const confPassword = document.getElementById('confpass');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mailValue = mail.value;
    const passwordValue = password.value;
    const confPasswordValue = confPassword.value;

    if (passwordValue == confPasswordValue) {
        localStorage.setItem("mail", mailValue);
        localStorage.setItem("password", passwordValue);
        password.style.border = "3px solid green";
        confPassword.style.border = "3px solid green";
    }
    
    if (passwordValue < 8) {
        alert("Password must be at least 8 characters");
        password.style.border = "1px solid red";
    }
    
    if (passwordValue == confPasswordValue) {
        const userName = localStorage.getItem("mail");
        const userPass = localStorage.getItem("password");
    
        if (userName || passwordValue >= 8 || passwordValue == confPasswordValue) {
            window.location.href = "main.html";
        }
    }
    
    else {
        alert("Passwords do not match!");
        password.style.border = "1px solid red";
    }
    
    if (userName) {
        window.location.href = "main.html";
    }
    
});

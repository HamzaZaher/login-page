document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.elements[0].value;
    const password = this.elements[1].value;

    if (email === '' || password === '') {
        document.getElementById('loginError').innerText = 'Please fill in all fields.';
    } else {
        alert('Logged in successfully!');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = this.elements[0].value;
    const email = this.elements[1].value;
    const password = this.elements[2].value;

    if (fullName === '' || email === '' || password === '') {
        document.getElementById('signupError').innerText = 'Please fill in all fields.';
    } else {
        alert('Signed up successfully!');
    }
});

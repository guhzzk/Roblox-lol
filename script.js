function openPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function signup() {
    const user = document.getElementById('signupUser').value;
    const pass = document.getElementById('signupPass').value;
    localStorage.setItem(user, pass);
    alert('Conta criada com sucesso!');
    document.getElementById('signupPopup').style.display = 'none';
}

function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    if (localStorage.getItem(user) === pass) {
        alert('Login bem-sucedido!');
        document.getElementById('loginPopup').style.display = 'none';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}


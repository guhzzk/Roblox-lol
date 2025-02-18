function openPopup(id) {
    // Fecha qualquer popup que esteja aberto
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });
    
    // Exibe o pop-up que foi clicado
    document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

function signup() {
    const user = document.getElementById('signupUser').value;
    const pass = document.getElementById('signupPass').value;
    localStorage.setItem(user, pass);
    alert('Conta criada com sucesso!');
    closePopup('signupPopup');
}

function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    if (localStorage.getItem(user) === pass) {
        alert('Login bem-sucedido!');
        closePopup('loginPopup');
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

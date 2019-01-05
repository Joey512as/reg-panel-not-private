function validateForm () {
    // проверяем email
    var login = document.getElementById('login');
    var password = document.getElementById('password');

    if (login.value !== "elizar@yandex.ru") {
        alert('Проверьте email');
        return false;
    }
    if (password.value !== "Defender") {
        alert('Проверь пароль');
        return false;
    } else {
        window.location.href= "defolt/index.html";
    }
}

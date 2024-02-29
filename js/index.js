document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const userInput = document.getElementById("user-input");
    const passwordInput = document.getElementById("password-input");

    loginButton.addEventListener("click", function () {
        if (userInput.value.trim() == "" || passwordInput.value.trim() == "") {
            alert("Preencha todos os campos!")
        }
        else if (userInput.value.trim() !== "admin" || passwordInput.value.trim() !== "admin"){
            alert("Usuário ou senha invalidos!")
        }
        else {
            window.location.href= "./pages/home.html";
        }
    })
})
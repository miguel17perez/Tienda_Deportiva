// auth.js
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso.");
        window.location.href = "admin_dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

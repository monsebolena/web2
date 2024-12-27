var formulario = document.getElementById("formulario");

formulario.onsubmit = function(e) {
    e.preventDefault();  // Evita que el formulario se envíe de forma predeterminada

    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Validación para verificar si ambos el usuario y la contraseña son correctos
    if (usuario === "admin" && password === "admin") {
        window.location.href = "main.html";  // Redirige al usuario si las credenciales son correctas
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
};

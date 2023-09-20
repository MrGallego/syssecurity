// Datos de usuario simulados (en un entorno real, usar una base de datos)
const users = [
    { username: "usuario1", password: "contraseña1", email: "usuario1@example.com" },
    { username: "usuario2", password: "contraseña2", email: "usuario2@example.com" }
];

// Función para generar un código de verificación aleatorio
function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Función para simular el envío de correo electrónico
function sendVerificationEmail(email, code) {
    alert(`Se ha enviado un código de verificación a ${email}. Código: ${code}`);
}

// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Buscar al usuario por nombre de usuario
    const user = users.find(user => user.username === usernameInput);

    if (!user || user.password !== passwordInput) {
        showMessage("Error: Nombre de usuario o contraseña incorrectos.");
    } else {
        // Generar un nuevo código de verificación y enviarlo por correo
        const newVerificationCode = generateVerificationCode();
        user.verificationCode = newVerificationCode;
        sendVerificationEmail(user.email, newVerificationCode);

        showMessage("¡Inicio de sesión exitoso! Se ha enviado un nuevo código de verificación.");
    }
}

// Función para mostrar un mensaje en la interfaz de usuario
function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
}

// Asignar la función de manejo de inicio de sesión al formulario
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);
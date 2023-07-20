document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Add validation logic here (e.g., check if passwords match, valid email format, etc.)
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!');
    } else {
        // You can perform form submission to the server here (backend processing)
        // For this example, we'll just show a success message
        showMessage('Signup successful!');
    }
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

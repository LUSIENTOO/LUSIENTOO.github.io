const passwordForm = document.getElementById('passwordForm');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const message = document.getElementById('message');
passwordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    if (newPassword.value === confirmPassword.value) {
        message.textContent = 'Password successfully changed!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Passwords do not match. Please try again.';
        message.style.color = 'red';
    }
});

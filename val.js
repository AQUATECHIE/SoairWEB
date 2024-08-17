document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() !== 'qwertyuioplkjhgfdsazxcvbnm' && name.trim() !== 'QWERTYUIOPLKJHGFDSAZXCVBNM') {
        document.getElementById('nameError').textContent = 'alhabet only.';
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'inline';
        isValid = false;
    }

    if (isValid) {
        // If form is valid, you can submit it or handle the data as needed
        alert('Form submitted successfully!');
        const name = document.getElementById('name').value = "";
        const email = document.getElementById('email').value= "";
        const password = document.getElementById('password').value= "";
    }
});

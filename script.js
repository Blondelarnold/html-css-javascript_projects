document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const depositForm = document.getElementById('deposit-form');
    const withdrawForm = document.getElementById('withdraw-form');

    // Handle signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            // Perform signup actions (e.g., send data to server)
            console.log('Signup with:', email, password);
            alert('Inscription réussie!');
        });
    }

    // Handle deposit form submission
    if (depositForm) {
        depositForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const amount = document.getElementById('deposit-amount').value;
            const method = document.getElementById('deposit-method').value;

            // Perform deposit actions (e.g., send data to server)
            console.log('Deposit:', amount, method);
            alert('Dépôt réussi!');
        });
    }

    // Handle withdraw form submission
    if (withdrawForm) {
        withdrawForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const amount = document.getElementById('withdraw-amount').value;
            const method = document.getElementById('withdraw-method').value;

            // Perform withdraw actions (e.g., send data to server)
            console.log('Withdraw:', amount, method);
            alert('Retrait réussi!');
        });
    }
});

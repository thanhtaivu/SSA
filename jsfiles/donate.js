// Donate page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const donateButtons = document.querySelectorAll('.donate-now');
    let selectedAmount = null;

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.closest('.amount-buttons');
            
            // Remove active class from all buttons in the same group
            parent.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            button.classList.add('active');

            // Handle custom amount
            if (button.classList.contains('custom')) {
                const amount = prompt('Enter custom amount:');
                if (amount && !isNaN(amount)) {
                    selectedAmount = parseFloat(amount);
                    button.textContent = `€${selectedAmount.toFixed(2)}`;
                }
            } else {
                selectedAmount = parseFloat(button.dataset.amount);
            }
        });
    });

    // Handle donate button clicks
    donateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const donationType = button.closest('.donation-card').querySelector('h3').textContent;
            
            if (selectedAmount) {
                // Here you would typically integrate with a payment processor
                alert(`Processing ${donationType} of $${selectedAmount.toFixed(2)}`);
            } else {
                alert('Please select an amount first');
            }
        });
    });
});

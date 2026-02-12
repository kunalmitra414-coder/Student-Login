document.addEventListener('DOMContentLoaded', function() {
    
    // --- LOGIN LOGIC ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page refresh
            
            // Get values
            const username = document.getElementById('username').value;
            const dob = document.getElementById('dob').value;

            // Simple validation (You can add specific logic here)
            if(username && dob) {
                // Redirect to the dashboard
                window.location.href = "dashboard.html";
            } else {
                alert("Please enter details");
            }
        });
    }

    // --- DASHBOARD LOGIC ---
    
    // 1. Handle Notice Modal
    const modal = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeNoticeBtn');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // 2. Handle Pay Now Button (Optional Feature)
    const payBtn = document.getElementById('payNowBtn');
    if (payBtn) {
        payBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.fee-checkbox:checked');
            let total = 0;
            checkboxes.forEach(box => {
                total += parseFloat(box.value);
            });
            
            if(total > 0) {
                alert(`Redirecting to payment gateway for amount: ₹${total}`);
            } else {
                alert("Please select a fee to pay.");
            }
        });
    }
});


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const payNowBtn = document.getElementById('payNowBtn');
    const closeNoticeBtn = document.getElementById('closeNoticeBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    // Function to show the notice
    payNowBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });

    // Function to hide the notice when OK is clicked
    closeNoticeBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Optional: Close notice if clicking outside the box
    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
});




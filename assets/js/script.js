// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                const content = dropdown.querySelector('.dropdown-content');
                if (content) content.style.display = 'none';
            }
        });
    });
    
    // Mobile menu toggle (for future use)
    console.log('Portfolio site loaded successfully!');
});

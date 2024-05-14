const div = document.getElementById('hide-box');

// Hide the div initially
div.style.display = 'none';

// Define the function to toggle the visibility of the div
function ShowAnswer() {
    // Toggle the visibility of the div
    if (div.style.display === 'none') {
        // If the div is hidden, show it
        div.style.display = 'block';
        // Update localStorage to reflect the new state
        localStorage.setItem('hideBoxState', 'visible');
    } else {
        // If the div is visible, hide it
        div.style.display = 'none';
        // Update localStorage to reflect the new state
        localStorage.setItem('hideBoxState', 'hidden');
    }
}

let currentIndex = 0; // Current index of the visible event
const eventItems = document.querySelectorAll('.event-item'); // Select all event items
const totalItems = eventItems.length; // Total number of event items

// Function to show the current event based on the index
function showEvent(index) {
    const eventContainer = document.querySelector('.event-container');
    const offset = -index * 100; // Calculate offset for sliding
    eventContainer.style.transform = `translateX(${offset}%)`; // Apply transformation
}

// Event listener for the "Previous" button
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1; // Wrap around if at start
    showEvent(currentIndex); // Show the current event
});

// Event listener for the "Next" button
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0; // Wrap around if at end
    showEvent(currentIndex); // Show the current event
});

// Show the first event initially
showEvent(currentIndex);

// Simulate a live tournament update
document.addEventListener("DOMContentLoaded", function() {
    const liveTournamentUpdate = document.getElementById("liveTournamentUpdate");

    // Example: Simulate live updates every 5 seconds
    let updateCount = 0;
    const updates = [
        "Round 1: Player A vs Player B - Player A leads.",
        "Round 2: Player C vs Player D - It's a draw!",
        "Final Match: Player A vs Player C - Stay tuned for results!"
    ];

    setInterval(() => {
        liveTournamentUpdate.innerText = updates[updateCount];
        updateCount = (updateCount + 1) % updates.length;
    }, 5000); // Updates every 5 seconds
});


// Simulate live tournament updates
document.addEventListener("DOMContentLoaded", function () {
    const liveTournamentUpdate = document.getElementById("liveTournamentUpdate");

    // Example: Simulate live updates every 5 seconds
    let updateCount = 0;
    const updates = [
        "Round 1: Player A vs Player B - Player A leads.",
        "Round 2: Player C vs Player D - It's a draw!",
        "Final Match: Player A vs Player C - Stay tuned for results!"
    ];

    setInterval(() => {
        liveTournamentUpdate.innerText = updates[updateCount];
        updateCount = (updateCount + 1) % updates.length;
    }, 5000); // Updates every 5 seconds
});

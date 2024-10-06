const ctx = document.getElementById('playerChart').getContext('2d');
const playerChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['John Doe', 'Jane Smith', 'Alex Johnson'],
        datasets: [{
            label: 'Player Performance',
            data: [12, 19, 3],
            backgroundColor: ['#4CAF50', '#FF5733', '#C70039'],
            borderColor: ['#333', '#333', '#333'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

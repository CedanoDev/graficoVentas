const salesForm = document.getElementById('salesForm');
const salesChartCanvas = document.getElementById('salesChart').getContext('2d');

let salesData = {
    labels: [],
    datasets: [{
        label: 'Ventas por Mes',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

let salesChart = new Chart(salesChartCanvas, {
    type: 'bar',
    data: salesData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

salesForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const month = document.getElementById('month').value;
    const sales = parseFloat(document.getElementById('sales').value);

    // Agregar datos al gráfico
    salesData.labels.push(month);
    salesData.datasets[0].data.push(sales);

    // Actualizar el gráfico
    salesChart.update();

    // Limpiar el formulario
    salesForm.reset();
});
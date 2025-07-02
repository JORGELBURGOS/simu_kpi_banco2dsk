// Variables globales
let sucursalesParaguay = [];
let kpisData = [];
let historicalData = {};
let currentChart = null;
let isMatrizView = false;

// Inicialización
document.addEventListener('DOMContentLoaded', async function() {
    // Cargar datos desde los archivos JSON
    try {
        const [sucursalesResponse, kpisResponse, historicalResponse] = await Promise.all([
            fetch('data/sucursales.json'),
            fetch('data/kpis.json'),
            fetch('data/historical.json')
        ]);
        
        if (!sucursalesResponse.ok || !kpisResponse.ok || !historicalResponse.ok) {
            throw new Error('Error al cargar los datos');
        }
        
        sucursalesParaguay = await sucursalesResponse.json();
        kpisData = await kpisResponse.json();
        historicalData = await historicalResponse.json();
        
        // Cargar sucursales en el select
        loadSucursales();
        
        // Configurar eventos
        setupEventListeners();
        
        // Cargar datos iniciales
        updateDashboard();
        
        // Inicializar gráfico
        renderHistoricalChart();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        alert('Error al cargar los datos. Por favor recarga la página.');
        
        // Cargar datos de ejemplo en caso de error
        loadDefaultData();
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
    }
});

function loadDefaultData() {
    // Datos de ejemplo por si falla la carga de los JSON
    sucursalesParaguay = [
        { id: 1, nombre: "Asunción - Centro", oficiales: ["Juan Pérez", "María González", "Carlos López"] },
        { id: 2, nombre: "Ciudad del Este", oficiales: ["Roberto Martínez", "Ana Rodríguez", "Luis Fernández"] }
    ];
    
    kpisData = [
        { 
            id: 1, 
            proceso: "Alta de cliente", 
            perspectiva: "Eficiencia", 
            nombre: "Tiempo de Onboarding del Cliente", 
            objetivo: "Medir el tiempo total desde la carga inicial hasta la creación del cliente en el sistema.", 
            unidad: "Horas", 
            formula: "Fecha y Hora Creación - Fecha y Hora Inicio Onboarding", 
            granularidad: "Segmento - Canal - Oficial", 
            tiempo: "Mensual", 
            valorActual: 12.5, 
            valorBudget: 10.0 
        },
        { 
            id: 2, 
            proceso: "Alta de cliente", 
            perspectiva: "Eficiencia", 
            nombre: "Validaciones Automáticas Exitosas", 
            objetivo: "Medir cuántos clientes pasan exitosamente por controles automáticos.", 
            unidad: "Porcentaje (%)", 
            formula: "Validaciones OK / Total Clientes * 100", 
            granularidad: "Tipo de validación - Canal", 
            tiempo: "Mensual", 
            valorActual: 85, 
            valorBudget: 90 
        }
    ];
    
    historicalData = {
        labels: ["Jun 2024", "Jul 2024", "Ago 2024"],
        eficiencia: [78, 80, 82],
        calidad: [85, 86, 87],
        experiencia: [72, 74, 76]
    };
}

function loadSucursales() {
    const select = document.getElementById('sucursal-select');
    select.innerHTML = '';
    
    sucursalesParaguay.forEach(sucursal => {
        const option = document.createElement('option');
        option.value = sucursal.id;
        option.textContent = sucursal.nombre;
        select.appendChild(option);
    });
    
    // Cargar oficiales para la primera sucursal
    if (sucursalesParaguay.length > 0) {
        updateOficiales(sucursalesParaguay[0].id);
    }
}

function updateOficiales(sucursalId) {
    const select = document.getElementById('oficial-select');
    select.innerHTML = '<option value="todos">Todos</option>';
    
    const sucursal = sucursalesParaguay.find(s => s.id == sucursalId);
    if (sucursal) {
        sucursal.oficiales.forEach(oficial => {
            const option = document.createElement('option');
            option.value = oficial;
            option.textContent = oficial;
            select.appendChild(option);
        });
    }
}

function setupEventListeners() {
    // Filtros
    document.getElementById('sucursal-select').addEventListener('change', function() {
        updateOficiales(this.value);
        updateDashboard();
    });
    
    document.getElementById('oficial-select').addEventListener('change', updateDashboard);
    document.getElementById('perspectiva-select').addEventListener('change', updateDashboard);
    document.getElementById('periodo-select').addEventListener('change', updateDashboard);
    
    // Menú
    document.getElementById('dashboard-link').addEventListener('click', function(e) {
        e.preventDefault();
        switchToDashboard();
    });
    
    document.getElementById('matriz-link').addEventListener('click', function(e) {
        e.preventDefault();
        switchToMatriz();
    });
    
    // Tooltips para los KPIs
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('kpi-name')) {
            showTooltip(e.target);
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('kpi-name')) {
            hideTooltip();
        }
    });
}

function switchToDashboard() {
    isMatrizView = false;
    document.getElementById('dashboard-title').textContent = 'Dashboard de KPIs';
    document.getElementById('filtros-sucursal').style.display = 'block';
    updateDashboard();
}

function switchToMatriz() {
    isMatrizView = true;
    document.getElementById('dashboard-title').textContent = 'Casa Matriz - KPIs Centrales';
    document.getElementById('filtros-sucursal').style.display = 'none';
    updateDashboard();
}

function updateDashboard() {
    // Filtrar KPIs según perspectiva seleccionada
    const perspectiva = document.getElementById('perspectiva-select').value;
    let filteredKpis = kpisData;
    
    if (perspectiva !== 'todas') {
        filteredKpis = kpisData.filter(kpi => kpi.perspectiva === perspectiva);
    }
    
    // Calcular KPIs consolidados
    const eficienciaKpis = kpisData.filter(kpi => kpi.perspectiva === "Eficiencia");
    const calidadKpis = kpisData.filter(kpi => kpi.perspectiva === "Calidad");
    const experienciaKpis = kpisData.filter(kpi => kpi.perspectiva === "Satisfacción del Cliente");
    
    const eficienciaValue = calculateConsolidatedKpi(eficienciaKpis);
    const calidadValue = calculateConsolidatedKpi(calidadKpis);
    const experienciaValue = calculateConsolidatedKpi(experienciaKpis);
    
    // Actualizar tarjetas
    updateKpiCard('eficiencia', eficienciaValue, 85);
    updateKpiCard('calidad', calidadValue, 90);
    updateKpiCard('experiencia', experienciaValue, 88);
    
    // Actualizar tabla
    updateKpiTable(filteredKpis);
    
    // Actualizar gráfico histórico
    updateHistoricalChart();
}

function calculateConsolidatedKpi(kpis) {
    if (kpis.length === 0) return 0;
    
    let totalCumplimiento = 0;
    
    kpis.forEach(kpi => {
        // Para métricas donde menor es mejor (como tiempos o errores), invertimos la relación
        if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")) {
            totalCumplimiento += (kpi.valorBudget / kpi.valorActual) * 100;
        } else {
            totalCumplimiento += (kpi.valorActual / kpi.valorBudget) * 100;
        }
    });
    
    return totalCumplimiento / kpis.length;
}

function updateKpiCard(kpiType, value, target) {
    const valueElement = document.getElementById(`${kpiType}-value`);
    const indicatorElement = document.getElementById(`${kpiType}-indicator`);
    const progressElement = document.getElementById(`${kpiType}-progress`);
    
    // Redondear a 2 decimales
    const roundedValue = Math.round(value * 100) / 100;
    valueElement.textContent = `${roundedValue}%`;
    
    // Determinar color del semáforo
    let indicator = "🔴"; // Rojo por defecto
    if (value >= 90) {
        indicator = "🟢"; // Verde
        progressElement.classList.remove('bg-warning', 'bg-danger');
        progressElement.classList.add('bg-success');
    } else if (value >= 70) {
        indicator = "🟡"; // Amarillo
        progressElement.classList.remove('bg-success', 'bg-danger');
        progressElement.classList.add('bg-warning');
    } else {
        progressElement.classList.remove('bg-success', 'bg-warning');
        progressElement.classList.add('bg-danger');
    }
    
    indicatorElement.textContent = indicator;
    
    // Actualizar barra de progreso (limitada al 100%)
    const progressWidth = Math.min(value, 100);
    progressElement.style.width = `${progressWidth}%`;
}

function updateKpiTable(kpis) {
    const tbody = document.querySelector('#kpi-table tbody');
    tbody.innerHTML = '';
    
    kpis.forEach(kpi => {
        const row = document.createElement('tr');
        
        // Calcular cumplimiento
        let cumplimiento;
        let estado;
        
        // Para métricas donde menor es mejor (como tiempos o errores), invertimos la relación
        if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")) {
            cumplimiento = (kpi.valorBudget / kpi.valorActual) * 100;
        } else {
            cumplimiento = (kpi.valorActual / kpi.valorBudget) * 100;
        }
        
        cumplimiento = Math.round(cumplimiento * 100) / 100;
        
        // Determinar estado
        if (cumplimiento >= 90) {
            estado = '<span class="badge bg-success">Excelente</span>';
        } else if (cumplimiento >= 70) {
            estado = '<span class="badge bg-warning">Aceptable</span>';
        } else {
            estado = '<span class="badge bg-danger">Crítico</span>';
        }
        
        // Formatear valor actual según unidad
        let valorActualFormatted = kpi.valorActual;
        if (kpi.unidad.includes("Porcentaje")) {
            valorActualFormatted = `${kpi.valorActual}%`;
        } else if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos")) {
            valorActualFormatted = `${kpi.valorActual} ${kpi.unidad.includes("Horas") ? "h" : "min"}`;
        }
        
        row.innerHTML = `
            <td>${kpi.perspectiva}</td>
            <td><span class="kpi-name" data-kpi-id="${kpi.id}">${kpi.nombre}</span></td>
            <td>${valorActualFormatted}</td>
            <td>${kpi.valorBudget} ${kpi.unidad.includes("Porcentaje") ? "%" : kpi.unidad.includes("Horas") ? "h" : kpi.unidad.includes("Minutos") ? "min" : ""}</td>
            <td>${cumplimiento}%</td>
            <td>${estado}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function renderHistoricalChart() {
    const ctx = document.getElementById('historicalChart').getContext('2d');
    
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historicalData.labels,
            datasets: [
                {
                    label: 'Eficiencia',
                    data: historicalData.eficiencia,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Calidad',
                    data: historicalData.calidad,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Experiencia',
                    data: historicalData.experiencia,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje de Cumplimiento'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

function updateHistoricalChart() {
    if (!currentChart) return;
    
    // Aquí podríamos filtrar los datos históricos según los filtros seleccionados
    // Por simplicidad, en este ejemplo usamos los mismos datos siempre
    
    currentChart.update();
}

function showTooltip(element) {
    const kpiId = parseInt(element.getAttribute('data-kpi-id'));
    const kpi = kpisData.find(k => k.id === kpiId);
    
    if (!kpi) return;
    
    const tooltip = document.getElementById('kpi-tooltip');
    document.getElementById('tooltip-title').textContent = kpi.nombre;
    document.getElementById('tooltip-objective').textContent = kpi.objetivo;
    document.getElementById('tooltip-formula').textContent = kpi.formula;
    document.getElementById('tooltip-unit').textContent = kpi.unidad;
    
    // Posicionar tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    document.getElementById('kpi-tooltip').style.display = 'none';
}
// =============================================
// DATOS EMBEBIDOS (funcionarán si los JSON no se cargan)
// =============================================
const localData = {
  sucursales: [
    { id: 1, nombre: "Asunción - Centro", oficiales: ["Juan Pérez", "María González", "Carlos López"] },
    { id: 2, nombre: "Ciudad del Este", oficiales: ["Roberto Martínez", "Ana Rodríguez", "Luis Fernández"] },
    { id: 3, nombre: "San Lorenzo", oficiales: ["Pedro Gómez", "Sofía Díaz", "Miguel Sánchez"] },
    { id: 4, nombre: "Luque", oficiales: ["José Ramírez", "Laura Álvarez", "Andrés Torres"] },
    { id: 5, nombre: "Capiatá", oficiales: ["Daniel Ruiz", "Patricia Herrera", "Fernando Castro"] },
    { id: 6, nombre: "Lambaré", oficiales: ["Ricardo Ortega", "Elena Mendoza", "Jorge Vargas"] },
    { id: 7, nombre: "Fernando de la Mora", oficiales: ["Alberto Medina", "Silvia Romero", "Hugo Guzmán"] },
    { id: 8, nombre: "Encarnación", oficiales: ["Mario Rojas", "Claudia Silva", "Raúl Flores"] },
    { id: 9, nombre: "Concepción", oficiales: ["Eduardo Acosta", "Verónica Vega", "Oscar Méndez"] },
    { id: 10, nombre: "Pedro Juan Caballero", oficiales: ["Santiago Cortés", "Natalia Paredes", "Felipe Ríos"] },
    { id: 11, nombre: "Coronel Oviedo", oficiales: ["Gustavo Núñez", "Carolina Miranda", "Diego Valdez"] },
    { id: 12, nombre: "Villarrica", oficiales: ["Hernán Peña", "Adriana Cordero", "Walter Rivas"] },
    { id: 13, nombre: "Pilar", oficiales: ["Mauricio Aguirre", "Lucía Figueroa", "Esteban Molina"] },
    { id: 14, nombre: "Caaguazú", oficiales: ["Federico Juárez", "Gabriela Espinoza", "Renato Campos"] },
    { id: 15, nombre: "Itauguá", oficiales: ["Armando Salazar", "Daniela Montes", "Rodrigo León"] },
    { id: 16, nombre: "Mariano Roque Alonso", oficiales: ["Arturo Delgado", "Marina Cervantes", "Gerardo Ponce"] },
    { id: 17, nombre: "Presidente Franco", oficiales: ["Víctor Cabrera", "Isabel Valenzuela", "Nicolás Cáceres"] },
    { id: 18, nombre: "Ayolas", oficiales: ["Omar Carrasco", "Rosa Segura", "Héctor Navarro"] },
    { id: 19, nombre: "Santa Rita", oficiales: ["Rubén Mora", "Beatriz Santana", "Emanuel Fuentes"] },
    { id: 20, nombre: "Caacupé", oficiales: ["Fabián Reyes", "Leticia Bustamante", "Sergio Orellana"] },
    { id: 21, nombre: "San Juan Bautista", oficiales: ["Iván Ávila", "Yolanda Méndez", "César Zúñiga"] },
    { id: 22, nombre: "Areguá", oficiales: ["Rolando Tapia", "Nora Salinas", "Marcelo Contreras"] },
    { id: 23, nombre: "Villeta", oficiales: ["Ernesto Moya", "Olga Lara", "Alfonso Osorio"] },
    { id: 24, nombre: "Paraguarí", oficiales: ["Julio Ferreyra", "Eva Roldán", "Tomás Palma"] }
  ],
  kpis: [
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
      objetivo: "Medir cuántos clientes pasan exitosamente por controles automáticos (ej. DNI, AFIP, Sancionados).", 
      unidad: "Porcentaje (%)", 
      formula: "Validaciones OK / Total Clientes * 100", 
      granularidad: "Tipo de validación - Canal", 
      tiempo: "Mensual", 
      valorActual: 85, 
      valorBudget: 90 
    },
    { 
      id: 3, 
      proceso: "Alta de cliente", 
      perspectiva: "Eficiencia", 
      nombre: "Clientes con Riesgo Alto", 
      objetivo: "Detectar qué proporción de clientes reciben categorización de riesgo alto durante el alta.", 
      unidad: "Porcentaje (%)", 
      formula: "Clientes Riesgo Alto / Total Clientes * 100", 
      granularidad: "Segmento - Canal", 
      tiempo: "Mensual", 
      valorActual: 5, 
      valorBudget: 3 
    },
    { 
      id: 4, 
      proceso: "Alta de cliente", 
      perspectiva: "Eficiencia", 
      nombre: "Regularizaciones Pendientes", 
      objetivo: "Cuantificar cuántos clientes quedan con requerimientos pendientes luego del alta inicial.", 
      unidad: "Cantidad (n)", 
      formula: "Total Clientes Pendientes Regularización", 
      granularidad: "Tipo de requerimiento - Canal", 
      tiempo: "Mensual", 
      valorActual: 8, 
      valorBudget: 5 
    },
    { 
      id: 5, 
      proceso: "Alta de cuenta", 
      perspectiva: "Eficiencia", 
      nombre: "Tiempo hasta Activación de Cuenta", 
      objetivo: "Medir el tiempo total desde la solicitud hasta la activación efectiva de la cuenta.", 
      unidad: "Horas", 
      formula: "Fecha y Hora Activación - Fecha y Hora Solicitud", 
      granularidad: "Tipo de cuenta - Canal - Sucursal", 
      tiempo: "Mensual", 
      valorActual: 24, 
      valorBudget: 18 
    },
    { 
      id: 6, 
      proceso: "Alta de cuenta", 
      perspectiva: "Eficiencia", 
      nombre: "Tasa de Cuentas Activadas", 
      objetivo: "Cuantificar el porcentaje de solicitudes de cuentas que se activan exitosamente.", 
      unidad: "Porcentaje (%)", 
      formula: "Cuentas Activadas / Solicitudes Totales * 100", 
      granularidad: "Producto - Canal - Segmento", 
      tiempo: "Mensual", 
      valorActual: 92, 
      valorBudget: 95 
    },
    { 
      id: 7, 
      proceso: "Alta de cuenta", 
      perspectiva: "Calidad", 
      nombre: "Errores de Carga de Datos", 
      objetivo: "Medir la frecuencia de errores durante la carga manual de datos para la cuenta.", 
      unidad: "Porcentaje (%)", 
      formula: "Errores Detectados / Total Cargas * 100", 
      granularidad: "Campo - Canal - Oficial", 
      tiempo: "Mensual", 
      valorActual: 2.5, 
      valorBudget: 1.5 
    },
    { 
      id: 8, 
      proceso: "Solicitud de préstamos y línea de crédito", 
      perspectiva: "Calidad", 
      nombre: "% de formularios completados correctamente al primer intento", 
      objetivo: "Validación de errores evitables en la primera carga", 
      unidad: "Porcentaje (%)", 
      formula: "Cantidad de casos que cumplen la condición / Total de casos * 100", 
      granularidad: "Segmento - Canal - Producto", 
      tiempo: "Mensual", 
      valorActual: 88, 
      valorBudget: 92 
    },
    { 
      id: 9, 
      proceso: "Solicitud de préstamos y línea de crédito", 
      perspectiva: "Calidad", 
      nombre: "% de cumplimiento completo del checklist documental sin excepciones", 
      objetivo: "Cumplimiento sin documentos salvados por comentarios", 
      unidad: "Porcentaje (%)", 
      formula: "Cantidad de casos que cumplen la condición / Total de casos * 100", 
      granularidad: "Segmento - Canal - Producto", 
      tiempo: "Mensual", 
      valorActual: 95, 
      valorBudget: 97 
    },
    { 
      id: 10, 
      proceso: "Alta de cliente", 
      perspectiva: "Satisfacción del Cliente", 
      nombre: "Satisfacción del Onboarding", 
      objetivo: "Medir cómo valoran los clientes el proceso de alta, desde la carga hasta la confirmación.", 
      unidad: "Puntaje promedio (1 a 5)", 
      formula: "Promedio de encuestas post-onboarding", 
      granularidad: "Canal - Segmento - Oficial", 
      tiempo: "Mensual", 
      valorActual: 4.2, 
      valorBudget: 4.5 
    },
    { 
      id: 11, 
      proceso: "Alta de cliente", 
      perspectiva: "Satisfacción del Cliente", 
      nombre: "Abandono durante el Onboarding", 
      objetivo: "Medir cuántos clientes inician pero no completan el proceso de alta.", 
      unidad: "Porcentaje (%)", 
      formula: "(Clientes que inician y no finalizan) / Total que inician * 100", 
      granularidad: "Etapa abandonada - Canal", 
      tiempo: "Mensual", 
      valorActual: 15, 
      valorBudget: 10 
    },
    { 
      id: 12, 
      proceso: "Alta de cuenta", 
      perspectiva: "Satisfacción del Cliente", 
      nombre: "Tiempo Percibido de Apertura", 
      objetivo: "Medir cómo percibe el cliente el tiempo que llevó abrir la cuenta.", 
      unidad: "Promedio (minutos percibidos)", 
      formula: "Encuesta post-apertura o tiempo declarado", 
      granularidad: "Canal - Tipo de cuenta", 
      tiempo: "Mensual", 
      valorActual: 45, 
      valorBudget: 30 
    },
    { 
      id: 13, 
      proceso: "Solicitud de préstamos y línea de crédito", 
      perspectiva: "Satisfacción del Cliente", 
      nombre: "Tiempo promedio de respuesta desde solicitud hasta contacto del ejecutivo", 
      objetivo: "Desde creación de solicitud hasta primer contacto o acción", 
      unidad: "Minutos", 
      formula: "∑(Fecha y hora del primer contacto del ejecutivo−Fecha y hora de la solicitud) / Cantidad total de solicitudes con contacto registrado", 
      granularidad: "Segmento - Canal - Producto", 
      tiempo: "Mensual", 
      valorActual: 120, 
      valorBudget: 60 
    }
  ],
  historical: {
    labels: ["Jun 2024", "Jul 2024", "Ago 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dic 2024", "Ene 2025", "Feb 2025", "Mar 2025", "Abr 2025", "May 2025", "Jun 2025"],
    eficiencia: [78, 80, 82, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91],
    calidad: [85, 86, 87, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96],
    experiencia: [72, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86]
  }
};

// =============================================
// VARIABLES GLOBALES
// =============================================
let sucursalesParaguay = localData.sucursales;
let kpisData = localData.kpis;
let historicalData = localData.historical;
let currentChart = null;
let isMatrizView = false;

// =============================================
// FUNCIONES PRINCIPALES
// =============================================

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Intenta cargar datos externos primero
        const [sucursalesResponse, kpisResponse, historicalResponse] = await Promise.all([
            fetch('./data/sucursales.json').then(res => res.ok ? res.json() : Promise.reject()).catch(() => null),
            fetch('./data/kpis.json').then(res => res.ok ? res.json() : Promise.reject()).catch(() => null),
            fetch('./data/historical.json').then(res => res.ok ? res.json() : Promise.reject()).catch(() => null)
        ]);

        // Usa datos externos si están disponibles, de lo contrario usa los datos locales
        sucursalesParaguay = sucursalesResponse || localData.sucursales;
        kpisData = kpisResponse || localData.kpis;
        historicalData = historicalResponse || localData.historical;
        
        // Inicializa la aplicación
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
        
    } catch (error) {
        console.error('Error:', error);
        // Usa datos locales si hay algún error
        loadDefaultData();
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
    }
});

function loadDefaultData() {
    sucursalesParaguay = localData.sucursales;
    kpisData = localData.kpis;
    historicalData = localData.historical;
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
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonthIndex = new Date().getMonth();
let currentYear = new Date().getFullYear();
updateCalendar();

//Botones mes anterior y Siguiente
const prevMonthBtn = document.querySelector("#prevMonth");
const nextMonthBtn = document.querySelector("#nextMonth");
const currentMonth = document.getElementById("current-month");
const currentYearElement = document.getElementById("current-year");

prevMonthBtn.addEventListener("click", showPreviousMonth);
nextMonthBtn.addEventListener("click", showNextMonth);


function showPreviousMonth() {
    currentMonthIndex--;

    if (currentMonthIndex < 0) {
        currentMonthIndex = 11; // Vuelve al índice del último mes (diciembre)
        currentYear--; // Resta 1 al año actual
      }

      currentMonth.textContent = months[currentMonthIndex];
      currentYearElement.textContent = currentYear;

      updateCalendar();
}

function showNextMonth() {
    currentMonthIndex++;

    if (currentMonthIndex > 11) {
        currentMonthIndex = 0; // Vuelve al índice del primer mes (enero)
        currentYear++; // suma 1 al año actual
      }

      currentMonth.textContent = months[currentMonthIndex];
      currentYearElement.textContent = currentYear;

      updateCalendar();

}

//Actualización de los días del Calendario

function updateCalendar() {
    const daysList = document.querySelector(".days");
    daysList.innerHTML = ""; // Elimina todos los elementos <li> existentes
  
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const totalDays = getDaysInMonth(currentMonthIndex, currentYear);
  
    for (let day = 1; day <= totalDays; day++) {
      const li = document.createElement("li");
      
      li.textContent = day;
      daysList.appendChild(li);
      
      if (day === currentDay && currentMonthIndex === currentMonth && currentYear === currentYear) {
        li.classList.add("selected-day");
      }
    }
  }
  
  
  // Función para obtener el número de días en un mes específico
  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  




// Día seleccionado sombreado
//// Obtén la lista de elementos <li> dentro del <ul> con la clase "days"
const daysInCurrentMonth = document.querySelectorAll(".days li");

daysInCurrentMonth.forEach(function(day) {
  day.addEventListener("click", function() {
    daysInCurrentMonth.forEach(function(day) {
      day.classList.remove("selected-day");
    });
    this.classList.add("selected-day");
  });
});


//Dia Actual Seleccionado
function defaultCurrentDaySelection() {

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const totalDays = getDaysInMonth(currentMonthIndex, currentYear);
  
    for (let day = 1; day <= totalDays; day++) {
      const li = document.createElement("li");
      if (day > 1 && day < totalDays) {
        li.classList.add("inactive-day");
      }

      li.textContent = day;
      daysList.appendChild(li);
    }
  }
  




// Que aparezca el listado

let movimientosList = [];

movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Luz Helena Herrera',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 980000

})

movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Carulla',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 30000

})

movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Google Cloud',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 100000

})
movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Luz Helena Herrera',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 980000

})

movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Carulla',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 30000

})

movimientosList.push({
    enlace: 'movimientos.html',
    icono: 'fi-br-shopping-basket',
    agente: 'Google Cloud',
    descripcion: 'Contabilidad',
    categoria1: 'Nomina',
    categoria2: 'Contabilidad',
    fecha: 'Junio3',
    monto: '$' + 100000

})

for (movimiento of movimientosList){
    let movListItem = `
    <li>
        <a href="${movimiento.enlace}">
            <div class="list-content">
                <div class="movimiento-first-column">
                    <i class="fi ${movimiento.icono}"></i>
                </div>

                <div class="movimiento-second-column">
                    <div class="movimiento-details">
                        <p class="movimiento-list-agente">${movimiento.agente}</p>
                        <p class="movimiento-list-description">${movimiento.descripcion}</p>
                    </div>
                    <div class="movimiento-categories">
                        <p class="movimiento-list-category">${movimiento.categoria1}</p>
                        <p class="movimiento-list-category">${movimiento.categoria2}</p>
                    </div>
                </div>

                <div class="movimiento-third-column">
                        <p class="movimiento-list-date">${movimiento.fecha}</p>
                        <p class="movimiento-list-amount">${movimiento.monto}</p>
                </div>                    
            </div>
            <div class="line-divider"></div>
        </a>
    </li>
    `;

    let listContainer = document.querySelector('.movimientos-list');
    listContainer.innerHTML += movListItem;
}


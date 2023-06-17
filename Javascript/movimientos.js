const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

const currentDate = new Date();
const currentDay = currentDate.getDate();

var currentMonthIndex = new Date().getMonth();
var currentYear = new Date().getFullYear();

window.addEventListener('load', function(){
  currentMonthBtn.textContent = months[currentMonthIndex];
  currentYearElement.textContent = currentYear;
});

updateCalendar();
sombrearDiaSeleccionado();

//Botones mes anterior, Siguiente y hoy
const prevMonthBtn = document.querySelector("#prevMonth");
const nextMonthBtn = document.querySelector("#nextMonth");
const todayBtn = document.querySelector("#today-btn");
const currentMonthBtn = document.getElementById("current-month");
const currentYearElement = document.getElementById("current-year");

prevMonthBtn.addEventListener("click", showPreviousMonth);
nextMonthBtn.addEventListener("click", showNextMonth);
todayBtn.addEventListener("click", showCurrentMonth);


function showPreviousMonth() {
    currentMonthIndex--;

    if (currentMonthIndex < 0) {
        currentMonthIndex = 11; // Vuelve al índice del último mes (diciembre)
        currentYear--; // Resta 1 al año actual
      }


      updateHeaderDate();
      updateCalendar();
      sombrearDiaSeleccionado();
}

function showNextMonth() {
    currentMonthIndex++;

    if (currentMonthIndex > 11) {
        currentMonthIndex = 0; // Vuelve al índice del primer mes (enero)
        currentYear++; // suma 1 al año actual
      }

      updateHeaderDate();
      updateCalendar();
      sombrearDiaSeleccionado();

}

function showCurrentMonth() {
  currentMonthIndex = new Date().getMonth();
  currentYear = new Date().getFullYear();

  updateHeaderDate();
  updateCalendar();
  sombrearDiaSeleccionado();
}

function updateHeaderDate() {
  currentMonthBtn.textContent = months[currentMonthIndex];
  currentYearElement.textContent = currentYear;
}

//Actualización de los días del Calendario

function updateCalendar() {
  let daysList = document.querySelector(".days");
  daysList.innerHTML = ""; // Elimina todos los elementos <li> existentes
  let currentMonth = currentMonthIndex; // Obtiene el índice del mes actual
  
  let totalDays = getDaysInMonth(currentMonth, currentYear);
  let firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Obtiene el día de la semana en que inicia el mes

  let firstRowInactiveDaysCount = 0;
  
  let previousMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Obtiene el índice del mes anterior
  let previousYear = currentMonth === 0 ? currentYear - 1 : currentYear; // Obtiene el año del mes anterior
  let totalDaysPreviousMonth = getDaysInMonth(previousMonth, previousYear);
  let startDay = totalDaysPreviousMonth - (firstDay - 1); // Calcula el día en que inicia el mes anterior

  // Agrega los días correspondientes al mes anterior si el mes no inicia en domingo (día 0)
  if (firstDay > 0) {

    for (let day = startDay; day <= totalDaysPreviousMonth; day++) {
      const li = document.createElement("li");
      li.classList.add("inactive-day");
      li.textContent = day;
      daysList.appendChild(li);
      firstRowInactiveDaysCount++;
    }
  }

  // Agrega los días del mes actual
  for (let day = 1; day <= totalDays; day++) {
    const li = document.createElement("li");

    if (
      day === currentDate.getDate() &&
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear()
    ) {
      li.classList.add("today-day");
    }

    li.textContent = day;
    daysList.appendChild(li);
  }

  //Agregar los días del mes siguiente
    
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); 


  //Calcular los días del mes siguiente que se deben mostrar
  const lastDaysToPrint = 7 * Math.ceil((totalDays + (totalDaysPreviousMonth - startDay + 1)) / 7) - (totalDays + (totalDaysPreviousMonth - startDay));

  //Escribir los días del mes siguiente  
  for (let i = 1; i < lastDaysToPrint; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    li.classList.add("inactive-day");
    daysList.appendChild(li);
  } 

}

// Función para obtener el número de días en un mes
function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}





// Día seleccionado sombreado
//// Obtén la lista de elementos <li> dentro del <ul> con la clase "days"
function sombrearDiaSeleccionado() {
  let daysInCurrentMonth = document.querySelectorAll(".days li");

  daysInCurrentMonth.forEach(function(day) {
    day.addEventListener("click", function() {
      daysInCurrentMonth.forEach(function(day) {
        day.classList.remove("selected-day");
      });
      this.classList.add("selected-day");
    });
  });
}



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
  

//Popup de Meses y Año

const prevYear = document.querySelector('#prevYear');
const selectedYear = document.querySelector('#selected-year');
const nextYear = document.querySelector('#nextYear');

prevYear.addEventListener("click", showPreviousYear);
nextYear.addEventListener("click", showNextYear);


function showPreviousYear() {
  currentYear--;
  console.log(currentYear);

  updateMonthsBox();
  updateHeaderDate();
  updateCalendar();
  sombrearDiaSeleccionado();
}

function showNextYear() {
  currentYear++;
  console.log(currentYear);


  updateMonthsBox();
  updateHeaderDate();
  updateCalendar();
  sombrearDiaSeleccionado();
}



function updateMonthsBox() {

  selectedYear.textContent = currentYear;

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


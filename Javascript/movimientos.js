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

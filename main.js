// Cargar el Menú en cualquier página
const nav = document. querySelector ('.main-menu')
fetch('/Modules/main-menu.html')
.then (res=>res.text())
.then (data=>{nav.innerHTML=data})

window.addEventListener('load', function(){
    let burgerButton = document.querySelector('.burger');
    let menuMobile = document.querySelector('.sidebar');
    
    burgerButton.addEventListener('click', 
    function() {
        menuMobile.classList.toggle('active');
    });
});

const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
console.log(lastDayOfMonth);

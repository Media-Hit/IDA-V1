const nav = document. querySelector ('.main-menu')
fetch('/Modules/main-menu.html')
.then (res=>res.text())
.then (data=>{
nav.innerHTML=data
})
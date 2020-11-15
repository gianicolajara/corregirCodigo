/*
* -Tomamos el icono desde la id con getElementById una forma mas
* comun de tomar las id
*/
const iconMenu = document.getElementById('icon-menu');
const mainMenu = document.getElementById('main-menu');

iconMenu.addEventListener('click', () =>{
    mainMenu.classList.toggle('show-menu');
});
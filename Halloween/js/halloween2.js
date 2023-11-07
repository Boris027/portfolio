function sound(element){
    document.getElementById(element).play();
}
function silence(element){
    document.getElementById(element).pause();
}

function show(element){
    document.getElementById(element).style.visibility="visible";
    /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad), de manera que pasa de estar oculto a estar a la vista*/
}

function hide(element){
    document.getElementById(element).style.visibility="hidden";
}
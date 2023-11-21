/**************************************************
 * 
 * 
 * 
 * 
 */

function show(element){
    document.getElementById(element).style.visibility="visible";
    /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad), de manera que pasa de estar oculto a estar a la vista*/
}

function hide(element){
    document.getElementById(element).style.visibility="hidden";
}

function sound(element){
    document.getElementById('dragonsound').play();
}

function silence(element){
    document.getElementById('dragonsound').pause();
}

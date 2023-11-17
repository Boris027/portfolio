function sound(element){
    document.getElementById(element).play();
}

function stop(element){
    document.getElementById(element).pause();
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

function show2(element) {
    // Mostrar el elemento
    document.getElementById(element).style.visibility = "visible";

    // Ocultar el elemento después de 5 segundos
    setTimeout(function() {
        document.getElementById(element).style.visibility = "hidden";
    }, 4000); // 5000 milisegundos = 5 segundos
}
var boton = document.querySelector("button");
	var cuerpo = document.querySelector("body");


var seEjecutaEnEvento = function(){
	cuerpo.insertAdjacentHTML("beforeend", "<p>BEEP</P>");
    cuerpo.classList.toggle("color");
}


boton.addEventListener("click", seEjecutaEnEvento)
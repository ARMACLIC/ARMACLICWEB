/*Programacion de JavaScript*/

var piezas = document.getElementsByClassName('movil');

var tamWidh = [83,83,83,83,83,83,83,83,83];
var tamHeight = [83,83,83,83,83,83,83,83,83];

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
}

for(var i=0;i<=2;i++){
    piezas[i].setAttribute("x", Math.floor((Math.random() * 1) -70 ));
    piezas[i].setAttribute("y", Math.floor((Math.random() * 300)+120 ));
	piezas[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
}
for(var i=3;i<=5;i++){
	piezas[i].setAttribute("x", Math.floor((Math.random() * 200) +35 ));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 1)-3 ));
	piezas[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
}
for(var i=6;i<=8;i++){
	piezas[i].setAttribute("x", Math.floor((Math.random() * 1) +337 ));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 300)+120 ));
	piezas[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	
}


var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.touches[0].clientX;        
	currentY = evt.touches[0].clientY;
	currentPosX = parseFloat(elementSelect.getAttribute("x"));     
	currentPosY = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("ontouchmove","moverElemento(evt)");

}

function moverElemento(evt){

	var dx = evt.touches[0].clientX - currentX;
	var dy = evt.touches[0].clientY - currentY;

	currentPosX = currentPosX + dx;
	currentPosY = currentPosY + dy;
	elementSelect.setAttribute("x",currentPosX);
	elementSelect.setAttribute("y",currentPosY);

	currentX = evt.touches[0].clientX;        
	currentY = evt.touches[0].clientY;

elementSelect.setAttribute("ontouchend","deseleccionarElemento(evt)");
elementSelect.setAttribute("ontouchcancel","deseleccionarElemento(evt)");


iman()
}

function deseleccionarElemento(evt){
	testing()
	if(elementSelect != 0){	
		clic.play();	
		elementSelect.removeAttribute("ontouchmove");
		elementSelect.removeAttribute("ontouchcancel");
		elementSelect.removeAttribute("ontouchend");
		elementSelect = 0;
	}
}
var entorno = document.getElementById('entorno');

function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}



var origX = [52,135,218,52,135,218,52,135,218];   
var origY = [245,245,245,328,328,328,411,411,411];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosX-origX[i])<15 && Math.abs(currentPosY-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);


		}
	}
}

var clic = document.getElementById("clic");
var win = document.getElementById("win");


function testing() {
	var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){
		win.play();
	}
}

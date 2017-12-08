/**
 * 
 */


$(document).ready(function(){

	$('h1').text("Sono BEllo sono bellissimp");

	 $(window).scroll(function() {   
		   if($(window).scrollTop() + $(window).height() == $(document).height()) {
		       alert("bottom!");
		   }
		});
	
});
alert("inizio calcolo dell'isee per lo studente");

numeroComponenti = prompt("Inserisci il numero dei componenti del  nucleo familiare")

componentiReddito = new Array();

patrimoni_ogni_singolo_componente = new Array();

for (var i = 0; i < numeroComponenti; i++) {
	componentiReddito[i] = prompt("Inserisci il redditto del Componente Numero "
			+ (i + 1))
	patrimoni_ogni_singolo_componente[i] = prompt("inserisci il patrimonio "
			+ (i + 1))
}

var redditoComplessivo = 0;

var patrimonioComplessivo = 0;
var i;
for (i = 0; i < numeroComponenti; i++) {
	redditoComplessivo += parseInt(componentiReddito[i]);
	patrimonioComplessivo += parseInt(patrimoni_ogni_singolo_componente[i]);
}

ISR = redditoComplessivo;

ISP = patrimonioComplessivo;

ISE = ISR + (ISP * 20 / 100);

var calcolaSE = function(numeroComponenti) {

	var SE;

	numeroComponenti = numeroComponenti * 1;
	switch (numeroComponenti) {
	case 1:
		SE = 1;
		break;
	case 2:
		SE = 1.57;
		break;

	case 3:
		SE = 2.04;
		break;

	case 4:
		SE = 2.46;
		break;
	case 5:
		SE = 2.85;
		break;
	default:
		SE = 2.85 + 0.2 * (numeroComponenti - 5);
	}

	return SE;
}

SE = calcolaSE(numeroComponenti);

ISEE = ISE / SE;

reportISEE = "Report ISEE calcolato\n";

reportISEE += "Numero componenti: " + numeroComponenti + "\n";

reportISEE += "Reddito Complessivo " + redditoComplessivo + "\n";

reportISEE += "Patrimonio Complessivo " + patrimonioComplessivo + "\n";

reportISEE += "Valore ISE " + ISE + "\n";
reportISEE += "Scala Equivalenza" + SE + "\n";
reportISEE += "Valore ISEE" + ISEE + "\n";

alert(reportISEE);

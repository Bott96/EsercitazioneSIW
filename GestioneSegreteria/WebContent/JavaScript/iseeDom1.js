/**
 * 
 */
function maschera(studente) {

	document.getElementById("selStudente").innerHTML = "<h4>"+studente.matricola+"-"+
																studente.cognome+"-"+
																studente.nome+"-"+
																"</h4>";
	
	var numComponenti =
					document.getElementById("numComponenti");
	
	numComponenti.addEventListener("blur",
				aggiungiRedditoPatrimonio);
	

																
	function aggiungiRedditoPatrimonio() {
		var numComponenti =
			document.getElementById("numComponenti");
		
		var numComp = numComponenti.value;
		var valori = document.getElementById("valori");
		for(var i =0; i<numComp; i++){
			var reddito = document.createElement("div");
			reddito.setAttribute("class", "form-group");
			
			reddito.innerHTML = "<label>REDDITO del Componente: </label>"+
								"<input class='redditoComponente' "	
			
		}
		
	}			
	
																
}
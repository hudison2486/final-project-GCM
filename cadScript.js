

window.onload = () => {

	function deBug(e) {
		e.preventDefault();
		console.log('Evento: ' + e.type);
	}


	var cadsButton = document.getElementById('regisId');

	cadsButton.addEventListener('click', () => {
		console.log("entrou aqui");
		 window.location.href  = "../index.html"
	})
}
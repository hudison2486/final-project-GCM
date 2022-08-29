const users = [
    {
        username: 'admin',
        password: 'admin'
    },
    {
        username: 'user2',
        password: '321'
    }
]

window.onload = () => {

	var email = document.getElementById('email');
	var password = document.getElementById('pass');
	var button = document.getElementById('btn');

	button.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('Evento: ' + e.type);
		console.log(email.value);
		alert("Logado com sucesso!");
		window.location.href = "../pages/main.html"

	})

	


	var cadsButton = document.getElementById('regisId');

	cadsButton.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('Evento: ' + e.type);
		console.log("entrou aqui");
		alert("Cadastrado com sucesso!");
		 window.location.href  = "../index.html"
	})
}
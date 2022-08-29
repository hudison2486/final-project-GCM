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
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var error = document.getElementById('error')
    var button = document.getElementById('button')

    var select_day = document.getElementById('select-day')

    


    button.addEventListener('click', () => {
        console.log(username.value)
        const hasUser = users.find(user => user.username === username.value && user.password === password.value)
        if (hasUser) {
            console.log('loguei');
            alert("Logado com sucesso!");
            window.location.href  = "./pages/main.html"
        } else {
            alert("Usuário ou senha incorreta.");
            error.innerHTML = 'Usuario ou senha incorreta.'
        }
    })
    
}
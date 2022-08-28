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

    button.addEventListener('click', () => {
        console.log(username.value)
        const hasUser = users.find(user => user.username === username.value && user.password === password.value)
        if (hasUser) {
            console.log('loguei');
            window.location.href  = "./pages/main.html"
        } else {
            error.innerHTML = 'Usuario ou senha incorreta.'
        }
    })
    
}
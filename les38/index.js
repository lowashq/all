// let user = {
//     name: 'Dmytro'
// }
// user[6] = 36
// console.log('user: ',user)

// for (let key in user) {
//     console.log(key, user[key])
// }

let users = []
let changeColor = () => {
    let usersColor = document.querySelectorAll('.user')
    for (const iterator of usersColor) {
        let red = Math.round(Math.random()*255)
        iterator.style.background = rgb(`${red}`,200,200)
    }
    
}
let addUser = () => {
    let name = document.getElementById('name').value
    let age = +document.getElementById('age').value
    localStorage.setItem('new_users',JSON.stringify(users))
    let user = {
        name,
        age,
    }
    users.push(user)
    console.log(users)
    let usersBlock = document.querySelector('.users')
    usersBlock.insertAdjacentHTML('beforeend',`
        <div class="user">
            <div class="name">${user.name}</div>
            <div class="age">${user['age']}</div>
            <button onclick="changeColor()">color</button>
        </div>    
    `)
}
let loadUsers = () => {
    let loadedUsers = JSON.parse(localStorage.getItem('new_users'))
    console.log(loadedUsers)
    let usersBlock = document.querySelector('.users')
    for (const loadedUser of loadedUsers) {
        usersBlock.insertAdjacentHTML('beforeend', `
            <div class="user">
                <div class="name">${loadedUser.name}</div>
                <div class="age">${loadedUser['age']}</div>
                <button onclick="changeColor()">Color</button>
            </div>
        `)
        users.push(loadedUser)
    }
}
async function fetchPlanet() {
    let url = 'https://swapi.dev/api/planets/2/'
    let response = await fetch(url);
    let planet
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        planet = await response.json();
        console.log(planet)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock = document.querySelector('.fetch')
    fetchBlock.insertAdjacentHTML('beforeend', `
        <div class="planet">
            <div class="name">${planet.name}</div>
            <div class="period">${planet.rotation_period}</div>
        </div>

    `)
}

async function fetchHero() {
    let url = 'https://swapi.dev/api/people/1/'
    let response = await fetch(url);
    let hero
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        hero = await response.json();
        console.log(hero)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock = document.querySelector('.fetch')
    fetchBlock.insertAdjacentHTML('beforeend', `
        <div class="hero">
            <div class="name">${hero.name}</div>
            <div class="mass">${hero.mass}</div>
        </div>

    `)
}

async function fetchFilm() {
    let url = 'https://swapi.dev/api/films/3/'
    let response = await fetch(url);
    let film
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        film = await response.json();
        console.log(film)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock = document.querySelector('.fetch')
    fetchBlock.insertAdjacentHTML('beforeend', `
        <div class="film">
            <div class="name">${film.title}</div>
            <div class="release_date">${film.release_date}</div>
        </div>

    `)
}

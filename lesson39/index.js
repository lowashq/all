const tasksListElement = document.querySelector(`.tasks__list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}
tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });
  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };
  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);
  
    if (!isMoveable) {
      return;
    }
  
    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);
  
    // Проверяем, нужно ли менять элементы местами
    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }
  
    tasksListElement.insertBefore(activeElement, nextElement);
  });
  async function fetchPlanet() {
    let number = document.getElementById('Number').value
    let url = 'https://swapi.dev/api/planets/${number}/'
    let response = await fetch(url);
    let planet
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        planet = await response.json();
        console.log(planet)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock = document.querySelector('.tasks__list')
    fetchBlock.insertAdjacentHTML('beforeend', `

        <li class="tasks__item" draggable="true">${planet.name}</li>

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
            
        </div>

    `)
}
//Базовые методы работы с массивом
const arr = ['Медики', 'Педагоги', 'Строители']
console.log(arr)
//Добавить в конец
arr.push('Проектировщики')
//Добавить в начало
arr.unshift('Юристы')
console.log(arr)

//Удалить из начала и вернуть значение удаленного (взять из списка like)
const firstItem = arr.shift()
console.log(arr)
console.log(firstItem)

//Удалить из конца и получить значение
const lastItem = arr.pop()
console.log(arr)

//Переворот массива - .reverse
//Переворот строки делается через приведения её к массиву и переворот .split()   .reverse  .join
const txt = 'Пройдите переподготовку на специалиста высокого уровня'
const reverseText = txt.split('').reverse().join('')
console.log(reverseText)


//Метод indexOf позваляет искать индекс элемента по содержимому
const ped = arr.indexOf('Педагоги')
console.log(ped)
//обращение по индексу как и в питоне

//indexOf подходит для поиска простых объектов, для поиска сложных используется метод findIndex
people = [{name:"Ivan", budget:121211},{name: "Egor", budget: 99090},{name: "Elena", budget: 121900}]
const index = people.findIndex(function (person){
    return person.budget === 99090
})
console.log(index)
console.log(people[1])
//Также есть метод find, который сразу возвращает экземпляр целиком, а не через обращение по индексу

//Для итерации с поиском следующая запись (let)
let findedPerson
for (const person of people){
    if (person.budget === 121211){
        findedPerson = person
        console.log(person)
        console.log(findedPerson)
    }
}

//Наиболее лаконичная запись
const pers = people.find(person => person.budget === 121211)
console.log(pers)

//Проверка на элемент в массиве .includes('value')

// Функция map
// Возвращает новый массив с измененными данными
const upperCaser = arr.map( elem => { return elem.toUpperCase()})
console.log(upperCaser)
//То есть мы возвращаем новый массив, обработанный функцией внутри
// Разумеется можно передавать в map и сторонние аргументы

// Функция filter
// filter по сути то же самое, но вместо модификации всего списка фильтрует его элементы. Почитать потом

//Функция(метод) reduce
// reduce принимает 2 значения: функцию для обработки и стартовая точка
// внутренняя функция принимает 2 аргумента:
// 1) Контейнер для суммирования того, что нам нужно
// 2) итерируемый экземпляр
const fullBudget = people.reduce((some_sum, person) => {
    if (person.budget > 100000)
        some_sum += person.budget
    return some_sum
}, 0)
console.log(fullBudget)
//Таким образом мы сложили бюджеты тех, у кого он больше 100000
//Но это типа бэд прэктис
//Правильным считается что-то вроде того
const allBudget = people
    .filter(person => person.budget > 100000)
    .reduce((some_sum, person) =>{
        some_sum += person.budget
        return some_sum
    }, 0)
console.log(allBudget)
//Сначала фильтруем, потом суммруем
//Называется чейнинг



//Как ведут себя циклы с arrays

const arr12 = ['a', 'b', 'c']
for (i of arr12){
    console.log(i)
}
for (i in arr12){
    console.log(i)
}
//Здесь обнаруживаем интересную особенность JS. Ключевое слово in итерирует по ключам, of по значениям
//Функции (методы) в объекте можно (и нужно) записывать с упрощенным синтаксисом

const example = {
    name: 'Name',
    greet(){               //то есть, мы не пишем тут ключ, только значение
        console.log('HI')}
}
console.log(example.name)
example.greet()

//Доступны всякие непотребства типа
const example2 = {
    'complex key': 'Complex value',
    ['key' + (1 + 3)]: 'Computed key' // key4: 'Computed Key'
}
console.log(example2)
//И в таком случае мы можем обращаться к элементам через строки
console.log(example2['complex key'])

//Все ключи изменяемы
const person = {
    name: 'Ivan',
    age: 21,
    lang: ['ru', 'en', 'fr']
}
person.age++
person.lang.push('de')
console.log(person)

// Деструктуризация
// Используется для более лаконичного создания переменных на основе объекта
const {name, age, lang} = person
console.log(name)
console.log(age)
//То есть пишем в фигурных те элементы, которые нам нужно создать. При этом название должно соотвествовать атрибутам
//Если же хотим назвать иначе:
const {name: hisName, age: hisAge } = person
console.log(hisName, hisAge)
//Также можно ставить значения по умолчанию в случае undefined например. Синтаксис age = 10 в фигурных


//Можем итерироваться только по ключам, то есть in
for (let i in person){
    console.log(i)
}
//Соответственно для итерации по значениям делаем следующее
for (let key in person){
    console.log(person[key])
}

// Итерация с in считается небезопасной, т.к. может быть также осуществлена итерация по ключам из прототипа объекта
// Во избежании ошибок делается проверка
for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log(key)
        console.log(person[key])
    }
}

// Более правильным решением считается использование методов, например
Object.keys(person).forEach((key)=>{
    console.log(key)
    console.log(person[key])
})

//Context
//Контекст это по сути возможность обращаться к родительскому объекту через спец запись this
const person2 = {
    name: 'John',
    birth: 1993,
    year_of_stage: 2010,
    age(){
        console.log('Возраст когда он вырос:', this.year_of_stage - this.birth)
    }
}
person2.age()
//Функционально нет разницы писать person или this
//4:07 видео просмотр
//Соответственно, this удобно применять, когда пишешь стандартную обработку для разных объектов, что логично

//Через контекстный оператор создаем логер
const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues(){
        //Если callback функция не будет стрелочной - возникнет ошибка контекста (стрелочные не создают своего контекста что бы это не значило)
        //Если надо по какой-то причине написать через функцию, надо присвоить константе значение this и продолжать через self
        // Или можно использовать метод .bind()  (Лучше пересмотреть видео 4:14:00 или погуглить)
        Object.keys(this).forEach(key =>{
            console.log(`____${key}: ${this[key]}`)
        })
    }
}
logger.keysAndValues.call(person)

//Благодаря методу call() любой объект может использовать методы, принадлежащие другому объекту.
//Пример
const car1 = {
    color: "Red",
    speed: function (){
        console.log(this.engine * 100, " реальная скорость")
    }
}
const car2 = {
    engine: 2
}
car1.speed.call(car2)
car1.speed.bind(car2)
//Вот он пример и есть

//bind() используется для привзяки контекста
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
let sayHi = user.sayHi.bind(user); // (*)
sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!
//В данном коде без привязки контекста потеряется инфа о юзере
//https://learn.javascript.ru/bind

//Также есть метод apply() который работает аналогично call()




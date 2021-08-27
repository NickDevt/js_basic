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

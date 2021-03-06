//Классическая конкатенация строк как в питоне

//Косые кавычки позволяют внедрять переменные внутрь текста. Ecmascript6
const name = 'sad'
const age = 23
const output = `Привет, меня зовут ${name} и мне ${age}`
console.log(output)
//Плейсхолдеры внутри данных кавычек позволяют использовать тернарные операторы
const output1 = `Привет, меня зовут ${name} и мне ${age < 20 ? ' мало лет' : ' много лет'}`
console.log(output1)
//Также косые кавычки позволяют создавать многострочные записи
const strings = `
    <div>
        <h1>efefe</h1>
    </div>
    `

//Разумеется строка в js - это не строка, а объект. То есть имеет методы, свойства в отличие от обычного текста


//Есть в js следующая возможность синтаксиса
//Вместо классических аргументов в круглых скобках передаем в косых кавычках
//В таком случае js распарсит текст как первый аргумент(массив), а дополнительные переменные, как последующие аргументы
function logPerson(s, name, age) {
    console.log(s)
    console.log(name)
    console.log(age)
}
const some = 'Kew'
const agee = -3
const output3 = logPerson`ds ew we, ${some} ewqe ${agee}`
console.log(output3)

//Более показательный пример с данным функционалом:
function logPerson(s, name, age) {
    if (age < 0) {
        age = "Ещё не родился"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const output4 = logPerson`Имя: ${some}, Возраст: ${agee}!`
console.log(output4)
//Тут сразу много вещей, на которые стоит обратить внимание
//Во-первых, то, как распарсились значение output4
//Во-вторых вывод
//То есть, первый аргумент всегда массив, второй 0 переменная, третий 1 переменная итд
//А в ретерне в функции мы просто обращаемся к авторасспличенному массиву



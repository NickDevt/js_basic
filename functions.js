//Функции
//Стандартные функции работают точно так же как и в питоне
//Функции это конечно же объекты

//Function Declaration (classic) !К такой функции можно обращаться из любого участка кода и до её инициализации
function fnc(arg) {
    return 1
}
//Function Expression    К такой функции нельзя обращаться до её инициализации
const2 = function (arg) {
    return 1
}

//Function Expression #2
const fnc1 = function fnc1(arg) {
    return 1
}

//Анонимные функции
let counter = 0
setInterval(function (){
    console.log(++counter)
}, 1000)



//Стрелочные функции
// Стрелочные функции хороши например тем, что не создают свой контекст (пример в object_full)
//Вместо этого
function greet(name) {
    console.log('hi', name)
}
//Стрелочная выглядит так
const arrow = (name) => {
    console.log('hi', name)
}

//Если принимает один аргумент - можно сократить
const arrow_short = name => {
    console.log('hi', name)
}

//Ещё более сокращенный вариант. Подходит для простых функций с return
const pow = num => num ** 2

// также часто встречается подобная запись
console.log((ar1=1, ar2= 2) => ar1, ' функция не объявлена никак')
// В общем, часто используется во всяких map filter итд. Тут не работает как надо почему-то

//Параметры по умолчанию. Максимальная аналогия с питоном
const sum = (a,b) => a + b
console.log(sum(1), 'получили если забыли один из аргуметов')

const sum_auto = (a = 1 ,b = 2) => a + b
console.log(sum_auto(1), ' получили если задали по умолчанию и не передали один из аргументов')


//Если мы не знаем, сколько аргументов будет
function sumAll(...all) {
    console.log(all)
}


//Замыкания
//Замыкание - это способоность внутренней функции запомнить контекст(переменные извне) там, где она была определена
//То есть, если функция внутри другой функции - она имеет доступ к переменным внешней функции
//При чем не к созданным переменным внутри функции, это то логично, а к аргументам в том числе
function createMember(name){
    return function (lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Ivan')
console.log(logWithLastName(' Petrov'))


//Максимально подробно механизм замыкания:
function outer(x) {
    var tmp = 3;

    function inner(y) {
        alert(x + y + (++tmp)); // выведет 16
    }
    inner(10);
}
outer(2);

// Начинаем с последней строки (вызов функции outer)
// Начинает выполняться аутер функция с x = 2 (первая строка)
// Создается функция иннер с переменной тмп
// вызывается функция иннер с y = 2
// выполняется код внутри функции иннер
// т.к функция иннер знает значение х(это и есть замыкание) выводится alert с итоговым значением
// иннер знает и значение tmp и значение х
// доп примеры итд https://ru.stackoverflow.com/questions/414092/%D0%9A%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript
// Используются замыкания для безопасности, но тут пока не совсем понятно
//

//В следующем примере то же самое, но мы поднимаемся на уровень выше
function foo(x) {
    var tmp = 3;

    return function (y) {
        alert(x + y + (++tmp)); // will also alert 16
    }
}

var bar = foo(2); // bar is now a closure.
bar(10);
//То есть здесь мы передаем значение уже в bar, что находится вне области видимости
//Тем не менее значения замкнулись и нужные переменные доступны
//Прочесть для большей ясности http://javascript.ru/basic/closure


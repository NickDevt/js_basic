//Классический вариант цикла for
for (let i = 0; i < 5; i++){
    console.log(i)
}

//Упрощенный вариант. Работает с массивами, но с числом уже не будет
const arr = [1, 2, 3, 4, 5]
for (let i of arr) {
    console.log(i)
}
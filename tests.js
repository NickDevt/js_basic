//Все эти функции распечатаются как свойства, а не как значение
()=>1
console.log(()=>1)
const x = () => 1+1
console.log(x)

function c(){
    return 1+1
}
console.log(c)
a = c
console.log(c())
console.log(a())

//При вызове функции без скобок console.log() выводит свойство, а не значения. Со скобками значение



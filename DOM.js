//Чтобы воздействовать на элемент , его нужно получить. Способы:

//----getElem
// Самые старые методы, используются редко, полностью заменены qs
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

//querySelector и querySelectorAll
//Преимущество querySelector в том, что он принимает не одно свойство, а несколько

const h1 = document.querySelector('h1')

h1.onclick = () => {
     if(h1.style.color === 'black'){
         h1.style.color = 'yellow'
     }else{
         h1.style.color = 'black'
     }
}
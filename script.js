const carsList = [
    {title: "BMW",img: "car 1.png"},
    {title: "Mersedec",img: "car 2.png"},
    {title: "Audi",img: "car 3.png"},
]

const burger = document.querySelector('.header__nav-burger')
const form = document.querySelector('.header__nav-form')
const input = form.elements[0]
const list = document.querySelector('.header__nav-list')

form.addEventListener('submit', searchHandler)

function searchHandler (e) {
    e.preventDefault()
    const inputValue = input.value
    const filtredList = carsList.filter(c=> c.title.toLowerCase() === inputValue)
    console.log(filtredList);
}

burger.addEventListener('click', () =>{
list.classList.toggle('d-block') 
})




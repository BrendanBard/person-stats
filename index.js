function updateHeading(ev){
ev.preventDefault()
const f = ev.target
const nameField = f.personName
const heading = document.querySelector('h1')
heading.textContent = nameField.value
}

function updateDiv(ev){
ev.preventDefault()
const y = ev.target
const color = y.personColor
const name = y.personName
const div = document.querySelector('div')
const details = document.querySelector('#stats p')

const list = document.createElement('ul')
const nameItem = document.createElement('li')
nameItem.textContent = `Name: ${name.value} `
list.appendChild(nameItem)


//const ageItem = document.createElement('li')  etc
const colorItem = document.createElement('li')
colorItem.textContent = `Color: ${color.value}`
colorItem.style.backgroundColor = color.value
list.appendChild(colorItem)


stats.appendChild(list)

//div.textContent = name.value + " likes: " + color.value 
//details.textContent = color.value
//div.style.color = color.value
}

const personForm = document.querySelector('#person-form')
//personForm.addEventListener('submit', updateHeading)
personForm.addEventListener('submit', updateDiv)

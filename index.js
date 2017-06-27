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
const colorDiv = document.createElement('div')
//colorDiv.style.backgroundColor = color.value
colorDiv.style.width = '6rem'
colorDiv.style.height = '3rem'
colorDiv.style.backgroundColor = color.value
//colorDiv.style.'center'
colorItem.appendChild(colorDiv)
list.appendChild(colorItem)


stats.appendChild(list)

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateDiv)

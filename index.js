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
const div = document.querySelector('div')
const details = document.querySelector('#details')
div.textContent = color.value
details.textContent = color.value
div.style.backgroundColor = color.value
div.style.outlineColor = color.value
div.style.color = color.value
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)
personForm.addEventListener('submit', updateDiv)
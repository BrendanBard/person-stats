function updateHeading(ev){
ev.preventDefault()
const f = ev.target
const nameField = f.personName

const heading = document.querySelector('h1')
heading.textContent = nameField.value

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)

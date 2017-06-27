function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
  list.appendChild(colorItem)
  const div = renderColor(favoriteColor)
  list.appendChild(div)
  const stats = document.querySelector('#stats')
  stats.appendChild(list)
}

//renderColor
function renderColor(favoriteColor){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target

    const name = f.personName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value

    const list = renderList(name, age, favoriteColor)
    const stats = document.querySelector('#stats')
    stats.appendChild(list)
}

//renderColor
function renderColor(favoriteColor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

//renderListItem
function renderListItem(contentType) {
    const content = document.createElement('li')
    content.textContent = contentType
    return content
}
//renderList
function renderList(name, age, favoriteColor) {
    const list = document.createElement('ul')
    const nameItem = renderListItem(`Name: ${name}`)
    const ageItem = renderListItem(`Age: ${age}`)
    const favoriteColorItem = renderListItem('Favorite Color: ')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(favoriteColorItem)
    const div = renderColor(favoriteColor)
    list.appendChild(div)
    return list
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
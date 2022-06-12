const body = document.querySelector('body')
const title = document.querySelector('.title')
const button = document.querySelector('.button')
const darkModeClass = 'dark-mode'

function changeClasses() {
  body.classList.toggle(darkModeClass)
  title.classList.toggle(darkModeClass)
  button.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode
    title.innerHTML = `${darkMode} ON`
    return
  }

  button.innerHTML = darkMode
  title.innerHTML = `${lightMode} ON`
}

function changeMode() {
  changeClasses()
  changeText()
}

button.addEventListener('click', changeMode)

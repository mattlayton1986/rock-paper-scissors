import './style.css'

const component = (text = "Hello, Webpack!") => {
  const element = document.createElement('h1')
  element.innerHTML = text
  return element
}

$('#app').append(component())

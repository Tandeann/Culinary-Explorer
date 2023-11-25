import 'regenerator-runtime'
import '../styles/main.scss'
import './view/components/app-bar.js'
import './view/components/hero-component.js'
import Main from './view/main.js'
import './view/components/restaurant-list.js'
import swRegister from './utils/sw-register.js'

const main = new Main()
window.addEventListener('hashchange', () => {
  main.renderPage()
})

window.addEventListener('load', () => {
  main.renderPage()
  swRegister()
})

document.addEventListener('DOMContentLoaded', main)

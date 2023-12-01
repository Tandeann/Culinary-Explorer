import 'regenerator-runtime'
import '../styles/main.scss'
import './view/components/app-bar.js'
import './view/components/hero-component.js'
import Main from './view/main.js'
import './view/components/restaurant-list.js'
import swRegister from './utils/sw-register.js'
import './view/components/review-item.js'
import './view/components/toast-alert.js'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const hamburgerButtonElement = document.querySelector('#humbergerButton')
const navigationDrawerElement = document.querySelector('#navigationDrawer')
const bodyElement = document.querySelector('body')

const main = new Main()

hamburgerButtonElement.addEventListener('click', (event) => {
  navigationDrawerElement.classList.toggle('open')
  event.stopPropagation()
})

bodyElement.addEventListener('click', (event) => {
  navigationDrawerElement.classList.remove('open')
})

window.addEventListener('hashchange', () => {
  main.renderPage()
})

window.addEventListener('load', () => {
  main.renderPage()
  swRegister()
})

document.addEventListener('DOMContentLoaded', main)

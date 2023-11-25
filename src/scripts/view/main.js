import './components/app-bar.js'
import UrlParser from '../routes/url-parser.js'
import routes from '../routes/routes.js'

class Main {
  async renderPage () {
    const hamburgerButtonElement = document.querySelector('#humbergerButton')
    const navigationDrawerElement = document.querySelector('#navigationDrawer')
    const bodyElement = document.querySelector('body')
    const skipElement = document.querySelector('#skip-link')

    hamburgerButtonElement.addEventListener('click', (event) => {
      navigationDrawerElement.classList.toggle('open')
      event.stopPropagation()
    })

    bodyElement.addEventListener('click', (event) => {
      navigationDrawerElement.classList.remove('open')
    })

    skipElement.addEventListener('click', (event) => {
      document.querySelector('main').focus()
    })

    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    document.querySelector('main').innerHTML = await page.render()
    await page.afterRender()
  }
}
export default Main

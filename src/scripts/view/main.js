import UrlParser from '../routes/url-parser.js'
import routes from '../routes/routes.js'

class Main {
  async renderPage () {
    const skipElement = document.querySelector('#skip-link')

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

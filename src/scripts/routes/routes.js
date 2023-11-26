import DetailPage from '../view/pages/detail-page.js'
import FavoritePage from '../view/pages/favorite-page.js'
import HomePage from '../view/pages/home-page.js'

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail': DetailPage,
  '/favorite': FavoritePage
}

export default routes

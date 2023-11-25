import { getAllRestaurant } from '../../data/data-source.js'

const HomePage = {
  async render () {
    return `
    <h1 >Explore Restaurant</h1>
      <restaurant-list></restaurant-list>
    `
  },
  async afterRender () {
    try {
      const restaurants = await getAllRestaurant()
      const RestaurantListElement = document.querySelector('restaurant-list')
      console.log(RestaurantListElement)
      RestaurantListElement.restaurants = restaurants
    } catch (error) {
      console.error('Error:', error)
    }
  }
}

export default HomePage

import { getRestaurantDetail } from '../../data/data-source.js'
const DetailPage = {
  async render () {
    return `
      <h2>This is Detail Page</h2>
    `
  },
  async afterRender () {
    const restaurant = await getRestaurantDetail()
    console.log(restaurant)
  }
}

export default DetailPage

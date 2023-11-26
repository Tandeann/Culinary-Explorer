import { getRestaurantDetail } from '../../data/data-source.js'
import UrlParser from '../../routes/url-parser.js'
import API_ENDPOINTS from '../../data/api-endpoint.js'
import ReviewInitiator from '../../utils/review-initiator.js'
import LikeButtonInitiator from '../../utils/like-button-initiator.js'
import '../../../styles/detail-page.scss'

const DetailPage = {
  async render () {
    return `
    <div class="restaurant-detail">
    <img
      id="restaurantPicture"
      class="restaurant-detail__picture skeleton-loader"
    />
    <div class="restaurant-detail__info">
      <div class="restaurant-detail__info__container">
        <h2 id="restaurantName" class="skeleton-loader"></h2>
      </div>
      <div class="restaurant-detail__info__container">
        <h3>Address</h3>
        <p id="restaurantAddress" class="skeleton-loader"></p>
      </div>
      <div class="restaurant-detail__info__container">
        <h3>City</h3>
        <p id="restaurantCity" class="skeleton-loader"></p>
      </div>
      <div class="restaurant-detail__info__container">
        <h3>Rating</h3>
        <p id="restaurantRating" class="skeleton-loader"></p>
      </div>
    </div>
    <div class="restaurant-detail__description">
      <div class="restaurant-detail__description__container">
        <h3>Description</h3>
        <p id="restaurantDescription" class="skeleton-loader"></p>
      </div>
      <div class="restaurant-detail__description__container__food">
          <h3>Food</h3>
          <ul id="restaurantFoods" class="skeleton-loader"></ul>
      </div>
      <div class="restaurant-detail__description__container__drinks">
          <h3>Drinks</h3>
          <ul id="restaurantDrinks" class="skeleton-loader"></ul>
      </div>
    </div>
    <div class="restaurant-detail__customer-reviews">
      <h3>Customer Reviews</h3>
      <div
        id="restaurantReviews"
        class="restaurant-detail__customer-reviews__container skeleton-loader"
      ></div>
      <form
        id="reviewForm"
        class="restaurant-detail__customer-reviews__form skeleton-loader">
        <h4>Post your review</h4>
        <table>
          <tr>
            <td>
              <label for="name">Name</label>
            </td>
            <td>
              <p>:</p>
            </td>
            <td>
              <input type="text" name="name" id="name" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="review">Review</label>
            </td>
            <td>
              <p>:</p>
            </td>
            <td>
              <textarea name="review" id="review" cols="20" rows="5"></textarea>
            </td>
          </tr>
        </table>
        <button type="submit">Kirim</button>
      </form>
    </div>
  </div>
  <div id="likeButtonContainer"></div>
    `
  },
  async afterRender () {
    // get data from url
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    const restaurant = await getRestaurantDetail(url.id)

    if (restaurant === undefined) {
      return
    }

    // get element
    const nameElement = document.getElementById('restaurantName')
    const pictureElement = document.getElementById('restaurantPicture')
    const addressElement = document.getElementById('restaurantAddress')
    const cityElement = document.getElementById('restaurantCity')
    const descriptionElement = document.getElementById('restaurantDescription')
    const ratingElement = document.getElementById('restaurantRating')
    const foodsElement = document.getElementById('restaurantFoods')
    const drinksElement = document.getElementById('restaurantDrinks')
    const reviewsElement = document.getElementById('restaurantReviews')
    const reviewFormElement = document.getElementById('reviewForm')

    // set element attribute value
    nameElement.innerHTML = restaurant.name

    pictureElement.setAttribute(
      'src',
      `${API_ENDPOINTS.RESTAURANT_IMAGE(restaurant.pictureId)}`
    )
    pictureElement.setAttribute('alt', `${restaurant.name}`)

    addressElement.innerHTML = restaurant.address

    cityElement.innerHTML = restaurant.city

    ratingElement.innerHTML = `⭐️ ${restaurant.rating}`

    descriptionElement.innerHTML = restaurant.description

    restaurant.menus.foods.forEach((food) => {
      const foodElement = document.createElement('li')
      foodElement.innerHTML = food.name
      foodsElement.appendChild(foodElement)
    })

    restaurant.menus.drinks.forEach((drink) => {
      const drinkElement = document.createElement('li')
      drinkElement.innerHTML = drink.name
      drinksElement.appendChild(drinkElement)
    })

    ReviewInitiator.init({
      restaurantId: restaurant.id,
      reviewContainer: reviewsElement,
      initialReviews: restaurant.customerReviews,
      reviewForm: reviewFormElement
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description
      }
    })
  }

}

export default DetailPage

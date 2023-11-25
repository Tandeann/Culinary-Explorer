/* eslint-disable accessor-pairs */
import './restaurant-card'

class RestaurantList extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  // connectedCallback () {
  //   this.render()
  // }

  renderError (message) {
    this.innerHTML = `
    <style> 
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    <h2 class="placeholder">${message}</h2>
    `
  }

  render () {
    this.innerHTML = '<div class="card-container"></div>'
    const cardContainer = this.querySelector('.card-container')

    if (this._restaurants && this._restaurants.length > 0) {
      this._restaurants.forEach((restaurant) => {
        const restaurantCardElement = document.createElement('restaurant-card')
        restaurantCardElement.restaurant = restaurant
        cardContainer.appendChild(restaurantCardElement)
      })
    } else {
      this.renderError('No restaurants found')
    }
  }
}

customElements.define('restaurant-list', RestaurantList)

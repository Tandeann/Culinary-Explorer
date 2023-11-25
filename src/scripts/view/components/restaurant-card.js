import API_CONFIG from '../../config/api-config'
class RestaurantCard extends HTMLElement {
  constructor () {
    super()
    this._restaurant = {}
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurant
  }

  render () {
    this.innerHTML = `
    <a id="restaurantItemAnchor" href="#">
        <div class="restaurant-card">
        <div class="header">
           <img class="image" src="${API_CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
           <div class="city">${this._restaurant.city}</div>
           </div>
             <div class="name">${this._restaurant.name}</div>
             <div class="rating">Rating: ${this._restaurant.rating}</div>
            <div class="description">${this._restaurant.description}</div>
        </div>
      </a>
    `
  }
}

customElements.define('restaurant-card', RestaurantCard)

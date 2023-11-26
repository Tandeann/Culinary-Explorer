import FavoriteRestaurantIdb from '../data/favorite-idb'
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate
} from '../view/template/template-creator'

class LikeButtonInitiator {
  static _likeButtonContainer = null

  static _restaurant = null

  static async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  }

  static async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  }

  static async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  }

  static _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  }

  static _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator

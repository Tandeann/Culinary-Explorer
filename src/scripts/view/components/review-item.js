/* eslint-disable accessor-pairs */
class ReviewItem extends HTMLElement {
  #review = null

  set review (value) {
    this.#review = value
    this.render()
  }

  render () {
    this.innerHTML = `
    <h5 id="customerReviewHeader" class="skeleton-loader"></h5>
    <p id="customerReviewContent" class="skeleton-loader"></p>
    `
    this.className = 'restaurant-review'

    // get element
    const headerElement = this.querySelector('#customerReviewHeader')
    const contentElement = this.querySelector('#customerReviewContent')

    // set attribute value
    headerElement.innerHTML = `${this.#review.name} @${this.#review.date}`
    contentElement.innerHTML = this.#review.review
  }
}

customElements.define('review-item', ReviewItem)

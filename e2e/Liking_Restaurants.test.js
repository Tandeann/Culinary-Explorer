/* global Feature, Before, Scenario, locate */
/* eslint no-undef: "error" */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('restaurant-list')

  I.see('No restaurants found', '.placeholder')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurants found', '.placeholder')

  I.amOnPage('/')

  I.seeElement('restaurant-card')
  const firstRestaurant = locate('restaurant-card').first()
  const firstRestaurantTittle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('restaurant-list')
  const likedRestaurantTitle = await I.grabTextFrom('restaurant-card')

  assert.strictEqual(firstRestaurantTittle, likedRestaurantTitle)
})

// Scenario('unliking one restaurant', async ({ I }) => {
//   I.amOnPage('/')

//   I.seeElement('restaurant-card')

//   const firstRestaurant = locate('restaurant-card').first()
//   I.click(firstRestaurant)

//   const RestaurantTittle = await I.grabTextFrom('')

//   I.seeElement('#likeButton')
//   I.click('#likeButton')

//   I.amOnPage('/#/favorite')
//   I.seeElement('restaurant-list')

//   I.click(locate('restaurant-card').first())

//   const likedRestaurantName = await I.grabTextFrom('#restaurantName')

//   assert.strictEqual(restaurantName, likedRestaurantName)

//   I.seeElement('#favoriteButton')
//   I.click('#favoriteButton')

//   I.amOnPage('/#/favorite')
//   I.see('Restaurant not found', '#restaurantListNotFound')
// })

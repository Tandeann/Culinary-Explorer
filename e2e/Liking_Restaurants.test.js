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

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('restaurant-card')
  const firstRestaurant = locate('restaurant-card').first()
  await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.wait(2)
  I.seeElement('restaurant-card')
  const firstRestaurantOnFavoritePage = locate('restaurant-card').first()
  await I.grabTextFrom(firstRestaurantOnFavoritePage)
  I.click(firstRestaurantOnFavoritePage)

  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(2)
  I.amOnPage('/#/favorite')
  I.wait(2)

  I.seeElement('restaurant-list')

  I.see('No restaurants found', '.placeholder')
})

Scenario('go to page about us', ({ I }) => {
  I.amOnPage('/')
  I.seeElement('.menu')
  I.wait(5)
  I.seeElement('.nav')
  I.click(locate('.nav').last())
  I.wait(5)
  I.amOnPage('https://github.com/Tandeann')
})

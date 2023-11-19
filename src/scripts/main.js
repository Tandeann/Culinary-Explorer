import fetchData from "../public/data/data-source.js";
import "./restaurant-list.js";
import "./app-bar.js";

const main = async () => {
  try {
    const restaurants = await fetchData();
    const RestaurantListElement = document.querySelector("restaurant-list");
    RestaurantListElement.restaurants = restaurants;
    
  } catch (error) {
    console.error('Error:', error);
  }

  const hamburgerButtonElement = document.querySelector('#humbergerButton');
  const navigationDrawerElement = document.querySelector('#navigationDrawer');
  const bodyElement = document.querySelector('body');
  const skipElement = document.querySelector('#skip-link');

  hamburgerButtonElement.addEventListener('click', event => {
    navigationDrawerElement.classList.toggle('open');
    event.stopPropagation();
  })

  bodyElement.addEventListener('click', event => {
    navigationDrawerElement.classList.remove('open');
  })

  skipElement.addEventListener('click', event =>{
    document.querySelector('main').focus();
  })

};
export default main;

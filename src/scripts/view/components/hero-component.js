class HeroComponent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="hero-component">
            <h1>Culinary Explorer</h1>  
            <p>"Discover Culinary Wonders: Your Journey to Tantalizing Tastes Begins Here!"</p>
            <picture>
            <source media="(max-width: 600px)" srcset="./images/heros/hero_image_4-small.jpg">
            <img src="./images/heros/hero_image_4-large.jpg" alt="Hero Image">
            </picture>
            
        </div>
          `
    this.querySelector('.hero-component').className = 'hero-component'
  }
}

customElements.define('hero-component', HeroComponent)

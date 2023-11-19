class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-component">
            <h1>Culinary Explorer</h1>  
            <p>"Discover Culinary Wonders: Your Journey to Tantalizing Tastes Begins Here!"</p>
            <img src="./images/heros/hero-image_4.jpg" alt="Hero Image">
            
        </div>
          `;
    this.querySelector(".hero-component").className = "hero-component";
  }
}

customElements.define("hero-component", HeroComponent);

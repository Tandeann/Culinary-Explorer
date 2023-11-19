class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='app-bar'>
      <h2 tabindex="0"> <img src="./images/heros/logo.png" alt="Logo"> CulinaryExplorer</h2>
      <div class='humberger'>
        <button id='humbergerButton' tabindex="0">☰</button>
      </div>
      <nav id='navigationDrawer' class="menu">
        <ul>
            <li><a href="/" tabindex="0">Home</a></li>
            <li><a href="#" tabindex="0">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/yoga-tandean/" tabindex="0">About Us</a></li>
        </ul>
      </nav>
    </div>
    `;
    this.querySelector(".app-bar").classsName = "app-bar";
  }
}

customElements.define("app-bar", AppBar);

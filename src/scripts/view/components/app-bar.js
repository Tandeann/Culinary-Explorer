class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class='app-bar'>
      <h2 tabindex="0"> <img src="./images/logo.png" alt="Logo"> CulinaryExplorer</h2>
      <div class='humberger'>
        <button id='humbergerButton' aria-label='Menu' tabindex="0">☰</button>
      </div>
      <nav id='navigationDrawer' class="menu">
        <ul>
            <li><a href="/" tabindex="0">Home</a></li>
            <li><a href="/favorite" tabindex="0">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/yoga-tandean/" tabindex="0">About Us</a></li>
        </ul>
      </nav>
    </div>
    `
    this.querySelector('.app-bar').className = 'app-bar'
  }
}

customElements.define('app-bar', AppBar)

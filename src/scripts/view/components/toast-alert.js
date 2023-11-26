/* eslint-disable accessor-pairs */
import '../../../styles/toast-alert.scss'
import closeIcon from '../../../public/icons/close.svg'

class ToastAlert extends HTMLElement {
  #message = null

  set message (value) {
    this.#message = value
    this.render()
  }

  render () {
    this.innerHTML = `
    <p id="toastMessage" class="toast__message"></p>
    <button id="toastButton" type="button" class="toast__button"></button>
    `
    this.className = 'toast'

    const messageElement = this.querySelector('#toastMessage')
    const buttonElement = this.querySelector('#toastButton')

    messageElement.innerHTML = this.#message
    buttonElement.innerHTML = closeIcon

    buttonElement.addEventListener('click', () => this.classList.add('close'))
  }
}

customElements.define('toast-alert', ToastAlert)

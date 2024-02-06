class MyContainer extends HTMLElement {
    connectedCallback() {
      fetch('/side-buttons.html')
        .then(response => response.text())
        .then(html => this.innerHTML = html);
    }
  }
  customElements.define('side-buttons', MyContainer);
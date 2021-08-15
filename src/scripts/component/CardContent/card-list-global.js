import './card-item';

class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards.Countries;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._cards.forEach((card) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.card = card;
      this.appendChild(cardItemElement);
    });
  }
}

customElements.define('card-list', CardList);

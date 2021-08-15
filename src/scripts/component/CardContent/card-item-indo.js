class CardItemIndo extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card CardContent">
                                        <h4>${this._card.provinsi}</h4>
                                        <div class="row">
                                            <div class="col-7">
                                                <p>Total Positif</p>
                                                <p>Total Kematian</p>
                                                <p>Total Sembuh</p>
                                            </div>
                                            <div class="col-5">
                                                <p>${this._card.kasusPosi}</p>
                                                <p>${this._card.kasusMeni}</p>
                                                <p>${this._card.kasusSemb}</p>
                                            </div>
                                        </div>  
                                    </div>
        `;
  }
}

customElements.define('card-item-indo', CardItemIndo);

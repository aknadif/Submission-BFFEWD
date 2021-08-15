class CardItem extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card CardContent">
                                        <h4>${this._card.Country}</h4>
                                        <div class="row">
                                            <div class="col-7">
                                                <p>Positif Baru</p>
                                                <p>Total Positif</p>
                                                <p>Kematian Baru</p>
                                                <p>Total Kematian</p>
                                                <p>Recovered Baru</p>
                                                <p>Total Recovered</p>
                                            </div>
                                            <div class="col-5">
                                                <p>${this._card.NewConfirmed}</p>
                                                <p>${this._card.TotalConfirmed}</p>
                                                <p>${this._card.NewDeaths}</p>
                                                <p>${this._card.TotalDeaths}</p>
                                                <p>${this._card.NewRecovered}</p>
                                                <p>${this._card.TotalRecovered}</p>
                                            </div>
                                        </div>  
                                    </div>
        `;
  }
}

customElements.define('card-item', CardItem);

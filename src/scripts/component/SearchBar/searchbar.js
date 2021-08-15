class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-8">
                <div class="search"><input type="text" class="form-control" placeholder="Masukkan nama negara" id="searchElement" type="search"> <button class="btn btn-primary" id="searchButtonElement" type="submit">Search</button> </div>
            </div>
        </div>
        </div>`;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}
customElements.define('search-bar', SearchBar);

import './component/CardContent/card-list-indo';
import './component/SearchBar/searchbar';

const axios = require('axios');

function cardindo() {
  // const searchElement = document.querySelector('search-bar');
  const cardIndoElement = document.querySelector('card-list-indo');

  const renderCardGlobal = (results) => {
    cardIndoElement.cards = results;
  };

  // const onButtonSearchClicked = () => {
  //   renderCardGlobal(searchElement.value);
  // };

  axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/')
    .then((result) => result.data)
    .then((resultDataCardIndo) => {
      renderCardGlobal(resultDataCardIndo);
    });
  // searchElement.clickEvent = onButtonSearchClicked;
}

export default cardindo;

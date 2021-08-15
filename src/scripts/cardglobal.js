import './component/CardContent/card-list-global';
import './component/SearchBar/searchbar';

const axios = require('axios');

function cardglobal() {
  // const searchElement = document.querySelector('search-bar');
  const cardGlobalElement = document.querySelector('card-list');

  const renderCardGlobal = (results) => {
    cardGlobalElement.cards = results;
  };

  // const onButtonSearchClicked = () => {
  //   renderCardGlobal(searchElement.value);
  // };

  axios.get('https://api.covid19api.com/summary')
    .then((result) => result.data)
    .then((resultDataCardGlobal) => {
      renderCardGlobal(resultDataCardGlobal);
    });
  // searchElement.clickEvent = onButtonSearchClicked;
}

export default cardglobal;

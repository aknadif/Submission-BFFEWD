const axios = require('axios');

function global() {
  const renderDataGlobal = (dataGlobal) => {
    const dataGlobalElement = document.querySelector('#data-global');
    dataGlobalElement.innerHTML = '';
    dataGlobalElement.innerHTML += `
            <div class="row justify-content-center">
            <div class="card card-global">
                <div class="card-body">
                    <h3 class="text-center mt-2">Positif</h3>
                    <h1 class="text-center mt-4">${dataGlobal.Global.TotalConfirmed}</h1>
                </div>
            </div>
            </div>
            <div class="row justify-content-around">
                            <div class="card card-global">
                                <div class="card-body">
                                    <h3 class="text-center mt-2">Meninggal</h3>
                                    <h1 class="text-center mt-4">${dataGlobal.Global.TotalDeaths}</h1>
                                </div>
                            </div>
                            <div class="card card-global">
                                <div class="card-body">
                                    <h3 class="text-center mt-2">Recovered</h3>
                                    <h1 class="text-center mt-4">${dataGlobal.Global.TotalRecovered}</h1>
                                </div>
                            </div>
                        </div>
            `;
  };

  axios.get('https://api.covid19api.com/summary')
    .then((result) => result.data)
    .then((resultDataGlobal) => {
      renderDataGlobal(resultDataGlobal);
    });
}

export default global;

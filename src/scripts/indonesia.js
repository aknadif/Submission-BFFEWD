const axios = require('axios');

function indonesia() {
  const renderDataIndonesia = (dataIndonesia) => {
    const dataIndonesiaElement = document.querySelector('#data-indonesia');
    dataIndonesiaElement.innerHTML = '';
    dataIndonesiaElement.innerHTML += `
            <div class="row justify-content-center">
            <div class="card card-global">
                <div class="card-body">
                    <h3 class="text-center mt-2">Positif</h3>
                    <h1 class="text-center mt-4">${dataIndonesia.positif}</h1>
                </div>
            </div>
            </div>
            <div class="row justify-content-around">
                            <div class="card card-global">
                                <div class="card-body">
                                    <h3 class="text-center mt-2">Meninggal</h3>
                                    <h1 class="text-center mt-4">${dataIndonesia.meninggal}</h1>
                                </div>
                            </div>
                            <div class="card card-global">
                                <div class="card-body">
                                    <h3 class="text-center mt-2">Sembuh</h3>
                                    <h1 class="text-center mt-4">${dataIndonesia.sembuh}</h1>
                                </div>
                            </div>
                        </div>
            `;
  };

  axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
    .then((result) => result.data)
    .then((resultDataIndonesia) => {
      renderDataIndonesia(resultDataIndonesia);
    });
}

export default indonesia;

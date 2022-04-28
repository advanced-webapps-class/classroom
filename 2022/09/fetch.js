function getFetch(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

const url =
  'https://sports.daum.net/prx/hermes/api/game/list.json?page=1&filter=importance&date=20220428&pageSize=50&detail=true&leagueCode=KL%2CKL2%2CKL_RELEGATION%2CKFA%2CAFCCL%2CEPL%2CBUNDESLIGA%2CPRIMERA%2CSERIEA%2CLIGUE1%2CUEFACL%2CUEFACUP%2CEPL_CUP%2CFACUP%2CCOPADELREY%2CKBO%2CMLB%2CNBA%2CKBL%2CWKBL%2CVL%2CVL_CUP%2CWVL%2CWVL_CUP%2CKLPGA%2CKPGA%2CLPGA%2CPGA%2CLCK';

getFetch(url, (data) => console.log(data));

// const data = fetch('data.json');
// console.log(data.json);

// fetch('data.json')
//   .then(function (response) {
//     console.log(response);
//     // response.header().then(function (data) {
//     //   console.log('headers data:', data);
//     // });
//     response.json().then(function (data) {
//       console.log('json data:', data);
//     });
//   })
//   .catch(function (err) {
//     console.log('Fetch Error :-S', err);
//   });

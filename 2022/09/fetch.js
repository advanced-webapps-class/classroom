function getFetch(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

getFetch('data.json', (data) => console.log(data));

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

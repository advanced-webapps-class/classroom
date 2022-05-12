const url = `https://dapi.kakao.com/v2/search/web?query=#query`;
const $docs = document.querySelector('#docs');
const $query = document.querySelector('#query');
const $searchButton = document.querySelector('#searchButton');

function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

function search() {
  const query = $query.value;
  const searchUrl = url.replace('#query', query);
  // url = url.replace('#query', query);

  getFetch(searchUrl, (data) => {
    const { documents } = data;
    // const documents = data.documents;
    console.log(documents);

    const docs = documents.map((document) => {
      // console.log(document);
      return document.contents;
    });

    // console.log(docs);
    $docs.innerHTML = docs.join('<hr>');
  });
}

$searchButton.addEventListener('click', search);
$query.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  // console.log(event.keyCode);
  search();

  // if (event.key === 'Enter') {
  //   search();
  // }
});

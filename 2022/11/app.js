const url = `https://dapi.kakao.com/v2/search/web?query=이효리`;
const $docs = document.querySelector('#docs');

function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

getFetch(url, (data) => {
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

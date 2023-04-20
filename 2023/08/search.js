console.log('search.js');

const apiUrl = 'https://dapi.kakao.com/v2/search/web';
const KAKAO_API_KEY = 'ba1cad8a155c011d6a513d43a41178ad';

const options = {
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  },
};

const $searchForm = document.getElementById('searchForm');
const $searchInput = document.getElementById('searchInput');

let page = 1;

$searchForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submit');

  const query = $searchInput.value;
  const url = `${apiUrl}?query=${query}&size=10&page=${page}`;

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
});

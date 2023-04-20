console.log('search.js');

const apiUrl = 'https://dapi.kakao.com/v2/search/web';
const KAKAO_API_KEY = 'ba1cad8a155c011d6a513d43a41178ad';

const $searchForm = document.getElementById('searchForm');
const $searchInput = document.getElementById('searchInput');
const $items = document.getElementById('items');
const $moreBox = document.getElementById('moreBox');
const $moreButton = document.getElementById('moreButton');

let page = 1;

function fetchApi({ page, query, callback }) {
  // const query = $searchInput.value;
  const options = {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  };

  const size = 1;
  const url = `${apiUrl}?query=${query}&size=${size}&page=${page}`;

  console.log(query, size, page);

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      callback(json);
    });
}

function submitForm(event) {
  event.preventDefault();
  console.log('submit');

  const query = $searchInput.value;

  fetchApi({
    page: 1,
    query,
    callback: renderItems,
  });
}
function renderItems(data) {
  console.log(data);
  // data를 item dom으로 변환
  let result = [];
  for (let i = 0; i < data.documents.length; i++) {
    const { title, contents, datetime } = data.documents[i];

    const el = `
			<div class="columns is-multiline">
				<div class="column is-one-third">
					<div class="card">
						<div class="card-content">
							<p class="title">${title}</p>
							<p class="subtitle">${datetime}</p>
							<div class="content">${contents}</div>
						</div>
					</div>
				</div> 
			</div>`;

    result.push(el);
  }

  // $items에 innerHTML
  $items.innerHTML += result.join('');

  // TODO. meta.is_end가 true면 moreBox 숨기기
  // moreBox 보이기
  $moreBox.style.display = 'block';
}

function moreItems() {
  console.log('more');
  const query = $searchInput.value;

  fetchApi({
    page: ++page,
    query,
    callback: renderItems,
  });
}

function init() {
  $moreButton.addEventListener('click', moreItems);
  $searchForm.addEventListener('submit', submitForm);
}

init();

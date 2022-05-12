function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

const url = `https://dapi.kakao.com/v2/search/web?query=이효리`;

getFetch(url, (data) => console.log(data));

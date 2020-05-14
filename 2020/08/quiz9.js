const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function printLog(str) {
  $log.value = str;
}
function good(result) {
  result.text().then(printLog);
}
function bad(error) {
  printLog(error);
}

function fetchUrl() {
  const url = $url.value;
  printLog('');

  if (!url) {
    // eslint-disable-next-line no-alert
    window.alert('url를 입력하세요');
  } else {
    fetch(url).then(good).catch(bad);
  }
}
// $url에서 엔터를 칠경우 fetchUrl()
function checkSubmit(e) {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}

$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', checkSubmit);

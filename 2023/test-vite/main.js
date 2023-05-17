import JSAlert from 'js-alert';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>ssss!</h1>
    <div class="card">
      <button id="modal" type="button">모ㅁㅁㅁsss달입니다ㅁㅁㅁㅁ</button>
    </div>
  </div>
`;

const $modal = document.querySelector('#modal');
$modal.addEventListener('click', () => {
  JSAlert.alert('This is an alert.');
});

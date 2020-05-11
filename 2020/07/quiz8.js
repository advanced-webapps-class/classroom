const $box = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
  const min = parseInt($min.value, 10);
  const max = parseInt($max.value, 10);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  // console.log(min, max, randomNumber);

  if (Number.isNaN(randomNumber)) return;

  $btn.disabled = true;

  const count = randomNumber - 40;
  const timer = setInterval(() => {
    if (count === randomNumber) {
      clearInterval(timer);
      $btn.disabled = false;
    }
    $box.innerHTML = count + 1;
  }, 20);
});

const promise = fetch('./json.json');
console.log(promise);

promise.then((res) => {
  console.log('res:', res);
  const textPromise = res.json();
  console.log('textPromise:', textPromise);

  textPromise.then((data) => console.log('fetch():', data));
});

function callback(data) {
  console.log('callback:', data);
}

const $loading = document.getElementById('loading');

$loading.style.display = 'block';
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // const title = json.title;
    const { title } = json;

    // console.log(title);
    document.getElementById('title').innerHTML = title;
    $loading.style.display = 'none';
  });

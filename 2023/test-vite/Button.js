function Button({ text = '', onClick }) {
  const $btn = document.createElement('button');
  $btn.textContent = text;
  $btn.addEventListener('click', onClick);

  return $btn;
}

export default Button;

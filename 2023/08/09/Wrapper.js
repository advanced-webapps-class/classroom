function Wrapper({ text = 0, className = '' }) {
  const setText = text => {
    $wrapper.textContent = text;
  };

  const $wrapper = document.createElement('div');
  $wrapper.classList.add(className);
  $wrapper.textContent = text;

  return { $wrapper, setText };
}

export default Wrapper;

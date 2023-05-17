const modalClass = 'modal';
const modalBodyClass = 'modal-body';
const modalCloseClass = 'modal-close';
const modalContentClass = 'modal-content';

function closeModal() {
  const $modal = document.querySelector(`.${modalClass}`);
  $modal.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModal);
  $modal.remove();
}

function openModal({ text = '' }) {
  if (document.querySelector(`.${modalClass}`)) {
    return;
  }

  const $modal = document.createElement('div');
  $modal.classList.add(modalClass);

  const $modalBody = document.createElement('div');
  $modalBody.classList.add(modalBodyClass);

  const $modalClose = document.createElement('div');
  $modalClose.classList.add(modalCloseClass);
  $modalClose.innerText = 'X';
  $modalClose.addEventListener('click', closeModal);

  const $modalContent = document.createElement('div');
  $modalContent.classList.add(modalContentClass);
  $modalContent.innerText = text;

  $modalBody.appendChild($modalClose);
  $modalBody.appendChild($modalContent);

  $modal.appendChild($modalBody);

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalBodyStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalCloseStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  const modalContentStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  Object.assign($modal.style, modalStyle);
  Object.assign($modalBody.style, modalBodyStyle);
  Object.assign($modalClose.style, modalCloseStyle);
  Object.assign($modalContent.style, modalContentStyle);

  document.addEventListener('keydown', closeModal);
  $modal.addEventListener('click', closeModal);

  document.body.append($modal);
}

export { openModal };

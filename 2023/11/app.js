import { openModal } from './modal.js';

document.querySelectorAll('.btn').forEach($btn => {
  $btn.addEventListener('click', () => {
    openModal({
      text: $btn.dataset.text,
    });
  });
});

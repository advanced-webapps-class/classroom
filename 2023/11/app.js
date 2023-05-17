/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
// import { openModal } from './modal.js';

// eslint-disable-next-line import/no-unresolved
import JSAlert from './jsalert.min.js';

document.querySelectorAll('.btn').forEach($btn => {
  $btn.addEventListener('click', () => {
    JSAlert.alert('This is an alert.');
    // openModal({
    //   text: $btn.dataset.text,
    // });
  });
});

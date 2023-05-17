function openModal({ text = '' }) {
  // 이미 모달이 있으면 return
  if (document.querySelector('.modal')) {
    return;
  }

  const $modal = document.createElement('div');
  $modal.className = 'modal';
  $modal.innerHTML = `
		<div class="body">
			<div class="close">X</div>
			<div class="content">${text}</div>
		</div>`;

  // 모달 스타일 추가
  $modal.style.cssText = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.25);
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  // body style 추가
  $modal.querySelector('.body').style.cssText = `
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  // close style 추가
  $modal.querySelector('.close').style.cssText = `
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	`;

  // content style 추가
  $modal.querySelector('.content').style.cssText = `
		width: 300px;
		padding: 20px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  const removeModal = () => {
    $modal.remove();
  };

  // close 이벤트 추가
  $modal.querySelector('.close').addEventListener('click', removeModal);

  // body클릭시 닫히도록
  $modal.querySelector('.body').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      removeModal();
    }
  });
  // escape키 누르면 닫히도록
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      removeModal();
    }
  });

  document.body.append($modal);
}

export { openModal };

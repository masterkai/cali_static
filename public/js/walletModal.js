$(function () {
  const close = document.getElementById('walletCloseBtn')
  const open = document.getElementById('openWallet');
  const modal = document.getElementById('walletModal');
  const walletOverLay = document.querySelector('.wallet_overlay')

  // Show modal
  open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
  close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
  window.addEventListener('click', e =>
    // console.log(e.target)
    e.target === walletOverLay ? modal.classList.remove('show-modal') : false
  );
})
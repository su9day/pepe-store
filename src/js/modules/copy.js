const copyBtns = document.querySelectorAll('[data-copy-btn]');
copyBtns.forEach((item) => {
  item.addEventListener('click', function () {
    const btnBox = this.closest('div');
    const textToCopy = btnBox.querySelector('[data-wallet]').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Текст скопирован: ' + textToCopy);
  });
});

// event.key
// event.code
// event.keyCode
// log
const refs = {
  key: document.querySelector('#key'),
  code: document.querySelector('#code'),
  keyCode: document.querySelector('#keyCode'),
};


window.addEventListener('keydown', showStat);
function showStat(event) {
  refs.key.textContent = event.key;
  refs.code.textContent = event.code;
  refs.keyCode.textContent = event.keyCode;
}

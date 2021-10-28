function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// ===== tab navigation =====>
let tab = function () {
  let tabNav = document.querySelectorAll('.header__nav'),
      tabContent = document.querySelectorAll('.tab__item'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });
  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
  }
};
tab();

// ===== Javascript task =====>
const parseUrl=(string) =>  new URL(string)
const obj = parseUrl('https://ffwagency.com/do/any.php?a=1#foo');

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);
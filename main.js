import "./style.css";

document.querySelector("#app").innerHTML = /*html*/ `
<div>

<div class="windows">
	<div class="window window1">111</div>
	<div class="window window2">222</div>
	<div class="window window3">333</div>
</div>

<button class="btnLever">Pull Lever</button>
</div>
`;

const fruits = ['cherry', 'lemon', 'plum', 'apple', 'banana', 'grapes'];

const getRandomeFruit = () => {
	return fruits[0];
}

const btn = document.querySelector('.btnLever');
btn.addEventListener('click', (e) => {
	const window1Elem = document.querySelector('.window1');
	const window2Elem = document.querySelector('.window2');
	const window3Elem = document.querySelector('.window3');

	window1Elem.innerHTML = getRandomeFruit();
	window2Elem.innerHTML = getRandomeFruit();
	window3Elem.innerHTML = getRandomeFruit();

});

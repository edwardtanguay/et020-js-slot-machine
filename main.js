import "./style.css";

document.querySelector("#app").innerHTML = /*html*/ `
<div>

<div class="windows">
	<div class="window window1">---</div>
	<div class="window window2">---</div>
	<div class="window window3">---</div>
</div>

<button class="btnLever">Pull Lever</button>
</div>
`;

const fruits = ['cherry', 'lemon', 'plum', 'grapes', 'apple', 'banana', 'orange', 'watermelon', 'strawberry', 'mango', 'kiwi', 'pineapple', 'pear'];

const getRandomFruit = () => {
	const index = Math.floor(Math.random() * fruits.length);
	return fruits[index];
}

const btn = document.querySelector('.btnLever');
btn.addEventListener('click', (e) => {
	const window1Elem = document.querySelector('.window1');
	const window2Elem = document.querySelector('.window2');
	const window3Elem = document.querySelector('.window3');

	window1Elem.innerHTML = getRandomFruit();
	window2Elem.innerHTML = getRandomFruit();
	window3Elem.innerHTML = getRandomFruit();

});

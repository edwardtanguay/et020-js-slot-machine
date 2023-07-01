import "./style.css";

document.querySelector("#app").innerHTML = /*html*/ `
<div>

<div class="windows">
	<div class="window window1">111</div>
	<div class="window window2">222</div>
	<div class="window window3">333</div>
</div>

<button class="btnLever">Pull Level</button>
</div>
`;

const btn = document.querySelector('.btnLever');
btn.addEventListener('click', (e) => {
	const window1Elem = document.querySelector('.window1');


	window1Elem.innerHTML = 'nnn';

});

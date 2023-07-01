import "./style.css";

document.querySelector("#app").innerHTML = /*html*/ `
<div>

<div class="windows">
	<div class="window1">111</div>
	<div class="window2">222</div>
	<div class="window3">333</div>
</div>

<button class="btnLever">Pull Level</button>
</div>
`;

const btn = document.querySelector('.btnLever');
btn.addEventListener('click', (e) => {
	// const elemEmail = document.querySelector<HTMLInputElement>('.contactForm #email');
	// const elemAge = document.querySelector<HTMLInputElement>('.contactForm #age');


	alert('ok');
});

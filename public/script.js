/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable func-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable id-match */
let i = 0;
const box1 = document.getElementById('image1');
const box2 = document.getElementById('image2');
const box3 = document.getElementById('image3');
const box4 = document.getElementById('image4');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const info = document.getElementById('info');

a1.onclick = function () {
	box1.style.opacity = 1;
	box2.style.opacity = 0;
	box3.style.opacity = 0;
	box4.style.opacity = 0;
	info.innerHTML = 'Image 1';
	i = 0;
};
a2.onclick = function () {
	box1.style.opacity = 0;
	box2.style.opacity = 1;
	box3.style.opacity = 0;
	box4.style.opacity = 0;
	info.innerHTML = 'Image 2';
	i = 1;
};
a3.onclick = function () {
	box1.style.opacity = 0;
	box2.style.opacity = 0;
	box3.style.opacity = 1;
	box4.style.opacity = 0;
	info.innerHTML = 'Image 3';
	i = 2;
};
a4.onclick = function () {
	box1.style.opacity = 0;
	box2.style.opacity = 0;
	box3.style.opacity = 0;
	box4.style.opacity = 1;
	info.innerHTML = 'Image 4';
	i = 3;
};
document.addEventListener('keydown', (e) => {
	if(e.keyCode == 37)
		right();
});
document.addEventListener('keydown', (e) => {
	if(e.keyCode == 39)
		right();
});
function right () {
	if(i == 0) {
		box1.style.opacity = 1;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 1';
		i++;
	}
	else if(i == 1) {
		box1.style.opacity = 0;
		box2.style.opacity = 1;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 2';
		i++;
	}
	else if(i == 2) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 1;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 3';
		i++;
	}
	else if(i == 3) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 1;
		info.innerHTML = 'Image 4';
		i = 0;
	}
}
function left () {
	if(i == 0) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 1;
		info.innerHTML = 'Image 1';
		i++;
	}
	else if(i == 1) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 1;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 2';
		i++;
	}
	else if(i == 2) {
		box1.style.opacity = 0;
		box2.style.opacity = 1;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 3';
		i++;
	}
	else if(i == 3) {
		box1.style.opacity = 1;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		info.innerHTML = 'Image 4';
		i = 0;
	}
}

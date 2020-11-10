const container = document.querySelector('.container');
const card = document.querySelector('.card');
const print = document.querySelector('.print img');
const circle = document.querySelector('.circle');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

// Animation movement
container.addEventListener('mousemove', (e) => {
	const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	const yAxis = -(window.innerHeight / 2 - e.pageY) / 55;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener('mouseenter', (e) => {
	card.style.transition = 'none';
	title.style.transform = 'translateZ(50px)';
	description.style.transform = 'translateZ(45px)';
	circle.style.transform = 'translateZ(30px)';
	print.style.transform = 'translateZ(75px)';
	sizes.style.transform = 'translateZ(50px)';
	purchase.style.transform = 'translateZ(75px)';
});

// Animate out
container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	title.style.transform = 'translateZ(0px)';
	description.style.transform = 'translateZ(0px)';
	circle.style.transform = 'translateZ(0px)';
	print.style.transform = 'translateZ(0px)';
	sizes.style.transform = 'translateZ(0px)';
	purchase.style.transform = 'translateZ(0px)';
});

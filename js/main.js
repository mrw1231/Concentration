const backOfCardImg = 'https://i.imgur.com/nIaRaqU.jpg';
const pairs = [{
	id: '1',
	imgSrc: 'https://i.imgur.com/VQdiS1A.jpg'
}, {
	id: '2',
	imgSrc: 'https://i.imgur.com/kjdVOkQ.jpg'
}, {
	id: '3',
	imgSrc: 'https://i.imgur.com/Itzc28J.jpg'
}, {
	id: '4',
	imgSrc: 'https://i.imgur.com/LMi5lvz.jpg'
}, {
	id: '5',
	imgSrc: 'https://i.imgur.com/bRevGcV.jpg'
}, {
	id: '6',
	imgSrc: 'https://i.imgur.com/gIpSYxm.jpg'
}, {
	id: '7',
	imgSrc: 'https://i.imgur.com/gwxfnaQ.jpg'
}, {
	id: '8',
	imgSrc: 'https://i.imgur.com/wkuClM8.jpg'
}, {
	id: '1',
	imgSrc: 'https://i.imgur.com/VQdiS1A.jpg'
}, {
	id: '2',
	imgSrc: 'https://i.imgur.com/kjdVOkQ.jpg'
}, {
	id: '3',
	imgSrc: 'https://i.imgur.com/Itzc28J.jpg'
}, {
	id: '4',
	imgSrc: 'https://i.imgur.com/LMi5lvz.jpg'
}, {
	id: '5',
	imgSrc: 'https://i.imgur.com/bRevGcV.jpg'
}, {
	id: '6',
	imgSrc: 'https://i.imgur.com/gIpSYxm.jpg'
}, {
	id: '7',
	imgSrc: 'https://i.imgur.com/gwxfnaQ.jpg'
}, {
	id: '8',
	imgSrc: 'https://i.imgur.com/wkuClM8.jpg'
}, ]
let firstCard, secondCard, lockBoard, hasFlippedCard;
const section = document.querySelector('section');
document.querySelector('button').addEventListener('click', reset);
init();

function init() {
	hasFlippedCard = false;
	lockBoard = false;
	firstCard = '';
	secondCard = '';
	shuffle(pairs);
	pairs.forEach(function(pair, idx) {
		const memoryCard = document.createElement('div');
		const front = document.createElement('img');
		const back = document.createElement('img');
		memoryCard.classList = 'memory-card';
		front.classList = 'front';
		back.classList = 'back';
		front.src = pairs[idx].imgSrc;
		back.src = backOfCardImg;
		memoryCard.setAttribute('data-framework', pair.id);
		section.appendChild(memoryCard);
		memoryCard.appendChild(front);
		memoryCard.appendChild(back);
		memoryCard.addEventListener('click', flipCard);
	});
}

function shuffle(value) {
	let index = value.length,
		randomIndex;
	while (index != 0) {
		randomIndex = Math.floor(Math.random() * index);
		index--;
		[value[index], value[randomIndex]] = [
			value[randomIndex], value[index]
		];
	}
	return value;
};

function flipCard() {
	if (lockBoard) {
		return;
	}
	if (this === firstCard) {
		return;
	}
	this.classList.toggle('flip');
	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
	} else {
		hasFlippedCard = false;
		secondCard = this;
		checkMatch();
	}
}

function checkMatch() {
	if (firstCard.dataset.framework === secondCard.dataset.framework) {
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);
	} else {
		lockBoard = true;
		setTimeout(function() {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			lockBoard = false;
		}, 1000);
	}
}

function reset(evt) {
	let goAway = document.querySelectorAll('div');
	goAway.forEach(function(away) {
		away.remove();
	})
	init();
}
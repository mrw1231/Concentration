
/*----- constants -----*/
const backOfCardImg = 'https://i.imgur.com/nIaRaqU.jpg';

const pairs = [
    { id: '1', imgSrc: "https://i.imgur.com/tSdaDmw.png"},
    { id: '2', imgSrc: "https://i.imgur.com/OQSe65W.png"},
    { id: '3', imgSrc: "https://i.imgur.com/nNIIpJX.png"},
    { id: '4', imgSrc: "https://i.imgur.com/w4JvUkg.png"},
    { id: '5', imgSrc: "https://i.imgur.com/MuZakHJ.png"},
    { id: '6', imgSrc: "https://i.imgur.com/1CJTKn1.png"},
    { id: '7', imgSrc: "https://i.imgur.com/wRHmbh7.png"},
    { id: '8', imgSrc: "https://i.imgur.com/W8fgJ5r.png"},
    { id: '1', imgSrc: "https://i.imgur.com/tSdaDmw.png"},
    { id: '2', imgSrc: "https://i.imgur.com/OQSe65W.png"},
    { id: '3', imgSrc: "https://i.imgur.com/nNIIpJX.png"},
    { id: '4', imgSrc: "https://i.imgur.com/w4JvUkg.png"},
    { id: '5', imgSrc: "https://i.imgur.com/MuZakHJ.png"},
    { id: '6', imgSrc: "https://i.imgur.com/1CJTKn1.png"},
    { id: '7', imgSrc: "https://i.imgur.com/wRHmbh7.png"},
    { id: '8', imgSrc: "https://i.imgur.com/W8fgJ5r.png"},
]

/*----- app's state (variables) -----*/
let firstCard, secondCard, lockBoard, hasFlippedCard;


/*----- cached element references -----*/
// const cards = document.querySelectorAll('.memory-card');

const section = document.querySelector('section');

/*----- event listeners -----*/
// cards.forEach(function(card) {
//   card.addEventListener('click', flipCard);
//   console.log('hello');
// });

// document.querySelector('button').addEventListener('click', reset);


/*----- functions -----*/
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
    let index = value.length,  randomIndex;
    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [value[index], value[randomIndex]] = [
            value[randomIndex], value[index]];
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
    checkForMatch();
  }
}

function checkForMatch() {
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



//111111111111111111111111111111111111111111111



// /*----- constants -----*/
// const backOfCardImg = 'https://i.imgur.com/nIaRaqU.jpg';

// const pairs = [
//     { id: '1', imgSrc: "https://i.imgur.com/tSdaDmw.png"},
//     { id: '2', imgSrc: "https://i.imgur.com/OQSe65W.png"},
//     { id: '3', imgSrc: "https://i.imgur.com/nNIIpJX.png"},
//     { id: '4', imgSrc: "https://i.imgur.com/w4JvUkg.png"},
//     { id: '5', imgSrc: "https://i.imgur.com/MuZakHJ.png"},
//     { id: '6', imgSrc: "https://i.imgur.com/1CJTKn1.png"},
//     { id: '7', imgSrc: "https://i.imgur.com/wRHmbh7.png"},
//     { id: '8', imgSrc: "https://i.imgur.com/W8fgJ5r.png"},
//     { id: '1', imgSrc: "https://i.imgur.com/tSdaDmw.png"},
//     { id: '2', imgSrc: "https://i.imgur.com/OQSe65W.png"},
//     { id: '3', imgSrc: "https://i.imgur.com/nNIIpJX.png"},
//     { id: '4', imgSrc: "https://i.imgur.com/w4JvUkg.png"},
//     { id: '5', imgSrc: "https://i.imgur.com/MuZakHJ.png"},
//     { id: '6', imgSrc: "https://i.imgur.com/1CJTKn1.png"},
//     { id: '7', imgSrc: "https://i.imgur.com/wRHmbh7.png"},
//     { id: '8', imgSrc: "https://i.imgur.com/W8fgJ5r.png"},
// ]

// /*----- app's state (variables) -----*/
// let flippedCard;

// /*----- cached element references -----*/
// const section = document.querySelector('section');

// // const section = document.querySelector('section');

// /*----- event listeners -----*/

// /*----- functions -----*/
// init();

// function init() {
//     flippedCard = [];
//     shuffle(pairs);
//     pairs.forEach(function(pair, idx) {
//         const card = document.createElement('div');
//         const front = document.createElement('img');
//         const back = document.createElement('img');
//         card.classList = 'card';
//         front.classList = 'front';
//         back.classList = 'back';
//         front.src = pairs[idx].imgSrc;
//         back.src = backOfCardImg;
//         card.setAttribute('name', pair.id);
//         section.appendChild(card);
//         card.appendChild(front);
//         card.appendChild(back);
//         function handleClick(evt) {
//             card.classList.toggle('toggleCard');
//             flippedCard.push(evt.target);
//             console.log(flippedCard)
//             render();
//         };
//         card.addEventListener('click', handleClick);
//     });
// };

// function render() {
//     if (flippedCard.length === 2) {
//         if (flippedCard[0] === flippedCard[1]) {
//             console.log('win');
//         } else {
//             console.log('wrong');
//         }
//     }
// }

// function shuffle(value) {
//     let index = value.length,  randomIndex;
//     while (index != 0) {
//         randomIndex = Math.floor(Math.random() * index);
//         index--;
//         [value[index], value[randomIndex]] = [
//             value[randomIndex], value[index]];
//         }
//         return value;
// };

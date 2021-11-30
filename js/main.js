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


/*----- cached element references -----*/
const section = document.querySelector('section');

// const section = document.querySelector('section');

/*----- event listeners -----*/

/*----- functions -----*/
init();

function init() {
    shuffle(pairs);
    pairs.forEach(function(pair, idx) {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('img');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        front.src = pairs[idx].imgSrc;
        back.src = backOfCardImg;
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        function toggle() {
            card.classList.toggle('toggleCard');
        };
        card.addEventListener('click', toggle);
    });
};

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


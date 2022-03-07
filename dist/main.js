// const levelArr = [
//     {
//         level: 1,

//     }
// ]


const cardArrL1 = [
    {
        name: 'fries',
        img: 'dist/images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'dist/images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'dist/images/hotdog.png'
    },

    {
        name: 'fries',
        img: 'dist/images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'dist/images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'dist/images/hotdog.png'
    },      
]

const cardArrL2 = [
    {
        name: 'fries',
        img: 'dist/images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'dist/images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'dist/images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'dist/images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'dist/images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'dist/images/pizza.png'
    },

    {
        name: 'fries',
        img: 'dist/images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'dist/images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'dist/images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'dist/images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'dist/images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'dist/images/pizza.png'
    }

    
]

// cardArrL1.sort(() => 0.5 - Math.random());

const gridDisply = document.querySelector('#grid');
const result = document.querySelector('#result');
let cardChosen = [];
let cardsChosenIds = [];
let cardsWon = [];


function createBoard(lvl){
lvl.sort(() => 0.5 - Math.random());

    for(let i = 0; i < lvl.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'dist/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisply.append(card)
    }
}

// createBoard();

function checkMatch(lvl){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionOTwoId = cardsChosenIds[1];

    if(optionOneId == optionOTwoId){
        cards[optionOneId].setAttribute('src' , 'dist/images/blank.png');
        cards[optionOTwoId].setAttribute('src' , 'dist/images/blank.png');
        alert('You have clicked the same image!');
    }
    else if(cardChosen[0] == cardChosen[1]){
        alert('You got a match!')
        cards[optionOneId].setAttribute('src' , 'dist/images/white.png');
        cards[optionOTwoId].setAttribute('src' , 'dist/images/white.png');
        cards[optionOneId].removeEventListener('click' , flipCard);
        cards[optionOTwoId].removeEventListener('click' , flipCard);
        cardsWon.push(cardChosen);
    }
    else{
        cards[optionOneId].setAttribute('src' , 'dist/images/blank.png');
        cards[optionOTwoId].setAttribute('src' , 'dist/images/blank.png');
        alert('Sorry, try again!')
    }
    
    result.textContent = cardsWon.length;
    cardChosen = [];
    cardsChosenIds = []

    if(cardsWon.length == lvl.length/2){
        result.innerHTML += ' Congrats you found them all!'
    }

}

function flipCard(){
    const lvlSel = eval(gridDisply.className);
    const cardId = this.getAttribute('data-id');
    lvlSel[cardId].name;
    cardChosen.push(lvlSel[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', lvlSel[cardId].img);
    

    if(cardChosen.length === 2){
        setTimeout(() => {
            checkMatch(lvlSel)
        }, 200);
    }
}

const levelsCont = document.querySelector('#levels');

function appendLevels(){
    for(let i = 0; i < 2; i++){
        const levelBtn = document.createElement('button');
        levelBtn.textContent = `Level ${i+1}`;
        levelBtn.setAttribute('id', `lvl-${i+1}`)
        levelBtn.addEventListener('click', levelSelect);
        levelsCont.append(levelBtn);
    }
}

appendLevels()

function levelSelect(level){
    // alert(this.id.slice(-1));
    let levelClicked = eval(`cardArrL${this.id.slice(-1)}`);
    console.log(levelClicked);
    gridDisply.innerHTML = '';
    gridDisply.className = '';
    gridDisply.classList.add(`cardArrL${this.id.slice(-1)}`);
    createBoard(levelClicked);

}

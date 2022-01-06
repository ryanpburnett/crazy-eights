// make deck
const suit = ["Spades", "Clubs", "Diamonds", "Hearts"];
const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let deck = [];

const makeDeck = () => {
    for (i = 0; i < suit.length; i++) {
        for (j = 0; j < rank.length; j++) {
            deck.push(`${rank[j]} of ${suit[i]}`);
        }
    }
}
makeDeck();

// shuffle deck, Fischer-Yates shuffle
let index = deck.length, jindex, temp;

while(index > 0, index--) {
    jindex = Math.floor(Math.random() * (index + 1));
    temp = deck[jindex];
    deck[jindex] = deck[index];
    deck[index] = temp;
}

// deal cards
let p1 = [];
let p2 = [];

for (i = 0; i < 5; i++) {
    p1.push(deck.pop());
    p2.push(deck.pop());
}

// game
let discard = [];
let topCard;

const playGame = () => {
    const newCard = () => {
        if (deck.length > 0) {
            discard.push(topCard);
            topCard = deck.pop()
        }else{
            deck.push(discard);
        }
    }
    newCard();
}
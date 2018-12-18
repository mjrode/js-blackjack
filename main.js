let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
  'Three', 'Two', 'One'];







function displayCard(card){
  return `${card.value} of ${card.suit}`
}

function createDeck(){
  let deck = [];
  for (let suitIdx=0; suitIdx<suits.length; suitIdx++){
    for(let valueIdx=0;valueIdx<values.length; valueIdx++){
      let card = {value: values[valueIdx] , suit: suits[suitIdx]}
      deck.push(card);
    }
  }
  return deck;
}

let deck = createDeck();

function getNextCard() {
  let card = deck.shift();
  return displayCard(card);
}

let playerCards = [getNextCard(), getNextCard()];

console.log(playerCards);

let result = Math.random() * 52;
result = Math.trunc(result);

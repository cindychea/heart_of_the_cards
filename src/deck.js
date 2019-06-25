class Deck {
  // We've defined the constructor method, although it's not currently doing anything.
  // This is the perfect place to set up the initial state of any new Deck instances.
  constructor() {
    this.cards = Array.from({length: 52}, (v, i) => i + 1);
  }

  // Any additional instance methods required by the test suite can be defined below.
  
  shuffle() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
    return this.cards;
  }

  draw(num) {
    if (this.cards.length === 0) {
      return -1;
    } else if (num === undefined) {
      return this.cards.pop();
    } else if (typeof num !== 'number') {
      return undefined;
    } else {
      let cardsDrawn = []
      let i = 0;
      while (i<num) {
        cardsDrawn.push(this.cards.pop())
        i++
      }
      return cardsDrawn
    }
  }

  

}

module.exports = Deck;

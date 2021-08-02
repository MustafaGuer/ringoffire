export class Game {
    public players: string[] = ['Hans', 'Freddy', 'Peter'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;


    constructor () {
        for(let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }
        shuffle(this.stack);
    }
}

function shuffle(array) { // hier kam ein fehler vor dem strict 
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
import {atom, selector} from 'recoil';

export const boardState = atom({
  key: 'boardState',
  default: ['-','-','-','-','-','-','-','-','-']
});

export const currentPlayer = atom({
  key: 'currentPlayer',
  default: 'X'
});

export const gameOver = atom({
  key: 'gameOver',
  default: false
});

export const message = atom({
  key: 'string',
  default: '',
});

export const scoreboard = atom({
  key: 'scoreboard',
  default: { 'X': 0, 'O': 0}
});



// modify the selector functions below to add writable setters

// ORIGINAL CODDE
// export const playerIsUpStateSelector = selector({
//   key: 'playerIsUpState',
//   get: ({get}) => {
//     const player = get(currentPlayer);
//     return `Player ${player} is up!`
//   }
// })

// WRITABLE SELECTOR VERSION
export const playerIsUpStateSelector = selector({
  key: 'playerIsUpState',
  set: ( {set, get}, nextPlayer ) => { // second parameter of the set function is the newValue
    set(currentPlayer, [...get(currentPlayer), nextPlayer]);
    return `Player ${nextPlayer} is up!` // this doesnt look right lulz
  }
})



export const playerIsWinningStateSelector = selector({
  key: 'playerIsWinningStateSelector',
  get: ({get}) => {
    // get the score from state
    const score = get(scoreboard);

    // see who is ahead in games
    const gameCount = score.X - score.O;
    // declare what we will later render
    let displayLeader = `Currently tied at ${score.X}-${score.O}`
    // if the game count does exist (meaning, is not 0, resulting in a tie math) then set display leader to whoever is winning
    if (gameCount) displayLeader = gameCount > 0 ? `Player X is winning by ${Math.abs(gameCount)}` : `Player O is winning by ${Math.abs(gameCount)}`;
      // if it doesn't exist, meaning the differece is 0 and the match is tied, then display the tie score.
    return displayLeader;
  }
})
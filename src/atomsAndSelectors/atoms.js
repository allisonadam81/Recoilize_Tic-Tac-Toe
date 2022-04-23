import { atom, selector } from 'recoil';
import { formatRecoilizeSelectors } from 'recoilize';

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

const $playerIsUpStateSelector = {
  key: 'playerIsUpStateSelector',
  get: ({get}) => {
    const player = get(currentPlayer);
    return player;
  }
}
export const playerIsUpStateSelector = selector($playerIsUpStateSelector)

const $nextPlayerSetSelector = {
  key: 'nextPlayerSetSelector',
  get: ({get}) => {
    // returns the current player
    const player = get(currentPlayer);
    return player;
  },
  set: ( {set, get} ) => {
    const nextPlayer = get(currentPlayer) === 'X' ? 'O' : 'X';
    // console.log('NEXT: ', nextPlayer);
    // console.log('CURRENT: ', get(currentPlayer));
    set(currentPlayer, nextPlayer);
  }
}
export const nextPlayerSetSelector = selector($nextPlayerSetSelector);

const $playerIsWinningStateSelector = {
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
};
export const playerIsWinningStateSelector = selector($playerIsWinningStateSelector);  

const $newBoardSetStateSelector = {
  key: 'newBoardSetStateSelector',
  get: ({get}) => {
    const theBoardState = [...get(boardState)];
    return theBoardState;
  },
  set: ({set, get}, currentBox) => {
    const newBoardState = [...get(boardState)];
    const currPlayer = get(currentPlayer);
    newBoardState[currentBox] = currPlayer;
    set(boardState, newBoardState);
  }
};
export const newBoardSetStateSelector = selector($newBoardSetStateSelector);

// declare a selectors object to send all 'will be' selectors to the window
// store all of the objects to be passed into selector constructor functions as properties and their values in the __selectorsObject
// must have an action with the value: 'selectorsObject'
// must have a payload with all of the selector argument objects
// const $selectorsObject = {
//   action: 'selectorsObject',
//   payload: {
//     $nextPlayerSetSelector,
//     $playerIsUpStateSelector,
//     $newBoardSetStateSelector,
//     $playerIsWinningStateSelector
//   }
// };


// pass selector objects into formatRecoilizeSelectors function
formatRecoilizeSelectors(
  $nextPlayerSetSelector,
  $playerIsUpStateSelector,
  $newBoardSetStateSelector,
  $playerIsWinningStateSelector
);

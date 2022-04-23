import React from 'react';
import {
  // RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';

import { boardState, nextPlayerSetSelector, newBoardSetStateSelector } from '../atomsAndSelectors/atoms';
import '../board.css'

function Box(props) {
  // grab the value of the board atom
  const board = useRecoilValue(boardState);
  // create a function that will set the new player
  const setNewPlayer = useSetRecoilState(nextPlayerSetSelector);
  // create a function that will set the new board based on the click index
  const setBoard = useSetRecoilState(newBoardSetStateSelector);

  function handleClick(i) {
    // on the click, set the board and set the new player.
    setBoard(i);
    setNewPlayer();
  }
  
  return(
      <button className='individualBox' onClick={() => {handleClick(props.index) }}>{board[props.index]}</button>     
  )
}

export default Box;

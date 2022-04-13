import React from 'react';
import {
  // RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  useRecoilValue,
} from 'recoil';

import { playerIsUpStateSelector, playerIsWinningStateSelector } from '../atomsAndSelectors/atoms';

const Scoreboard = props => {
// make a selector that reads the current player.
// display 'player '' is up' based on current player.
const playerIsUp = useRecoilValue(playerIsUpStateSelector);
const playerIsWinning = useRecoilValue(playerIsWinningStateSelector);

  return (
    <div className='scoreboard-container'>
      <div>{`Player ${playerIsUp} is up!`}</div>
      <div>{`${playerIsWinning}`}</div>
    </div>
  )
}

export default Scoreboard;
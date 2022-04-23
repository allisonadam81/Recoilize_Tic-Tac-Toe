import React from 'react';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilSnapshot
  // useRecoilValue,
} from 'recoil';
import Board from './components/board';
import Scoreboard from './components/Scoreboard';
import RecoilizeDebugger from 'recoilize';
// console.log(RecoilizeDebugger);


function App() {
  return (
    <RecoilRoot>
      <RecoilizeDebugger/>
      <div className='main-container'>
        <h1>The Infamous Tic-Tac-Toe</h1>
        <Board/>
        <Scoreboard/>
      </div>
    </RecoilRoot>
  )
}

export default App;
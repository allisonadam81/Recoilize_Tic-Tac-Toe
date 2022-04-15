import React from 'react';
import {
//   RecoilRoot,
//   atom,
//   selector,
useRecoilSnapshot,
//   useRecoilState,
//   useRecoilValue,
} from 'recoil';

import Box from './box';
import '../board.css';
function Board() {
  const snapshot = useRecoilSnapshot();
  // console.log('useRecoilSnapshot from board.js of TTT: ', snapshot);
  // console.log('Snapshot Info from board.js of TTT: ', snapshot.getInfo_UNSTABLE);
  // console.log("storeState", )
  // const nodes = [...snapshot.getNodes_UNSTABLE()];
  // console.log('Nodes: ', nodes);
  // const info = [...React.getInfo_UNSTABLE]
  // console.log(info);
  // const deps = [...snapshot.getDeps_UNSTABLE()] // THIS BREAKS
  // console.log('Deps: ', deps)  
  // const subscribers = [...snapshot.getSubscribers_UNSTABLE]; // THIS BREAKS
  // console.log(subscribers);
  // create an array to contain individual box components 

  // const loadables = snapshot.getLoadable(); // THIS BREAKS
  // console.log(loadables)

  const board = [];
  // provide an attribute for each box as the index position of the board they will represent
  for (let i = 0; i < 9; i++){
    board.push(<Box
      key={i}
      index={i}
      />)
  }
  return (
    <div id='boardContainer'>
      {board}
    </div>
    
  )
}

export default Board;
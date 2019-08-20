import { useState, useCallback } from "react";

import { randomTetromino, TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    // ES6 Syntax destructuring for following
    // const playerState = useState();
    // const player = playerState[0]
    // const setPlayer = playerState[1]

    // inital State
    pos: { x: 0, y: 0 },
    teromino: TETROMINOS[0].shape,
    collided: false
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y)
      },
      collided
    }));
  };
  const resetPlayer = useCallback(
      () => {
          setPlayer({
              pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
              tetrominos: randomTetromino().shape,
              collided: false
          })
      },
      [],
  )

  return [player, updatePlayerPos, resetPlayer];
};

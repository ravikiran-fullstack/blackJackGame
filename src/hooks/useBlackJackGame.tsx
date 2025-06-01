import { useContext, useEffect, useMemo, useState } from "react";
import { startGame } from "../blackJackGame/gameLogic";
import { GameContext } from "../context/blackJackGameContext/GameContext";

interface GameStateType {
  playerTotal: number;
  dealerTotal: number;
  playerCards: number[];
  dealerCards: number[];
  gameWinner: string;
}
const useBlackJackGame = () => {
  const {dispatch, ...state} = useContext(GameContext);

  console.log('useBlackJackGame ',state);

  const [gameKey, setGameKey] = useState(0);

//   console.log("initialBudget", initialBudget);

  const game = useMemo(() => {
    const game = startGame();
    return game;
  }, [gameKey]);

  const [gameState, setGameState] = useState<GameStateType>({
    playerTotal: game.getPlayerTotal(),
    dealerTotal: game.getDealerTotal(),
    playerCards: game.getPlayerCards(),
    dealerCards: game.getDealerCards(),
    gameWinner: game.getGameWinner(),
  });

  useEffect(() => {
    resetState();
  }, [gameKey, game]);

  useEffect(() => {
    if (game.getGameWinner() !== "") {
      dispatch({type:"GAME_FINISHED", payload: {winner: game.getGameWinner()}});
    }
  }, [game.getGameWinner()]);

  const handleRestart = () => {
    setGameKey((prev) => prev + 1);
  };

  const handleHit = () => {
    game.hit();
    setGameState((prevState) => ({
      ...prevState,
      playerTotal: game.getPlayerTotal(),
      dealerTotal: game.getDealerTotal(),
      gameWinner: game.getGameWinner(),
    }));
  };

  const handleStand = () => {
    game.stand();
    setGameState((prevState) => ({
      ...prevState,
      playerTotal: game.getPlayerTotal(),
      dealerTotal: game.getDealerTotal(),
      gameWinner: game.getGameWinner(),
    }));
  };

  const resetState = () =>
    setGameState({
      gameWinner: "",
      playerTotal: game.getPlayerTotal(),
      dealerTotal: game.getDealerTotal(),
      playerCards: game.getPlayerCards(),
      dealerCards: game.getDealerCards(),
    });

  return { gameState, handleHit, handleStand, handleRestart };
};

export default useBlackJackGame;

import BlackJackGame from "./BlackJackGame";
import "./blackJackGame.css";

import { GameContextProvider } from "../context/blackJackGameContext/GameContext";
import GameFinances from "./GameFinances";
import GameStatus from "./GameStatus";

const GameHome = () => {
  return (
    <GameContextProvider>
      <div className="gameHomeContainer">
        <GameFinances />
        <BlackJackGame />
        <GameStatus />
      </div>
    </GameContextProvider>
  );
};

export default GameHome;

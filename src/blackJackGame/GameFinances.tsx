import { useContext } from "react";
import { GameContext } from "../context/blackJackGameContext/GameContext";

const GameFinances = () => {
  const gameContext = useContext(GameContext);
  console.log('gameContext',gameContext);
  return <div className="gameFinanceContainer">
    <div className="header">
      <h3>Game Finances</h3>
    </div>
  </div>;
};

export default GameFinances;

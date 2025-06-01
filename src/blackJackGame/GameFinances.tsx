import { useContext } from "react";
import { GameContext } from "../context/blackJackGameContext/GameContext";

const GameFinances = () => {
  const gameContext = useContext(GameContext);
  console.log('gameContext',gameContext);
  return <div className="gameFinanceContainer">GameFinances</div>;
};

export default GameFinances;

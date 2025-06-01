import { useContext } from "react";
import { GameContext } from "../context/blackJackGameContext/GameContext";

const GameStatus = () => {
  const gameContext = useContext(GameContext);
  console.log("gameContext", gameContext);
  return (
    <div className="gameStatsContainer">
      <h3>Game Status</h3>
      <div>
        <h5>Bank: {gameContext.bankBalance}</h5>
        <h5>Total Games: {gameContext.totalGames}</h5>
        <h5>Total Matches won by Player: {gameContext.totalGamesWonByPlayer}</h5>
        <h5>Total Money won by Player: {gameContext.totalMoneyWon}</h5>
      </div>
    </div>
  );
};

export default GameStatus;

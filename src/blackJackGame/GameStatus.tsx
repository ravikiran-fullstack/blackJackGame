import { useContext } from "react";
import { GameContext } from "../context/blackJackGameContext/GameContext";

const GameStatus = () => {
  const gameContext = useContext(GameContext);
  console.log("gameContext", gameContext);
  return (
    <div className="gameStatsContainer">
      <div className="header">
        <h3>Game Status</h3>
        <h5>Bank: {gameContext.bankBalance}</h5>
      </div>
      <div className="body">
        <div>
          <h5>Total Games:</h5>
          <h5>{gameContext.totalGames}</h5>
        </div>
        <div>
          <h5>Total Matches won by Player:</h5>
          <h5>{gameContext.totalGamesWonByPlayer}</h5>
        </div>
        <div>
          <h5>Total Money won by Player: </h5>
          <h5>{gameContext.totalMoneyWon}</h5>
        </div>
      </div>
    </div>
  );
};

export default GameStatus;

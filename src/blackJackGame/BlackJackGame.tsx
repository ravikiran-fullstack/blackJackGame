import useBlackJackGame from "../hooks/useBlackJackGame";
import DealerHand from "./components/DealerHand";
import PlayerHand from "./components/PlayerHand";

const BlackJackGame = () => {
  const {gameState, handleHit, handleStand,handleRestart} = useBlackJackGame();
  return (
    <div className="gameContainer">
      <div className="gameHeader">
        <h3>Black Jack Game</h3>
      </div>
      <div className="gameBody">
        <PlayerHand cards={gameState.playerCards} />
        <DealerHand cards={gameState.dealerCards} />
      </div>
      <div className="gameControlsContainer">
        <button
          className="btn"
          onClick={() => handleHit()}
          disabled={gameState.gameWinner !== ""}
        >
          Hit
        </button>
        <button
          className="btn"
          onClick={() => handleStand()}
          disabled={gameState.gameWinner !== ""}
        >
          Stand
        </button>
      </div>

      <div className="gameResultsContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div className="playerTotal">
            <h3>Player : {gameState.playerTotal}</h3>
          </div>
          <div className="dealerTotal">
            <h3>Dealer : {gameState.dealerTotal}</h3>
          </div>
        </div>
        <div>
          <h2>Result:{gameState.gameWinner}</h2>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            className="btn"
            style={{ width: "200px", backgroundColor: "green" }}
            onClick={() => handleRestart()}
          >
            Restart game
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackJackGame;

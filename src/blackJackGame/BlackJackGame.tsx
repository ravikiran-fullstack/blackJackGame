import { useEffect, useMemo, useState } from "react";
import "./blackJackGame.css";
import DealerHand from "./components/DealerHand";
import PlayerHand from "./components/PlayerHand";

import { startGame } from "./gameLogic";

interface GameStateType {
  playerTotal: number;
  dealerTotal: number;
  playerCards: number[];
  dealerCards: number[];
  gameWinner: string;
}

const BlackJackGame = () => {
  const [gameKey, setGameKey] = useState(0);

  const game = useMemo(() => {
    const game = startGame();
    return game;
  }, [gameKey]);
  //   console.log(game.getDealerTotal(), game.getPlayerTotal());

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

  return (
    <div className="gameHomeContainer">
      <div className="gameFinanceContainer"></div>
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
              Restart game : {gameKey}
            </button>
          </div>
        </div>
      </div>
      <div className="gameStatsContainer"></div>
    </div>
  );
};

export default BlackJackGame;

/* useContext is a hook in react, used to manage global data such as Global state, Services, Themes, User settings */

import { createContext, useReducer, useState, type ReactNode } from "react";

/* Using useContext hooks requires three steps: 
    1> Creating a Context
    2> Providing a Context
    3> Consuming the Context
*/

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextInitialStateType = {
  bankBalance: number;
  totalGames: number;
  setTotalGames: React.Dispatch<React.SetStateAction<number>>;
  totalGamesWonByPlayer: number;
  setTotalGamesWonByPlayer: React.Dispatch<React.SetStateAction<number>>;
  betPerGame: number;
  totalMoneyWon: number;
  calculateTotalMoneyWon: (_betPerGame: number) => void;
  dispatch: React.Dispatch<ACTION>;
};

const initialState: GameContextInitialStateType = {
  bankBalance: 1000,
  totalGames: 0,
  setTotalGames: () => {},
  totalGamesWonByPlayer: 0,
  setTotalGamesWonByPlayer: () => {},
  betPerGame: 100,
  totalMoneyWon: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  calculateTotalMoneyWon: (_betPerGame: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_action: ACTION) => {},
};

type ACTION = {
  type: string;
  payload: {
    winner: string;
  };
};

/*
    (my understanding of useReducer hook and its uses)
    -- useReducer hook is used to manage state in a react application
    -- it takes two parameters: a reducer function and initial state of the application
    -- reducer function is a pure function that takes two parameters: state and action
    -- state is of the same type as initial state of the app
    -- action is of type {type: string} where type defines type of action needs to be performed on current state
    -- useReducer hook returns two parameters, current state of the app and a dispatch function
    -- current state is of same type as initial state
    -- dispatch function takes an object of type {type: string}
    -- user can use and call this dispatch function to update the state of the application.
*/

const reducer = (state: GameContextInitialStateType, action: ACTION) => {
  switch (action.type) {
    case "GAME_FINISHED":
      // when Game finishes
      // need to updated the number of games played by user
      // if Player has won the game totalGamesWonByPlayer
      // need to update the total won by Player
      // need to update the bank balance
      console.log("state", state);
      console.log("action", action);
      if (action.payload.winner === "Player won the game") {
        return {
          ...state,
          bankBalance: state.bankBalance + state.betPerGame,
          totalGames: state.totalGames+1,
          totalGamesWonByPlayer: state.totalGamesWonByPlayer+1,
          totalMoneyWon: state.totalMoneyWon + state.betPerGame,
        };
      } else {
        return {
          ...state,
          bankBalance: state.bankBalance - state.betPerGame,
          totalGames: state.totalGames+1,
          totalMoneyWon: state.totalMoneyWon - state.betPerGame,
        };
      }
    default:
      return state;
  }
};

// create a context
export const GameContext = createContext(initialState);

// create provider for the same context
export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ ...currentState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

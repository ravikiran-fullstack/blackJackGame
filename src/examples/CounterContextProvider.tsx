import type { ReactNode } from "react";
import CounterContext from "./CounterContext";

import { useReducer } from "react";
import { CounterActionType, type Action } from "./types";

const initialState = {
  count: 10000,
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { count: state.count + action.payload + 1 };
    case CounterActionType.DECREMENT:
      return { count: state.count - action.payload - 1 };
    default:
      return state;
  }
};

export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state: currentState, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

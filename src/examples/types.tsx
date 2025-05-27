export const initialState = {
  count: 100,
};

export enum CounterActionType{
  INCREMENT = "increment",
  DECREMENT = "decrement"
}

export type Action =
  | { type: CounterActionType.INCREMENT; payload: number }
  | { type: CounterActionType.DECREMENT; payload: number };

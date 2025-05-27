/* 
    -- In this file, we maintain the context of counter application
*/

import { createContext } from "react";
import type { Action, initialState } from "./types";

type CounterContextType = {
    state: typeof initialState;
    dispatch: React.Dispatch<Action>
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export default CounterContext;

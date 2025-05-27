import { createContext, type ReactNode } from "react";

type LoginContextProviderProps = {
    children: ReactNode
}

export const LoginContext = createContext<{ test: string }>({ test: "" });

export const LoginContextProvider = ({ children }: LoginContextProviderProps) => {
  return (
    <LoginContext.Provider value={{ test: "Ravikiran" }}>
      {children}
    </LoginContext.Provider>
  );
};

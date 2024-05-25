"use client";
import { createContext, useContext, useReducer } from "react";

type StateContextType = {
  dispatch: Function;
  state: StateType;
};
type FavType = {
  [key: string]: string|number;
};

export type StateType = {
  favs: FavType[];
  cats: number;
};

// Reducer function
const reducer = (state: StateType, data: StateType) => {
  return { ...state, ...data };
};
const defaultGlobalState = {
  dispatch: reducer,
  state: { favs: [], cats: 0 },
};

// Create a new context for the counter
const GlobalState = createContext<StateContextType>(defaultGlobalState);

// Counter provider component
export const GlobalStateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, { favs: [], cats: 0 });

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalState);

  if (!context) {
    throw new Error("useCounter must be used within a GlobalStateProvider");
  }

  return context;
};

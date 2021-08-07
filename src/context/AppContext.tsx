import React, { Dispatch, SetStateAction } from "react";
import { IAppContextProps } from "../types/AppContextTypes";

export const AppContext = React.createContext<
  [IAppContextProps, Dispatch<SetStateAction<IAppContextProps>>] | undefined
>(undefined);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be inside a Provider with a value");
  return context;
};

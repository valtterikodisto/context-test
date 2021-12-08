import React from "react";

export type IMyContext = {
  message: string;
};

export const MyContext = React.createContext({
  message: "Seems that there is no provider",
});

export const MyContextProvider: React.FC = ({ children }) => {
  return (
    <MyContext.Provider value={{ message: "Provider found!" }}>
      {children}
    </MyContext.Provider>
  );
};

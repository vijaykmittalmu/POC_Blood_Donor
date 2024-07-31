import React, { createContext, FC, useContext, useState } from "react";

const TitleContext = createContext<any>(null);

export const useTitle = () => useContext(TitleContext);

const TitleProvider: FC<any> = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;

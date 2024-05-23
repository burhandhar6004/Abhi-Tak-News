import { useReducer } from "react";
import { createContext } from "react";
import { NewsReducer } from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    newsAll: [],
  };

  const [state, newsDispatch] = useReducer(NewsReducer,initialState);

  return (
    <NewsContext.Provider value={{ ...state, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;

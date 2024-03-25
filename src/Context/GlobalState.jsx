import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

const InitialState = {
  transactions: [],
};

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : InitialState;
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) =>
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

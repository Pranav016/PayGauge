import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

export const ACTIONS = {
	DeleteTransaction: 'DELETE_TRANSACTION',
	AddTransaction: 'ADD_TRANSACTION',
};

const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: '-20' },
		{ id: 2, text: 'Rent', amount: '50' },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions
	function deleteTransaction(id) {
		dispatch({
			type: ACTIONS.DeleteTransaction,
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: ACTIONS.AddTransaction,
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;

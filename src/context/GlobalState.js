import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: '-20' },
		{ id: 2, text: 'Rent', amount: '50' },
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider value={{ transactions: state.transactions }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;

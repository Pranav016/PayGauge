import { ACTIONS } from './GlobalState';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.DeleteTransaction:
			return {
				...state,
				transactions: state.transactions.filter(
					({ id }) => id !== action.payload
				),
			};
		default:
			return state;
	}
};

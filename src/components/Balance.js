import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => +transaction.amount);
	const total = amounts
		.reduce((accumulator, currValue) => (accumulator += currValue), 0)
		.toFixed(2);

	return (
		<>
			<h4>Balance</h4>
			<h1>${total}</h1>
		</>
	);
};

export default Balance;

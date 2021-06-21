import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => +transaction.amount);
	const income = amounts
		.filter((val) => val > 0)
		.reduce((acc, val) => (acc += val))
		.toFixed(2);
	const expense = Math.abs(
		amounts.filter((val) => val < 0).reduce((acc, val) => (acc += val), 0)
	).toFixed(2);

	return (
		<>
			<div className='inc-exp-container'>
				<div>
					<h4>Income</h4>
					<p className='money plus'>+${income}</p>
				</div>
				<div>
					<h4>Expenses</h4>
					<p className='money minus'>-${expense}</p>
				</div>
			</div>
		</>
	);
};

export default IncomeExpenses;

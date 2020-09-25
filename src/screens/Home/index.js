import React from 'react';
import Table from '../../components/Table';

const Home = (props) => {
	const { history } = props;

	return (
		<Table
			history={history}
		/>
	);
}

export default Home;

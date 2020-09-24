import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import RowsComponent from '../RowsComponent';
import FilterComponent from '../FilterComponent';

const Table = (props) => {
	const { data, saveChange } = props;
	const [filterText, setFilterText] = useState('');

	const filteredItems = () => {
		return data.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
	}

	const handleClear = () => {
		if (filterText) {
			setFilterText('')
		}
	};

	const getSubHeaderComponent = () => {
		return (
			<FilterComponent
				onFilter={(e) => {
					setFilterText(e.target.value)
				}}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	};

	const columns = Object.keys(data[0]).map(element => {
		if (element == 'id') {
			return {
				omit: true
			}
		}
		return {
			name: element.toUpperCase(),
			selector: element,
			sortable: true,
		}
	});

	return (
		<DataTable
			title="GoWombat_Test"
			columns={columns}
			data={filteredItems()}
			pagination={true}
			expandableRows={true}
			expandOnRowClicked={true}
			subHeader={true}
			subHeaderComponent={getSubHeaderComponent()}
			expandableRowsComponent={<RowsComponent saveChange={saveChange} />}

		/>
	);
}

Table.propTypes = {
	data: PropTypes.array,
	saveChange: PropTypes.func,
};

export default Table;
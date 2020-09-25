import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import DataTable from 'react-data-table-component';
import FilterComponent from '../FilterComponent';
import { urlBuilder } from '../../router';

const Table = (props) => {
	const { data, history } = props;
	const [filterText, setFilterText] = useState('');
	const { page } = useParams();

	const changePage = (val) => {
		let url = urlBuilder('home', { page: val });
		history.push({
			pathname: url
		});
	}

	const filteredItems = () => {
		return data.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
	}

	const handleClear = () => {
		if (filterText) {
			setFilterText('')
		}
	};

	const handleChange = e => {
		let url = urlBuilder('setting', { id: e.id });
		history.push({
			pathname: url,
			state: { params: e }
		});
	};

	const checkPage = (page) => {
		if (Number(page)) {
			return Number(page);
		} else {
			changePage(1);
		}
	}

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
			onRowClicked={handleChange}
			pointerOnHover={true}
			data={filteredItems()}
			pagination={true}
			subHeader={true}
			paginationDefaultPage={checkPage(page)}
			onChangePage={(e) => changePage(e)}
			subHeaderComponent={getSubHeaderComponent()}
		/>
	);
}

const mapStateToProps = state => {
	return {
		data: state.table.data,
	}
};

export default connect(mapStateToProps, null)(Table);
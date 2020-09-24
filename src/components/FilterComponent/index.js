import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterComponent = (props) => {
	const { filterText, onFilter, onClear } = props;
	return (
		<>
			<div className={'filter_wrap'}>
				<input placeholder={'Filter by name'} value={filterText} onChange={onFilter} />
				<button onClick={onClear}>Clear</button>
			</div>
		</>
	)
}

FilterComponent.propTypes = {
	filterText: PropTypes.string,
	onFilter: PropTypes.func,
	onClear: PropTypes.func
};

export default React.memo(FilterComponent);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './styles.css';

const RowsComponent = (props) => {
	const { data, saveChange } = props;
	const [newData, updNewData] = useState(data);
	const onChange = (val, key) => {
		updNewData({ ...newData, [_.keys(newData)[key]]: val });
	}

	const onSave = () => {
		const oldData = JSON.stringify(data);
		const newDT = JSON.stringify(newData);
		if (newDT !== oldData) {
			saveChange(newData);
		}
	}

	return (
		<>
			<div className={'setting_wrap'}>
				{
					_.values(newData).map((item, index) => (
						<div key={index} className={'setting_item'}>
							{_.keys(newData)[index] !== 'id' ?
								<>
									<label>{_.keys(newData)[index]}</label>
									<input defaultValue={item} onChange={(e) => onChange(e.target.value, index)} />
								</>
								:
								null
							}
						</div>
					)
					)
				}
			</div>
			<button className={'setting_btn'} onClick={() => onSave()}>Save</button>
		</>
	)
}

RowsComponent.propTypes = {
	data: PropTypes.object,
	saveChange: PropTypes.func,
};

export default React.memo(RowsComponent);
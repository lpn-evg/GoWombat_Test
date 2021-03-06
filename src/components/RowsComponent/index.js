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
		if (!_.isEqual(data, newData)) {
			saveChange(newData);
		}
	}

	return (
		<>
			<div className={'setting_wrap'}>
				{
					_.values(newData).map((item, index) => (
						<div key={index} >
							{_.keys(newData)[index] !== 'id' &&
								<>
									<label>{_.keys(newData)[index]}</label><br/>
									<input defaultValue={item} onChange={(e) => onChange(e.target.value, index)} />
								</>
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
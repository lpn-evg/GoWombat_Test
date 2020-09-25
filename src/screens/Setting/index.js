import React, { useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { changeData } from '../../redux/actions';
import './styles.css';

const Setting = props => {
	const { match, history, changeData } = props;
	const { params } = history.location.state;
	const [newData, updNewData] = useState(params);

	const goBack = () => {
		history.goBack();
	};

	const onChange = (val, key) => {
		updNewData({ ...newData, [_.keys(newData)[key]]: val });
	}

	const onSave = () => {
		if (!_.isEqual(params, newData)) {
			const dd = {
				obj: newData,
				id: match.params.id
			}
			changeData(dd);
			goBack();
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
									<label>{_.keys(newData)[index]}</label><br />
									<input defaultValue={item} onChange={(e) => onChange(e.target.value, index)} />
								</>
							}
						</div>
					)
					)
				}
				<div className="btn-wrap">
					<button className={'setting_btn'} onClick={() => onSave()}>Save</button>
					<button onClick={goBack}>BACK</button>
				</div>
			</div>

		</>
	)
}




export default connect(null, { changeData })(Setting);
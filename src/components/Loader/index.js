import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './styles.css';

const Loader = () => {
	return (
		<div className='loader-wrap'>
			<div className='loader'>
				<p>Loading...</p>
			</div>
		</div>
	)
}


export default React.memo(Loader);
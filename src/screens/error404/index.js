import React from 'react';
import './styles.css';

const error404 = () => {
	return (
		<div className='err-wrap'>
			<div className='err'>
				<h1>ERROR 404</h1>
			</div>
		</div>
	)
}


export default React.memo(error404);
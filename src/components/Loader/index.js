import React from 'react';
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
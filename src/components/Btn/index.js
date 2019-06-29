import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Btn = ({ className, btnText, btnHandler }) => {
	return (
		<button className={className} onClick={btnHandler}>
			{btnText}
		</button>
	);
};

Btn.propTypes = {
	className: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
	btnHandler: PropTypes.func
};

export default Btn;

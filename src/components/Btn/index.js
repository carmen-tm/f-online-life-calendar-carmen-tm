import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Btn = ({ className, btnText }) => {
	return <button className={className}>{btnText}</button>;
};

Btn.propTypes = {
	className: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired
};

export default Btn;

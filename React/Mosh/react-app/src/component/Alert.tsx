// rafce
import React from 'react';

interface Props {
	// text: string;
	children: string;
}

const Alert = ({ children }: Props) => {
	return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

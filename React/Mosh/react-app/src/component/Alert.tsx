// rafce
import React, { ReactNode } from 'react';

interface Props {
	// text: string;
	// children: string;
	children: ReactNode;
}

const Alert = ({ children }: Props) => {
	return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

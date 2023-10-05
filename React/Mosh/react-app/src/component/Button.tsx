import React from 'react';
import { Prop } from 'vue';

interface Props {
	children: string;
	// color: string;
	color?: 'primary' | 'secondary' | 'danger';
	onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
	return (
		<button className={'btn btn-' + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

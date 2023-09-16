import { Button } from 'antd';
import React, { Component } from 'react';
function Dialog(props) {
	return (
		<div style={{border: `3px solid ${props.color || 'blue'}`}}>
			{/* 好比是vue的匿名插槽 */}
			{props.children}
            <div>
                {/* vue的具名插槽 */}
                {props.btn}
            </div>
		</div>
	);
}
function WelcomeDialog(params) {
    const confirmBtn = <Button type='info'>确认</Button>
	return (
		<Dialog color="green" btn={confirmBtn}>
			<h3>welcome</h3>
			<p>欢迎光临</p>
		</Dialog>
	);
}
function ThankDialog(params) {
    const thankBtn = <Button type='primary'>谢谢你</Button>
	return (
		<Dialog btn={thankBtn}>
			<h3>Thanks</h3>
			<p>谢谢你</p>
		</Dialog>
	);
}

export default class Compond extends Component {
	render() {
		return (
			<div>
				<WelcomeDialog></WelcomeDialog>
                <ThankDialog></ThankDialog>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Col, Row } from 'antd';

export default class App extends Component {
	render() {
		return (
			<div>
				<Row>
					{/* 把整个屏幕分成24份 */}
					<Col span={12}>col111</Col>
					<Col span={12}>col222</Col>
				</Row>
				<Row>
					{/* 左右布局 */}
					<Col span={8}>col111</Col>
					<Col span={8} offset={8}>
						col222
					</Col>
				</Row>
			</div>
		);
	}
}

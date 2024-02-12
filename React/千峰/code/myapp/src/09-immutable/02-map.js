import React, { Component } from 'react';
import { Map } from 'immutable';

var obj = {
	name: 'lee',
	age: 100,
};

var oldImmuObj = Map(obj);

console.log(oldImmuObj);

var newImmuObj = oldImmuObj.set('name', '小明');

console.log(newImmuObj);

// =========== 方便的获取immu值的方法
// 1.通过get获取immutable，这样就不用像上面一样的输出一样，对象值藏在_root里面
// 藏在_root里面也是为了不影响我们正常使用js的map
console.log(oldImmuObj.get('name'), newImmuObj.get('name'));

// 2. immutable==>普通对象
console.log(oldImmuObj.toJS(), newImmuObj.toJS());

export default class App extends Component {
	state = {
		// ================ 写法1
		info: Map({
			name: 'lee',
			age: 100,
		}),
		// ================ 写法2
		info2: {
			name: 'lee2',
			age: 200,
		},
	};

	render() {
		return (
			<div>
				{/* ================ 写法1 */}
				<div>
					<button
						onClick={() => {
							this.setState({
								// 链式修改
								info: this.state.info.set('name', '小明').set('age', 200),
							});
						}}
					>
						click
					</button>

					{this.state.info.get('name')}
					{this.state.info.get('age')}
				</div>

				{/* ================ 写法2*/}
				<div>
					<button
						onClick={() => {
							var old = Map(this.state.info2);
							var newImmu = old.set('name', 'xiaomimng').set('age', 540);
							this.setState({
								info2: newImmu.toJS(),
							});
						}}
					>
						click2
					</button>

					{this.state.info2.name}
					{this.state.info2.age}
				</div>
			</div>
		);
	}
}

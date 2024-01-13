/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-13 10:56:33
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-13 17:51:49
 * @FilePath: /千峰/code/myapp/src/03-hooks/02-todolist.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEw
 */
import React, { useCallback, useState } from 'react';

// 函数式组件没有生命周期这个概念
export default function App() {
	const [myname, setname] = useState('raite');
	const [text, settext] = useState('');
	const [list, setList] = useState(['aa', 'bb', 'cc']);

	// 面试会问什么时候用useCallback
	// 记忆函数，提升性能
	// 闭包
	const handleChange = useCallback((evt) => {
		settext(evt.target.value);
	}, []);

	const handleAdd = useCallback(() => {
		console.log(text);
		setList([...list, text]);
		settext('');
	}, [text, list]);

	const handelDel = useCallback(
		(index) => {
			console.log(index);
			var newList = [...list];
			newList.splice(index, 1);
			setList(newList);
		},
		[list]
	);

	return (
		<div>
			{myname} -{' '}
			<button
				onClick={() => {
					setname('李四');
				}}
			>
				setname
			</button>
			<input onChange={handleChange} value={text}></input>
			<button onClick={handleAdd}>add</button>
			<ul>
				{list.map((item, index) => (
					<li key={item}>
						{item}
						<button onClick={() => handelDel(index)}>del</button>
					</li>
				))}
			</ul>
			{!list.length && <div>暂无待办事项</div>}
		</div>
	);
}

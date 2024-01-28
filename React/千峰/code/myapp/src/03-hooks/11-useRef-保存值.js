/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-13 17:23:37
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-28 15:17:23
 * @FilePath: /千峰/code/myapp/src/03-hooks/07-useCallback1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useState } from 'react';

export default function App() {
	const [count, setcount] = useState(0);
	// useState 记忆函数，能记住状态

	var mycount = useRef(0);

	return (
		<div>
			<button
				onClick={() => {
					setcount(count + 1);
					mycount.current++;
				}}
			>
				click
			</button>
			{count}-{mycount.current}
		</div>
	);
}

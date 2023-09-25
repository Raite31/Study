const Edit = () => {
	return (
		<div>
			<h1>备忘录</h1>
			<p>记事：</p>
			<input type="text"></input>
			<p>日期：</p>
			<input type="date"></input>
			<p>时间：</p>
			<input type="time"></input>
            <button className="add">新增</button>
		</div>
	);
};
export default Edit;

const Item = ({ id, note, date, time, deleteData }) => {
	console.log('data:', note, date, time);

	function deleteItem() {
		deleteData(function (prev) {
			return prev.filter((item) => item.id !== id);
		});
	}
	return (
		<div className="item">
			{/* <div>{data[0].note}</div>
			<div>{data[0].date}</div>
			<div>{data[0].time}</div> */}

			<div>{note}</div>
			<div>{date}</div>
			<div>{time}</div>
			<button className="remove" onClick={deleteItem}>
				删除
			</button>
		</div>
	);
};
export default Item;

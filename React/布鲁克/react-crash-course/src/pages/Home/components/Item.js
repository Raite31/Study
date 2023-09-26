const Item = ({ note, date, time }) => {
	console.log('data:', note, date, time);
	return (
		<div className="item">
			{/* <div>{data[0].note}</div>
			<div>{data[0].date}</div>
			<div>{data[0].time}</div> */}

			<div>{note}</div>
			<div>{date}</div>
			<div>{time}</div>
			<button className="remove">删除</button>
		</div>
	);
};
export default Item;

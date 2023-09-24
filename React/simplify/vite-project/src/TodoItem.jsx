export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			{/* 这样是不行的 会当我们还没点击就直接调用了这个函数 */}
			{/* <button onClick={deleteTodo(id)} className="btn btn-danger">Delete</button> */}
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				Delete
			</button>
		</li>
	);
}

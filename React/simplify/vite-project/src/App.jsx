import { useState } from 'react';
import './style.css';

export default function App() {
	const [newItem, setNewItem] = useState('');
	const [todos, setTodos] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();

		// 这样取 todos，他只会拿上面的默认值加以操作，而不是像我们想要的那样，在上一次操作的数组中继续加数据，他只会拿上面的默认值（上面定义todos为空）加以操作，因为React每次都是从新渲染页面
		// setTodos([
		// 	...todos,
		// 	{ id: crypto.randomUUID(), title: newItem, completed: false },
		// ]);

		setTodos((currnetTodos) => {
			return [
				...currnetTodos,
				{ id: crypto.randomUUID(), title: newItem, completed: false },
			];
		});

		setNewItem('');
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id == id) {
					todo.completed = completed;
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id != id);
		});
	}

	console.log(todos);

	return (
		// 在React中，只能return一个元素（类似vue2一样），我们可以用以下标签处理，在浏览器上不会渲染多余的标签
		<>
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type="text"
						id="item"
					/>
				</div>
				<button className="btn">Add</button>
			</form>
			<h1 className="header">Todo List</h1>
			<ul className="list">
				{todos.length === 0 && 'No Todos'}
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<label>
								<input
									type="checkbox"
									checked={todo.completed}
									onChange={(e) => toggleTodo(todo.id, e.target.checked)}
								/>
								{todo.title}
							</label>
							{/* 这样是不行的 会当我们还没点击就直接调用了这个函数 */}
							{/* <button onClick={deleteTodo(todo.id)} className="btn btn-danger">Delete</button> */}
							<button
								onClick={() => deleteTodo(todo.id)}
								className="btn btn-danger"
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

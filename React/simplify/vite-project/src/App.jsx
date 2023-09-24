import { useEffect, useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './style.css';

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem('ITEMS');
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		// 这样取 todos，他只会拿上面的默认值加以操作，而不是像我们想要的那样，在上一次操作的数组中继续加数据，他只会拿上面的默认值（上面定义todos为空）加以操作，因为React每次都是从新渲染页面
		// setTodos([
		// 	...todos,
		// 	{ id: crypto.randomUUID(), title: newItem, completed: false },
		// ]);

		setTodos((currnetTodos) => {
			return [
				...currnetTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
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
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}

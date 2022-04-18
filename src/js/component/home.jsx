import React, { useState } from "react";

//Importing Components
import { Form } from "./Form.jsx";
import { Todo } from "./Todo.jsx";

//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<header>
				<h1>Christian's Todo List</h1>
			</header>
			<div>
				<Form
					input={input}
					todos={todos}
					setTodos={setTodos}
					setInput={setInput}
				/>
				<Todo todos={todos} setTodos={setTodos} />
			</div>
		</div>
	);
};

export default Home;

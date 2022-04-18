import React from "react";
import PropTypes from "prop-types";

export const Form = ({ todos, setTodos, input, setInput }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInput(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: input, completed: false, id: Math.random() * 1000 },
		]);
		setInput("");
	};

	return (
		<form>
			<input
				onChange={inputTextHandler}
				value={input}
				type="text"
				className="todo-input"
				placeholder="Add to List"
			/>
			<button
				onClick={submitTodoHandler}
				className="todo-button"
				type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};

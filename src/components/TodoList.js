import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-blue-500">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-l px-4 py-2 w-full"
          placeholder="Enter a todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white rounded-r px-4 py-2"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {todo}
            <button
              onClick={() => handleDeleteTodo(index)}
              className="bg-red-500 text-white rounded px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

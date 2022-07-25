import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // add text 
    const addTodo = todo => {
        if (!todo.text) {
        return;
        }
        // add next todo and save the old todos
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    // Update text
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // Remove text if you click 'x' button
    const removeTodo = id => {
        // Filter if the todo.id != id, return the remain elements
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    // Complete, update text
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
                return todo;
            });
        setTodos(updatedTodos);
    };

    return (
        <div className='wrapper'>
        <h1>List of Works on Lazy Day</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
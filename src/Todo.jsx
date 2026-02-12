import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const addTodo = () => {
        if (!todo.trim()) return;

        const todoObj = {
            id: Date.now(),
            text: todo,
            completed: false,
        }
        setTodos(prev => [...prev, todoObj])
        setTodo("");
    }
    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const updateTodo = (id, text) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text: text} : todo))
    }
    const filteredTodos = filter === 'all' ? todos : filter === 'active' ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed);
    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <input
                placeholder="add todo"
                type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            />
            {
                filteredTodos.map(todo => <TodoItem key={todo.id} item={todo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
            }
        </div>
    );
}
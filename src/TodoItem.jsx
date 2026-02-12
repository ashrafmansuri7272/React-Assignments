import React, { useState } from 'react'

export const TodoItem = ({ item, toggleTodo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
    
    return (
        <div>
            <input type="checkbox" checked={item.completed} onClick={() => toggleTodo(item.id)} />
            {isEditing ? 
                <input type='text' 
                value={editText} 
                onChange={e => setEditText(e.target.value)} 
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        updateTodo(item.id, editText);
                        setIsEditing(false);
                    }
                }}
                /> : <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
                }
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'save' : 'update'}</button>
            <button onClick={() => deleteTodo(item.id)}>delete</button>
        </div>
    )
}
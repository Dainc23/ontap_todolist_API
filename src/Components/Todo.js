import React from 'react';

const Todo = (props) => {
    const {todo,RemovebyID}=props
    return (
        <div className='todo'>
            <p>{todo.name}</p><button onClick={()=>RemovebyID(todo.id)}><i className='fa-solid fa-xmark'></i></button>
        </div>
    );
}

export default Todo;

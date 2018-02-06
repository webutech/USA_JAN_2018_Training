import React from 'react';
const TodoFormComponent = (props) =>{
    return(
        <form onSubmit={props.addTodo}>
            <input type="text" value={props.currentTodo} onChange={props.updateTodo}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoFormComponent;
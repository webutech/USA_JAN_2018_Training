import React from 'react';

import TodoTextComponent from './todoTextComponent';

class TodoListComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={            
            todos:[
                {todoText:'Create React-TODO App', completed:false},
                {todoText:'Create PPT for React', completed:false},
                {todoText:'REDUX POC', completed:false}
            ]
        };
        this.changeTodo=this.changeTodo.bind(this);
    }

    changeTodo(index){
        let todos=this.state.todos;
        let todo=todos[index];
        todo.completed=!todo.completed;
        this.setState({
            todos
        });
        console.log(this.state.todos[index]);
    }
    render(){
        //var self=this; // binding of this ref to local 
        // if you want to access this in callback function then bind it in some other var
        // because callback functions will have its own scope
        return(
            <ul>
                {
                  this.state.todos.map((todo,index)=>{
                     return <TodoTextComponent 
                        key={todo.todoText} 
                        todo={todo}
                        index={index}
                        clickHandler={this.changeTodo}
                        /> 
                  })  
                }
               
            </ul>
        );
    }
}

export default TodoListComponent;
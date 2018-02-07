import React from 'react';

import TodoTextComponent from './todoTextComponent';
import TodoFormComponent from './todoFormComponent'
import PropTypes from 'prop-types';

class TodoListComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={            
            todos:[
                {todoText:'Create React-TODO App', completed:false},
                {todoText:'Create PPT for React', completed:false},
                {todoText:'REDUX POC', completed:false}
            ],
            currentTodo:''
        };
        this.changeTodo=this.changeTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.editTodo=this.editTodo.bind(this);      
    }

    editTodo(position,newValue){
        //console.log('-----edit todo triggered -------'+position+'-'+newValue);
        let todos=this.state.todos;
        let updatedTodo=todos[position];
        updatedTodo.todoText=newValue;
        this.setState({
            todos
        })
    }

    deleteTodo(todoTobeDeleted){
       let todos=this.state.todos;
       todos.splice(todoTobeDeleted,1);
       this.setState({
           todos
       });
    // console.log('------------'+todoTobeDeleted);

    }
    addTodo(event){
        event.preventDefault();
        let todos=this.state.todos;
        let currentTodo=this.state.currentTodo;
        todos.push({
            todoText:currentTodo,
            completed:false
        });

        this.setState({
            todos,
            currentTodo:''
        });
        

    }
    updateTodo(event){
        this.setState({
            currentTodo:event.target.value
        })
    }
    changeTodo(index){
        let todos=this.state.todos;
        let todo=todos[index];
        todo.completed=!todo.completed;
        this.setState({todos});
        console.log(this.state.todos[index]);
    }
    render(){
        //var self=this; // binding of this ref to local 
        // if you want to access this in callback function then bind it in some other var
        // because callback functions will have its own scope
        var self=this;

        return(
            <section>
            <TodoFormComponent 
                currentTodo={this.state.currentTodo}
                updateTodo={this.updateTodo}
                addTodo={this.addTodo}/>
            <ul>
                {
                  this.state.todos.map((todo,index)=>{
                     return <TodoTextComponent 
                        key={todo.todoText} 
                        todo={todo} //object
                        index={index}
                        deleteTodo={this.deleteTodo}
                        editTodo={this.editTodo}
                        clickHandler={this.changeTodo}
                        /> 
                  })  
                }
               
            </ul>
            </section>
        );
    }
}


TodoTextComponent.propTypes={
    todo:PropTypes.object,
    index:PropTypes.number,
    deleteTodo:PropTypes.func,
    editTodo:PropTypes.func,
    clickHandler:PropTypes.func
} 
export default TodoListComponent;
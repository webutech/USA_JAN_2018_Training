import React from 'react';


const TodoTextComponent = (props) =>{
    return(

        <li onClick={()=>{props.clickHandler(props.index)}}
                className={props.todo.completed===true?'completed':''}>
                {props.todo.todoText}

                <button id="deleteButton" onClick={(event)=>{
                    event.stopPropagation();
                    props.deleteTodo(props.index)}}>X</button>

                    <button id="editButton" >Edit</button>
            </li>
    );

}

/*class TodoTextComponent extends React.Component{
    render(){
        return(
            <li onClick={()=>{this.props.clickHandler(this.props.index)}}
                className={this.props.todo.completed===true?'completed':''}>
                {this.props.todo.todoText}

                <button id="deleteButton" onClick={(event)=>{
                    event.stopPropagation();
                    this.props.deleteTodo(this.props.index)}}>X</button>
            </li>
        );
    }
}*/

export default TodoTextComponent;
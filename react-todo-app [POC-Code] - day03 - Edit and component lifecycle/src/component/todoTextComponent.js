import React from 'react';


/*const TodoTextComponent = (props) =>{
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

}*/

class TodoTextComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isEditing:false
        }
        this.toggleIsEditing=this.toggleIsEditing.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
    }

    toggleIsEditing(){
        this.setState({
            isEditing:!this.state.isEditing
        })

    }

    updateTodo(event){
        event.preventDefault();
        // pass the position and value in edittodo method
        //console.log('------updatetodo triggered--------'+this.input.value);
        this.props.editTodo(this.props.index,this.input.value);
        this.toggleIsEditing();
    }
    renderUpdateForm(){
        return(
            <form onSubmit={this.updateTodo} className="editForm">
                <input 
                    type="text" 
                    defaultValue={this.props.todo.todoText}
                   ref={(value) => { this.input = value; }}
                   className="todoUpdateText"/>
                <button type="submit" className="todoUpdateButton">Update</button>
            </form>
        )
    }

    renderTodoText(){
        return(
            <li onClick={()=>{this.props.clickHandler(this.props.index)}}
                className={this.props.todo.completed===true?'completed':''}>
                {this.props.todo.todoText}

                <button id="deleteButton" onClick={(event)=>{
                    event.stopPropagation();
                    this.props.deleteTodo(this.props.index)}}>X</button>

                <button id="editButton" onClick={(event)=>{
                    event.stopPropagation();
                    this.toggleIsEditing();
                    }}>Edit</button>
            </li>
        )
    }
    render(){
        //const isEditing=this.state.isEditing;
        const {isEditing}=this.state;
        return(
            <section>
            {isEditing ?  this.renderUpdateForm() : this.renderTodoText() }
            
           
            
            </section>
        );
    }
}

export default TodoTextComponent;